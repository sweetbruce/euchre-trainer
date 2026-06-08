const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("app.js", "utf8");
const scenarioSource = `${source.slice(0, source.indexOf("const lessons ="))}
this.practiceScenarios = practiceScenarios;
this.suitNames = suitNames;`;

const context = {};
vm.createContext(context);
vm.runInContext(scenarioSource, context);

const { practiceScenarios } = context;
const players = ["left-opponent", "partner", "right-opponent", "you"];
const nextPlayer = {
  "left-opponent": "partner",
  partner: "right-opponent",
  "right-opponent": "you",
  you: "left-opponent"
};
const previousPlayer = Object.fromEntries(Object.entries(nextPlayer).map(([player, next]) => [next, player]));
const rankPower = { 9: 1, 10: 2, J: 3, Q: 4, K: 5, A: 6 };
const sameColorSuit = { hearts: "diamonds", diamonds: "hearts", clubs: "spades", spades: "clubs" };

function cardKey(card) {
  return card.join("-");
}

function effectiveSuit(card, trump) {
  if (card[0] === "J" && card[1] === sameColorSuit[trump]) return trump;
  return card[1];
}

function trumpPower(card, trump) {
  if (card[0] === "J" && card[1] === trump) return 100;
  if (card[0] === "J" && card[1] === sameColorSuit[trump]) return 99;
  if (effectiveSuit(card, trump) === trump) return rankPower[card[0]] + 80;
  return rankPower[card[0]];
}

function trickWinner(scenario) {
  const plays = [...scenario.plays, { player: "you", card: scenario.answer }];
  let best = plays[0];

  for (const play of plays.slice(1)) {
    const currentSuit = effectiveSuit(play.card, scenario.trump);
    const bestSuit = effectiveSuit(best.card, scenario.trump);
    const currentTrump = currentSuit === scenario.trump;
    const bestTrump = bestSuit === scenario.trump;
    let beats = false;

    if (currentTrump && !bestTrump) beats = true;
    else if (currentTrump && bestTrump) beats = trumpPower(play.card, scenario.trump) > trumpPower(best.card, scenario.trump);
    else if (!currentTrump && !bestTrump && currentSuit === scenario.ledSuit && bestSuit === scenario.ledSuit) {
      beats = rankPower[play.card[0]] > rankPower[best.card[0]];
    }

    if (beats) best = play;
  }

  return best.player;
}

function expectedOrderFromLead(lead, count) {
  const order = [lead];
  while (order.length < count) order.push(nextPlayer[order[order.length - 1]]);
  return order;
}

const problems = [];

practiceScenarios.forEach((scenario, index) => {
  const label = scenario.title || `Practice ${index + 1}`;
  const seen = new Map();

  Object.entries(scenario.hands).forEach(([player, hand]) => {
    hand.forEach((card) => {
      const key = cardKey(card);
      if (seen.has(key)) problems.push(`${label}: duplicate ${key} in ${seen.get(key)} and ${player}`);
      seen.set(key, player);
    });
  });

  if (!players.includes(scenario.dealer)) problems.push(`${label}: invalid dealer ${scenario.dealer}`);
  if (!players.includes(scenario.turn)) problems.push(`${label}: invalid turn ${scenario.turn}`);

  if (scenario.type === "call") {
    if (scenario.options.includes(scenario.passedSuit)) problems.push(`${label}: passed suit appears as a call option`);
    if (!scenario.options.includes(scenario.answer)) problems.push(`${label}: answer is not in call options`);
    if (scenario.answer === scenario.passedSuit) problems.push(`${label}: answer is the turned-down suit`);
    return;
  }

  if (!scenario.plays?.length) problems.push(`${label}: play scenario has no table plays`);

  const lead = scenario.plays?.[0]?.player;
  if (lead && scenario.dealer !== previousPlayer[lead]) {
    problems.push(`${label}: dealer ${scenario.dealer} does not match first-trick leader ${lead}`);
  }

  if (lead && scenario.order) {
    const expected = expectedOrderFromLead(lead, scenario.order.length).join(",");
    if (scenario.order.join(",") !== expected) problems.push(`${label}: order does not match first play lead`);
  }

  if (lead) {
    const expectedPlayers = expectedOrderFromLead(lead, scenario.plays.length + 1);
    const actualPlayers = [...scenario.plays.map((play) => play.player), "you"];
    if (actualPlayers.join(",") !== expectedPlayers.join(",")) {
      problems.push(`${label}: play order ${actualPlayers.join(" -> ")} should be ${expectedPlayers.join(" -> ")}`);
    }
  }

  scenario.plays.forEach((play) => {
    const hand = scenario.hands[play.player] || [];
    if (!hand.some((card) => cardKey(card) === cardKey(play.card))) {
      problems.push(`${label}: ${play.player} plays ${cardKey(play.card)} but does not have it`);
    }
  });

  if (!scenario.hands.you.some((card) => cardKey(card) === cardKey(scenario.answer))) {
    problems.push(`${label}: answer ${cardKey(scenario.answer)} is not in your hand`);
  }

  const actualLedSuit = effectiveSuit(scenario.plays[0].card, scenario.trump);
  if (actualLedSuit !== scenario.ledSuit) {
    problems.push(`${label}: ledSuit is ${scenario.ledSuit}, but first played card leads ${actualLedSuit}`);
  }

  const hasLedSuit = scenario.hands.you.some((card) => effectiveSuit(card, scenario.trump) === scenario.ledSuit);
  if (hasLedSuit && effectiveSuit(scenario.answer, scenario.trump) !== scenario.ledSuit) {
    problems.push(`${label}: answer does not follow ${scenario.ledSuit}`);
  }

  const computedWinner = trickWinner(scenario);
  if (computedWinner !== scenario.winner) {
    problems.push(`${label}: winner says ${scenario.winner}, computed ${computedWinner}`);
  }
});

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

console.log(`Practice audit passed: ${practiceScenarios.length} scenarios checked.`);
