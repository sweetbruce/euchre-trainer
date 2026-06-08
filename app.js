const STORAGE_KEY = "euchre-moon-school-v2";

const suitSymbols = {
  hearts: "&hearts;",
  diamonds: "&diams;",
  clubs: "&clubs;",
  spades: "&spades;"
};

const suitNames = {
  hearts: "Hearts",
  diamonds: "Diamonds",
  clubs: "Clubs",
  spades: "Spades"
};

const practiceScenarios = [
  {
    type: "play",
    title: "Practice 1",
    prompt: "Clubs were led, and hearts are trump. Choose a legal card from your hand.",
    trump: "hearts",
    dealer: "you",
    turn: "you",
    ledSuit: "clubs",
    order: ["left-opponent", "partner", "right-opponent", "you"],
    hands: {
      partner: [["K", "clubs"], ["A", "spades"], ["Q", "diamonds"], ["10", "hearts"], ["9", "spades"]],
      "right-opponent": [["9", "hearts"], ["Q", "clubs"], ["10", "spades"], ["K", "diamonds"], ["J", "spades"]],
      you: [["10", "clubs"], ["A", "diamonds"], ["J", "diamonds"], ["K", "hearts"], ["Q", "spades"]],
      "left-opponent": [["A", "clubs"], ["K", "spades"], ["Q", "hearts"], ["10", "diamonds"], ["9", "clubs"]]
    },
    plays: [
      { player: "left-opponent", card: ["A", "clubs"] },
      { player: "partner", card: ["K", "clubs"] },
      { player: "right-opponent", card: ["9", "hearts"] }
    ],
    answer: ["10", "clubs"],
    winner: "right-opponent",
    explanation: "You had a club, so you had to follow clubs. The 9&hearts; is trump, so right opponent wins the trick."
  },
  {
    type: "play",
    title: "Practice 2",
    prompt: "Hearts are trump. Which card from your hand can beat the A&hearts;?",
    trump: "hearts",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "hearts",
    order: ["partner", "right-opponent", "you", "left-opponent"],
    hands: {
      partner: [["K", "hearts"], ["Q", "clubs"], ["10", "diamonds"], ["K", "spades"], ["9", "clubs"]],
      "right-opponent": [["A", "hearts"], ["A", "clubs"], ["Q", "spades"], ["10", "clubs"], ["9", "diamonds"]],
      you: [["J", "diamonds"], ["9", "hearts"], ["A", "spades"], ["K", "clubs"], ["Q", "diamonds"]],
      "left-opponent": [["10", "hearts"], ["J", "clubs"], ["A", "diamonds"], ["K", "diamonds"], ["9", "spades"]]
    },
    plays: [
      { player: "partner", card: ["K", "hearts"] },
      { player: "right-opponent", card: ["A", "hearts"] }
    ],
    answer: ["J", "diamonds"],
    winner: "you",
    explanation: "J&diams; is the left bower (second best card), so it counts as trump and beats A&hearts;."
  },
  {
    type: "play",
    title: "Practice 3",
    prompt: "Spades are trump. Clubs were led. Choose the card you must play.",
    trump: "spades",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "clubs",
    hands: {
      partner: [["K", "clubs"], ["A", "hearts"], ["10", "diamonds"], ["9", "spades"], ["Q", "hearts"]],
      "right-opponent": [["A", "clubs"], ["Q", "spades"], ["K", "diamonds"], ["10", "hearts"], ["9", "diamonds"]],
      you: [["9", "clubs"], ["J", "spades"], ["A", "diamonds"], ["K", "hearts"], ["Q", "diamonds"]],
      "left-opponent": [["10", "clubs"], ["A", "spades"], ["J", "clubs"], ["Q", "clubs"], ["9", "hearts"]]
    },
    plays: [
      { player: "partner", card: ["K", "clubs"] },
      { player: "right-opponent", card: ["A", "clubs"] }
    ],
    answer: ["9", "clubs"],
    winner: "right-opponent",
    explanation: "You have a club, so you must follow clubs. A&clubs; is still winning unless trump is played later."
  },
  {
    type: "play",
    title: "Practice 4",
    prompt: "Diamonds are trump. Spades were led. You have no spades. Choose a trump card.",
    trump: "diamonds",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "spades",
    hands: {
      partner: [["K", "spades"], ["K", "clubs"], ["Q", "hearts"], ["10", "clubs"], ["9", "spades"]],
      "right-opponent": [["A", "spades"], ["A", "hearts"], ["10", "diamonds"], ["Q", "clubs"], ["9", "clubs"]],
      you: [["9", "diamonds"], ["A", "clubs"], ["K", "hearts"], ["Q", "diamonds"], ["10", "hearts"]],
      "left-opponent": [["Q", "spades"], ["A", "diamonds"], ["J", "hearts"], ["K", "diamonds"], ["9", "hearts"]]
    },
    plays: [
      { player: "partner", card: ["K", "spades"] },
      { player: "right-opponent", card: ["A", "spades"] }
    ],
    answer: ["9", "diamonds"],
    winner: "you",
    explanation: "You have no spades, so you may trump. Even 9&diams; beats the spades because diamonds are trump."
  },
  {
    type: "play",
    title: "Practice 5",
    prompt: "Clubs are trump. Clubs were led. Choose the right bower (best card).",
    trump: "clubs",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "clubs",
    hands: {
      partner: [["A", "clubs"], ["10", "hearts"], ["K", "spades"], ["Q", "diamonds"], ["9", "hearts"]],
      "right-opponent": [["K", "clubs"], ["A", "diamonds"], ["J", "spades"], ["10", "diamonds"], ["Q", "hearts"]],
      you: [["J", "clubs"], ["9", "clubs"], ["A", "hearts"], ["K", "diamonds"], ["9", "spades"]],
      "left-opponent": [["Q", "clubs"], ["A", "spades"], ["10", "clubs"], ["K", "hearts"], ["9", "diamonds"]]
    },
    plays: [
      { player: "partner", card: ["A", "clubs"] },
      { player: "right-opponent", card: ["J", "spades"] }
    ],
    answer: ["J", "clubs"],
    winner: "you",
    explanation: "J&clubs; is the right bower (best card), so it is the only card that can beat the left bower (second best card)."
  },
  {
    type: "play",
    title: "Practice 6",
    prompt: "Clubs are trump. Which card is the left bower (second best card)?",
    trump: "clubs",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "clubs",
    hands: {
      partner: [["K", "clubs"], ["K", "hearts"], ["Q", "diamonds"], ["10", "spades"], ["9", "diamonds"]],
      "right-opponent": [["A", "clubs"], ["A", "diamonds"], ["10", "hearts"], ["Q", "spades"], ["9", "hearts"]],
      you: [["J", "spades"], ["A", "spades"], ["Q", "clubs"], ["10", "diamonds"], ["9", "clubs"]],
      "left-opponent": [["Q", "hearts"], ["K", "spades"], ["A", "hearts"], ["10", "clubs"], ["9", "spades"]]
    },
    plays: [
      { player: "partner", card: ["K", "clubs"] },
      { player: "right-opponent", card: ["A", "clubs"] }
    ],
    answer: ["J", "spades"],
    winner: "you",
    explanation: "J&spades; is the left bower (second best card), so it counts as clubs trump."
  },
  {
    type: "play",
    title: "Practice 7",
    prompt: "Hearts are trump. Diamonds were led. Remember that J&diams; is not a diamond now.",
    trump: "hearts",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "diamonds",
    hands: {
      partner: [["9", "diamonds"], ["K", "clubs"], ["Q", "spades"], ["10", "hearts"], ["9", "clubs"]],
      "right-opponent": [["K", "diamonds"], ["A", "clubs"], ["Q", "hearts"], ["10", "spades"], ["K", "spades"]],
      you: [["J", "diamonds"], ["A", "spades"], ["K", "hearts"], ["Q", "clubs"], ["9", "spades"]],
      "left-opponent": [["Q", "diamonds"], ["A", "hearts"], ["J", "hearts"], ["10", "clubs"], ["9", "hearts"]]
    },
    plays: [
      { player: "partner", card: ["9", "diamonds"] },
      { player: "right-opponent", card: ["K", "diamonds"] }
    ],
    answer: ["J", "diamonds"],
    winner: "you",
    explanation: "J&diams; is the left bower (second best card), so it counts as hearts trump, not diamonds."
  },
  {
    type: "play",
    title: "Practice 8",
    prompt: "No trump has been played. Hearts were led. Choose your highest heart.",
    trump: "spades",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "hearts",
    hands: {
      partner: [["9", "hearts"], ["A", "clubs"], ["Q", "spades"], ["10", "diamonds"], ["9", "clubs"]],
      "right-opponent": [["K", "hearts"], ["A", "diamonds"], ["10", "clubs"], ["Q", "clubs"], ["9", "diamonds"]],
      you: [["A", "hearts"], ["Q", "hearts"], ["J", "clubs"], ["K", "diamonds"], ["10", "spades"]],
      "left-opponent": [["10", "hearts"], ["A", "spades"], ["K", "clubs"], ["Q", "diamonds"], ["9", "spades"]]
    },
    plays: [
      { player: "partner", card: ["9", "hearts"] },
      { player: "right-opponent", card: ["K", "hearts"] }
    ],
    answer: ["A", "hearts"],
    winner: "you",
    explanation: "You followed hearts and played A&hearts;, the highest heart in this trick so far."
  },
  {
    type: "play",
    title: "Practice 9",
    prompt: "Spades are trump. Your partner is winning with A&clubs;. You have a club, so follow clubs.",
    trump: "spades",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "clubs",
    hands: {
      partner: [["A", "clubs"], ["K", "hearts"], ["Q", "diamonds"], ["10", "spades"], ["9", "hearts"]],
      "right-opponent": [["K", "clubs"], ["A", "diamonds"], ["Q", "spades"], ["10", "diamonds"], ["9", "clubs"]],
      you: [["10", "clubs"], ["J", "spades"], ["A", "hearts"], ["K", "diamonds"], ["9", "spades"]],
      "left-opponent": [["Q", "clubs"], ["A", "spades"], ["J", "clubs"], ["10", "hearts"], ["9", "diamonds"]]
    },
    plays: [
      { player: "partner", card: ["A", "clubs"] },
      { player: "right-opponent", card: ["K", "clubs"] }
    ],
    answer: ["10", "clubs"],
    winner: "partner",
    explanation: "You had a club, so you followed clubs. Partner's A&clubs; is still winning."
  },
  {
    type: "play",
    title: "Practice 10",
    prompt: "Diamonds are trump. Hearts were led. You have no hearts, so play a trump card.",
    trump: "diamonds",
    dealer: "you",
    turn: "you",
    ledSuit: "hearts",
    hands: {
      partner: [["10", "hearts"], ["K", "clubs"], ["Q", "spades"], ["10", "diamonds"], ["9", "clubs"]],
      "right-opponent": [["A", "hearts"], ["A", "clubs"], ["Q", "diamonds"], ["10", "spades"], ["K", "diamonds"]],
      you: [["J", "hearts"], ["9", "diamonds"], ["A", "spades"], ["K", "spades"], ["Q", "clubs"]],
      "left-opponent": [["Q", "hearts"], ["A", "diamonds"], ["J", "diamonds"], ["10", "clubs"], ["9", "spades"]]
    },
    plays: [
      { player: "left-opponent", card: ["Q", "hearts"] },
      { player: "partner", card: ["10", "hearts"] },
      { player: "right-opponent", card: ["A", "hearts"] }
    ],
    answer: ["J", "hearts"],
    winner: "you",
    explanation: "J&hearts; is the left bower (second best card), so it counts as diamonds trump and wins."
  },
  {
    type: "play",
    title: "Practice 11",
    prompt: "Clubs are trump. Spades were led. J&spades; counts as clubs, so choose your spade.",
    trump: "clubs",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "spades",
    hands: {
      partner: [["A", "spades"], ["K", "clubs"], ["Q", "diamonds"], ["10", "hearts"], ["9", "clubs"]],
      "right-opponent": [["K", "spades"], ["A", "hearts"], ["Q", "clubs"], ["10", "diamonds"], ["9", "diamonds"]],
      you: [["J", "spades"], ["Q", "spades"], ["A", "diamonds"], ["10", "clubs"], ["9", "hearts"]],
      "left-opponent": [["10", "spades"], ["A", "clubs"], ["J", "clubs"], ["K", "diamonds"], ["9", "spades"]]
    },
    plays: [
      { player: "partner", card: ["A", "spades"] },
      { player: "right-opponent", card: ["K", "spades"] }
    ],
    answer: ["Q", "spades"],
    winner: "partner",
    explanation: "Because clubs are trump, J&spades; is not a spade. You follow spades with Q&spades;."
  },
  {
    type: "play",
    title: "Practice 12",
    prompt: "Hearts are trump. Trump was led. Choose your strongest trump.",
    trump: "hearts",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "hearts",
    hands: {
      partner: [["10", "hearts"], ["A", "clubs"], ["Q", "spades"], ["K", "diamonds"], ["9", "clubs"]],
      "right-opponent": [["A", "hearts"], ["K", "spades"], ["Q", "diamonds"], ["10", "spades"], ["9", "diamonds"]],
      you: [["J", "hearts"], ["J", "diamonds"], ["9", "hearts"], ["A", "spades"], ["K", "clubs"]],
      "left-opponent": [["K", "hearts"], ["A", "diamonds"], ["Q", "clubs"], ["10", "clubs"], ["9", "spades"]]
    },
    plays: [
      { player: "partner", card: ["10", "hearts"] },
      { player: "right-opponent", card: ["A", "hearts"] }
    ],
    answer: ["J", "hearts"],
    winner: "you",
    explanation: "J&hearts; is the right bower (best card), the strongest trump card."
  },
  {
    type: "play",
    title: "Practice 13",
    prompt: "Spades are trump. Diamonds were led. You have diamonds, so you must follow diamonds.",
    trump: "spades",
    dealer: "you",
    turn: "you",
    ledSuit: "diamonds",
    hands: {
      partner: [["A", "diamonds"], ["K", "clubs"], ["Q", "hearts"], ["10", "spades"], ["9", "clubs"]],
      "right-opponent": [["K", "diamonds"], ["A", "clubs"], ["Q", "spades"], ["10", "hearts"], ["9", "diamonds"]],
      you: [["10", "diamonds"], ["J", "spades"], ["A", "hearts"], ["K", "spades"], ["Q", "clubs"]],
      "left-opponent": [["Q", "diamonds"], ["A", "spades"], ["J", "clubs"], ["10", "clubs"], ["9", "hearts"]]
    },
    plays: [
      { player: "left-opponent", card: ["Q", "diamonds"] },
      { player: "partner", card: ["A", "diamonds"] },
      { player: "right-opponent", card: ["K", "diamonds"] }
    ],
    answer: ["10", "diamonds"],
    winner: "partner",
    explanation: "You had a diamond, so you followed diamonds. Partner's A&diams; wins this trick."
  },
  {
    type: "play",
    title: "Practice 14",
    prompt: "Clubs are trump. You have no hearts after hearts were led. Your partner is winning with A&hearts;. Save trump and throw off.",
    trump: "clubs",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "hearts",
    hands: {
      partner: [["A", "hearts"], ["K", "diamonds"], ["Q", "spades"], ["10", "clubs"], ["9", "diamonds"]],
      "right-opponent": [["K", "hearts"], ["A", "diamonds"], ["Q", "clubs"], ["10", "spades"], ["J", "diamonds"]],
      you: [["9", "clubs"], ["A", "spades"], ["K", "clubs"], ["Q", "diamonds"], ["10", "diamonds"]],
      "left-opponent": [["Q", "hearts"], ["A", "clubs"], ["J", "spades"], ["10", "hearts"], ["9", "spades"]]
    },
    plays: [
      { player: "partner", card: ["A", "hearts"] },
      { player: "right-opponent", card: ["K", "hearts"] }
    ],
    answer: ["10", "diamonds"],
    winner: "partner",
    explanation: "You have no hearts, so you may play anything. Since partner is already winning with A&hearts;, save your trump and discard 10&diams;."
  },
  {
    type: "play",
    title: "Practice 15",
    prompt: "Diamonds are trump. Clubs were led. Choose your club.",
    trump: "diamonds",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "clubs",
    hands: {
      partner: [["A", "clubs"], ["K", "hearts"], ["Q", "spades"], ["10", "diamonds"], ["9", "hearts"]],
      "right-opponent": [["K", "clubs"], ["A", "hearts"], ["Q", "diamonds"], ["10", "spades"], ["9", "clubs"]],
      you: [["Q", "clubs"], ["J", "hearts"], ["A", "spades"], ["K", "diamonds"], ["9", "diamonds"]],
      "left-opponent": [["10", "clubs"], ["A", "diamonds"], ["J", "diamonds"], ["K", "spades"], ["9", "spades"]]
    },
    plays: [
      { player: "partner", card: ["A", "clubs"] },
      { player: "right-opponent", card: ["K", "clubs"] }
    ],
    answer: ["Q", "clubs"],
    winner: "partner",
    explanation: "You had a club, so you followed clubs. Partner's A&clubs; remains highest."
  },
  {
    type: "play",
    title: "Practice 16",
    prompt: "Hearts are trump. You have no clubs after clubs were led. Your partner is winning with A&clubs;. Save trump and throw off.",
    trump: "hearts",
    dealer: "left-opponent",
    turn: "you",
    ledSuit: "clubs",
    hands: {
      partner: [["A", "clubs"], ["K", "diamonds"], ["Q", "spades"], ["10", "hearts"], ["9", "diamonds"]],
      "right-opponent": [["K", "clubs"], ["A", "diamonds"], ["Q", "hearts"], ["10", "spades"], ["9", "clubs"]],
      you: [["9", "hearts"], ["A", "spades"], ["K", "hearts"], ["Q", "diamonds"], ["10", "diamonds"]],
      "left-opponent": [["Q", "clubs"], ["A", "hearts"], ["J", "hearts"], ["10", "clubs"], ["9", "spades"]]
    },
    plays: [
      { player: "partner", card: ["A", "clubs"] },
      { player: "right-opponent", card: ["K", "clubs"] }
    ],
    answer: ["10", "diamonds"],
    winner: "partner",
    explanation: "With no clubs, you may play anything. Partner is already winning with A&clubs;, so keep your trump and discard 10&diams;."
  },
  {
    type: "call",
    title: "Practice 17",
    prompt: "Everyone passed on the first round. The spade upcard is turned down. What trump should you call?",
    upcard: ["9", "spades"],
    dealer: "left-opponent",
    turn: "you",
    passedSuit: "spades",
    options: ["clubs", "hearts", "diamonds"],
    answer: "clubs",
    hands: {
      partner: [],
      "right-opponent": [],
      you: [["J", "clubs"], ["A", "clubs"], ["K", "clubs"], ["9", "hearts"], ["Q", "diamonds"]],
      "left-opponent": []
    },
    explanation: "Call clubs. You have the right bower (best card) J&clubs;, A&clubs;, and K&clubs;. Spades cannot be called after the spade upcard is turned down."
  },
  {
    type: "call",
    title: "Practice 18",
    prompt: "Everyone passed on the first round. The heart upcard is turned down. What trump should you call?",
    upcard: ["Q", "hearts"],
    dealer: "partner",
    turn: "you",
    passedSuit: "hearts",
    options: ["diamonds", "clubs", "spades"],
    answer: "diamonds",
    hands: {
      partner: [],
      "right-opponent": [],
      you: [["J", "hearts"], ["A", "diamonds"], ["K", "diamonds"], ["10", "clubs"], ["9", "spades"]],
      "left-opponent": []
    },
    explanation: "Call diamonds. Since diamonds are trump, J&hearts; becomes the left bower (second best card), and you also have A&diams; and K&diams;."
  },
  {
    type: "call",
    title: "Practice 19",
    prompt: "Everyone passed on the first round. The club upcard is turned down. What trump should you call?",
    upcard: ["10", "clubs"],
    dealer: "you",
    turn: "you",
    passedSuit: "clubs",
    options: ["spades", "hearts", "diamonds"],
    answer: "spades",
    hands: {
      partner: [],
      "right-opponent": [],
      you: [["J", "clubs"], ["A", "spades"], ["K", "spades"], ["Q", "hearts"], ["9", "diamonds"]],
      "left-opponent": []
    },
    explanation: "Call spades. J&clubs; becomes the left bower (second best card) when spades are trump, and you also have A&spades; and K&spades;."
  },
  {
    type: "call",
    title: "Practice 20",
    prompt: "Everyone passed on the first round. The diamond upcard is turned down. What trump should you call?",
    upcard: ["9", "diamonds"],
    dealer: "right-opponent",
    turn: "you",
    passedSuit: "diamonds",
    options: ["hearts", "clubs", "spades"],
    answer: "hearts",
    hands: {
      partner: [],
      "right-opponent": [],
      you: [["J", "diamonds"], ["A", "hearts"], ["K", "hearts"], ["Q", "clubs"], ["9", "spades"]],
      "left-opponent": []
    },
    explanation: "Call hearts. J&diams; becomes the left bower (second best card), and A&hearts; plus K&hearts; gives you a strong beginner call."
  }
];

const lessons = [
  {
    id: "table-basics",
    title: "The Table",
    symbol: "T",
    intro: "Euchre starts with the <strong>table</strong>: four players, two teams, one dealer, and <strong>five cards each</strong>.",
    steps: [
      "You have one <strong>partner</strong>, and they sit directly across from you.",
      "The other two players are your <strong>opponents</strong>, sitting to your left and right.",
      "One player is the <span class=\"concept-link\">dealer</span>. The dealer gives everyone five cards, then the dealer spot rotates after the hand."
    ],
    facts: [
      ["Players", "4 total"],
      ["Teams", "You and partner vs two opponents"],
      ["Cards dealt", "5 cards each"],
      ["Turn order", "Around the table"]
    ],
    cards: [],
    board: {
      type: "deal",
      dealer: "left-opponent",
      note: "Partner across from you. Dealer rotates after each hand. Play follows the turn marker."
    },
    quiz: {
      question: "Where does your partner sit?",
      options: ["Across from you", "To your left", "Wherever the dealer sits"],
      answer: 0,
      good: "Yes! Your <strong>partner</strong> sits across from you at the top of the table.",
      retry: "Almost. In euchre, your <strong>partner</strong> sits directly across from you."
    }
  },
  {
    id: "suits",
    title: "The Four Suits",
    symbol: "&clubs;",
    intro: "Every euchre hand starts with <strong>suits</strong>. You only need four names, two colors, and a little card-table confidence.",
    steps: [
      "Euchre uses the same <strong>four suits</strong> as a regular deck: <span class=\"concept-link\">hearts, diamonds, clubs, and spades</span>.",
      "<strong>Hearts and diamonds</strong> are red. <strong>Clubs and spades</strong> are black.",
      "For beginner euchre, we only use <span class=\"concept-link\">9, 10, J, Q, K, and A</span> from each suit."
    ],
    facts: [
      ["Red suits", "Hearts and diamonds"],
      ["Black suits", "Clubs and spades"],
      ["Cards used", "9 through ace"]
    ],
    cards: [["A", "hearts"], ["K", "diamonds"], ["Q", "clubs"], ["J", "spades"]],
    board: {
      type: "suits",
      caption: "The deck family",
      note: "Red suits travel together. Black suits travel together.",
      suits: ["hearts", "diamonds", "clubs", "spades"]
    },
    quiz: {
      question: "Which two suits are red?",
      options: ["Hearts and diamonds", "Clubs and spades", "Hearts and clubs"],
      answer: 0,
      good: "Yes! <strong>Hearts and diamonds</strong> are the red pair. Good start.",
      retry: "Almost. The <strong>red suits</strong> are hearts and diamonds."
    }
  },
  {
    id: "tricks",
    title: "Taking A Trick",
    symbol: "*",
    intro: "A <strong>trick</strong> is one tiny battle: each player plays one card, then <span class=\"concept-link\">one card wins</span>. Five tricks make a euchre hand.",
    steps: [
      "The first card played is called the <strong>lead</strong>. Its suit is the <span class=\"concept-link\">led suit</span>.",
      "If no trump is played, the <strong>highest card</strong> in the led suit wins the trick.",
      "The player who <strong>wins the trick</strong> leads the next one."
    ],
    facts: [
      ["One trick", "Four cards played"],
      ["Led suit", "The suit of the first card"],
      ["Winner", "Highest card in the led suit, unless trump appears later"]
    ],
    cards: [["A", "clubs"], ["K", "clubs"], ["9", "clubs"], ["A", "hearts"]],
    board: {
      type: "table",
      caption: "Clubs are led",
      led: "clubs",
      trump: "None yet",
      winner: "Lead",
      plays: [
        { seat: "Lead", card: ["A", "clubs"], tag: "Led suit" },
        { seat: "Second", card: ["K", "clubs"] },
        { seat: "Third", card: ["9", "clubs"] },
        { seat: "Fourth", card: ["A", "hearts"], muted: true }
      ],
      note: "The ace of hearts looks fancy, but hearts were not led."
    },
    quiz: {
      question: "Clubs were led. No trump is involved. Which card wins?",
      options: ["A&clubs;", "K&clubs;", "A&hearts;"],
      optionCards: [["A", "clubs"], ["K", "clubs"], ["A", "hearts"]],
      answer: 0,
      good: "Exactly. <strong>Clubs were led</strong>, so the ace of clubs wins this trick.",
      retry: "So close. Because <strong>clubs were led</strong>, the best club wins. That is A&clubs;."
    }
  },
  {
    id: "trump",
    title: "Trump Suits",
    symbol: "C",
    intro: "<strong>Trump</strong> is the chosen suit for the hand. When trump appears, it <span class=\"concept-link\">outranks ordinary suits</span>.",
    steps: [
      "Each hand has <strong>one trump suit</strong>.",
      "Any <span class=\"concept-link\">trump card</span> beats any non-trump card, even an ace.",
      "If more than one trump card is played, the <strong>higher trump</strong> wins."
    ],
    facts: [
      ["Trump beats", "Every non-trump card"],
      ["Still important", "You must follow suit when you can"],
      ["Example", "A 9 of trump beats an ace from another suit"]
    ],
    cards: [["A", "hearts"], ["9", "spades"], ["K", "hearts"], ["Q", "hearts"]],
    board: {
      type: "table",
      caption: "Spades are trump",
      led: "hearts",
      trump: "spades",
      winner: "Second",
      plays: [
        { seat: "Lead", card: ["A", "hearts"], tag: "Led suit" },
        { seat: "Second", card: ["9", "spades"], tag: "Trump" },
        { seat: "Third", card: null },
        { seat: "Fourth", card: null }
      ],
      note: "A tiny trump card beats every non-trump card."
    },
    quiz: {
      question: "Spades are trump. Hearts were led. Which card wins?",
      options: ["A&hearts;", "9&spades;", "K&hearts;"],
      optionCards: [["A", "hearts"], ["9", "spades"], ["K", "hearts"]],
      answer: 1,
      good: "Yes! Even the little <strong>9&spades;</strong> beats the ace because spades are trump.",
      retry: "Focus on the <strong>trump suit</strong>. Since spades are trump, 9&spades; wins over any heart."
    }
  },
  {
    id: "right-bower",
    title: "Right Bower (best card)",
    symbol: "R",
    intro: "The <strong>right bower (best card)</strong> is the jack of trump. It is the <span class=\"concept-link\">strongest card</span> in the whole hand.",
    steps: [
      "If hearts are trump, the <strong>jack of hearts</strong> is the right bower (best card).",
      "The <span class=\"concept-link\">right bower (best card)</span> beats every other card, including every other trump card.",
      "It is still part of the <strong>trump suit</strong>."
    ],
    facts: [
      ["Right bower (best card)", "Jack of trump"],
      ["Power", "Highest card in the hand"],
      ["Example", "If clubs are trump, J&clubs; is right bower (best card)"]
    ],
    cards: [["J", "hearts"], ["A", "hearts"], ["K", "hearts"], ["A", "spades"]],
    board: {
      type: "table",
      caption: "Hearts are trump",
      led: "hearts",
      trump: "hearts",
      winner: "Lead",
      plays: [
        { seat: "Lead", card: ["J", "hearts"], tag: "Right bower (best card)" },
        { seat: "Second", card: null },
        { seat: "Third", card: null },
        { seat: "Fourth", card: null }
      ],
      note: "The jack of trump is always the top card."
    },
    quiz: {
      question: "Hearts are trump. What is the strongest card?",
      options: ["A&hearts;", "J&hearts;", "A&spades;"],
      optionCards: [["A", "hearts"], ["J", "hearts"], ["A", "spades"]],
      answer: 1,
      good: "Perfect. <strong>J&hearts;</strong> is the right bower (best card) and rules the whole hand.",
      retry: "The <strong>jack of trump</strong> gets the crown. With hearts trump, J&hearts; is strongest."
    }
  },
  {
    id: "left-bower",
    title: "Left Bower (second best card)",
    symbol: "L",
    intro: "The <strong>left bower (second best card)</strong> is the jack of the <span class=\"concept-link\">same-color suit</span> as trump. It counts as trump for that hand.",
    steps: [
      "If hearts are trump, the left bower (second best card) is <strong>J&diams;</strong> because diamonds are the other red suit.",
      "The <span class=\"concept-link\">left bower (second best card)</span> is right below the right bower (best card).",
      "The left bower (second best card) counts as <strong>trump</strong>, not as its printed suit, while that hand is being played."
    ],
    facts: [
      ["Red trump", "The other red jack becomes left bower (second best card)"],
      ["Black trump", "The other black jack becomes left bower (second best card)"],
      ["Very important", "Left bower (second best card) follows trump, not its printed suit"]
    ],
    cards: [["J", "diamonds"], ["A", "hearts"], ["K", "hearts"], ["J", "hearts"]],
    board: {
      type: "table",
      caption: "Hearts are trump",
      led: "hearts",
      trump: "hearts",
      winner: "Fourth",
      plays: [
        { seat: "Lead", card: ["J", "diamonds"], tag: "Left bower (second best card)" },
        { seat: "Second", card: ["A", "hearts"], tag: "Trump" },
        { seat: "Third", card: ["K", "hearts"], tag: "Trump" },
        { seat: "Fourth", card: ["J", "hearts"], tag: "Right bower (best card)" }
      ],
      note: "J&diams; is printed as diamonds, but this hand treats it as trump."
    },
    quiz: {
      question: "Hearts are trump. What suit is J&diams; treated as right now?",
      options: ["Diamonds", "Hearts / trump", "Clubs"],
      answer: 1,
      good: "Yes! <strong>J&diams;</strong> becomes the left bower (second best card), so it is treated as hearts/trump.",
      retry: "This is the unusual bower rule. With hearts trump, <strong>J&diams;</strong> counts as trump."
    }
  },
  {
    id: "left-bower-practice",
    title: "Second Best Card Practice",
    symbol: "L",
    intro: "Let's practice spotting the <strong>second best card</strong> before we move on. Look for the jack that matches trump's <span class=\"concept-link\">color pair</span>, not the jack printed in trump itself.",
    steps: [
      "First, name the <strong>trump suit</strong>.",
      "Next, find the suit that is the <span class=\"concept-link\">same color</span> as trump.",
      "The jack of that same-color suit is the <strong>second best card</strong>."
    ],
    facts: [
      ["If hearts are trump", "J&diams; is second best"],
      ["If diamonds are trump", "J&hearts; is second best"],
      ["If clubs are trump", "J&spades; is second best"],
      ["If spades are trump", "J&clubs; is second best"]
    ],
    cards: [["J", "hearts"], ["J", "diamonds"], ["J", "clubs"], ["J", "spades"]],
    board: {
      type: "table",
      caption: "Diamonds are trump",
      led: "diamonds",
      trump: "diamonds",
      plays: [
        { seat: "Lead", card: ["J", "hearts"] },
        { seat: "Second", card: ["J", "diamonds"] },
        { seat: "Third", card: ["J", "clubs"] },
        { seat: "Fourth", card: ["J", "spades"] }
      ],
      note: "Diamonds are red, so the second best card will be the jack from the other red suit."
    },
    quiz: {
      question: "Diamonds are trump. Which card is the second best card?",
      options: ["J&hearts;", "J&diams;", "J&clubs;"],
      optionCards: [["J", "hearts"], ["J", "diamonds"], ["J", "clubs"]],
      answer: 0,
      good: "Yes! <strong>J&hearts;</strong> is the second best card because hearts are the other red suit.",
      retry: "So close. Diamonds are red, so the <strong>other red jack</strong>, J&hearts;, is the second best card."
    }
  },
  {
    id: "following",
    title: "Following Suit",
    symbol: "O",
    intro: "The big beginner rule: if you <strong>can follow the led suit</strong>, you must. Your choices open up only when you cannot.",
    steps: [
      "When a suit is led, each player <strong>must play that suit</strong> if they have it.",
      "If you do not have the led suit, you may play <span class=\"concept-link\">any card</span>, including trump.",
      "Remember: the <strong>left bower (second best card)</strong> counts as trump, so it does not follow its printed suit."
    ],
    facts: [
      ["Must follow", "When you have the led suit"],
      ["Can trump", "Only when you cannot follow, or when trump was led"],
      ["Left bower (second best card)", "Follows trump"]
    ],
    cards: [["10", "clubs"], ["A", "diamonds"], ["J", "spades"], ["9", "hearts"]],
    board: {
      type: "hand",
      caption: "Clubs are led",
      led: "clubs",
      trump: "hearts",
      hand: [
        { card: ["10", "clubs"], playable: true },
        { card: ["A", "diamonds"] },
        { card: ["J", "spades"] },
        { card: ["9", "hearts"] },
        { card: ["Q", "spades"] }
      ],
      note: "Because you have a club, your legal choice is the club."
    },
    quiz: {
      question: "Clubs were led. You have 10&clubs;. Must you play a club?",
      options: ["Yes", "No", "Only if clubs are trump"],
      answer: 0,
      good: "Correct. If you have the <strong>led suit</strong>, you follow it. You are absolutely getting this.",
      retry: "Almost. Since you have a club and <strong>clubs were led</strong>, you must play a club."
    }
  },
  {
    id: "choosing-trump",
    title: "Choosing Trump",
    symbol: "T",
    intro: "Before tricks begin, players decide <strong>which suit is trump</strong>. The team that chooses trump becomes the <span class=\"concept-link\">makers</span>.",
    steps: [
      "First, one card is turned face up. This is the <strong>upcard</strong>.",
      "Players may tell the dealer to <span class=\"concept-link\">pick up</span> the upcard. If that happens, the upcard's suit becomes trump.",
      "If everyone passes, players get one more chance to name a different trump suit."
    ],
    facts: [
      ["Upcard", "The face-up card that can set trump"],
      ["Dealer picks up", "Upcard suit becomes trump"],
      ["Makers", "The team that chose trump"]
    ],
    cards: [["Q", "hearts"], ["J", "hearts"], ["9", "clubs"]],
    board: {
      type: "trump-choice",
      upcard: ["Q", "hearts"],
      dealer: "you",
      note: "If the dealer picks up Q&hearts;, hearts become trump for the hand."
    },
    quiz: {
      question: "The upcard is Q&hearts;. If the dealer picks it up, what suit is trump?",
      options: ["Hearts", "Clubs", "Spades"],
      answer: 0,
      good: "Yes! The <strong>upcard's suit</strong> becomes trump, so hearts are trump.",
      retry: "Almost. If Q&hearts; is picked up, the suit on that card, hearts, becomes trump."
    }
  },
  {
    id: "scoring",
    title: "Scoring A Hand",
    symbol: "D",
    intro: "<strong>Scoring</strong> is just counting how many of the five tricks the team that chose trump managed to win.",
    steps: [
      "The team that chose trump is called the <span class=\"concept-link\">makers</span>.",
      "If makers win <strong>3 or 4 tricks</strong>, they score 1 point.",
      "If makers win all 5 tricks, they score 2 points. If they win <strong>fewer than 3</strong>, they are euchred and defenders score 2."
    ],
    facts: [
      ["Makers win 3 or 4", "Makers score 1"],
      ["Makers win 5", "Makers score 2"],
      ["Makers win 0, 1, or 2", "Defenders score 2"]
    ],
    cards: [["3", "tricks"], ["4", "tricks"], ["5", "tricks"]],
    board: {
      type: "table",
      caption: "Makers won 2 tricks",
      trump: "hearts",
      winner: "Fourth",
      plays: [
        { seat: "Lead", card: ["A", "clubs"] },
        { seat: "Second", card: ["K", "clubs"] },
        { seat: "Third", card: ["9", "clubs"] },
        { seat: "Fourth", card: ["10", "clubs"] }
      ],
      trickSummary: [
        { label: "Makers", count: 2, tone: "makers" },
        { label: "Defenders", count: 3, tone: "defenders" }
      ],
      note: "Makers need at least 3 tricks. Two is a euchre, so defenders score 2."
    },
    quiz: {
      question: "The makers win only 2 tricks. Who scores?",
      options: ["Makers score 1", "Defenders score 2", "Nobody scores"],
      answer: 1,
      good: "Yes. The <strong>makers got euchred</strong>, so defenders score 2.",
      retry: "If the makers get <strong>fewer than 3 tricks</strong>, defenders score 2. Dramatic, but fair."
    }
  },
  {
    id: "alone",
    title: "Going Alone",
    symbol: "M",
    intro: "<strong>Going alone</strong> is the bonus-round idea: one player sends their partner aside and tries to win every trick.",
    steps: [
      "A player who chooses trump can decide to <span class=\"concept-link\">go alone</span>.",
      "Their partner sits out for that hand, so it is <strong>one player</strong> against two defenders.",
      "If the lone player wins <strong>all 5 tricks</strong>, their team scores 4 points. Otherwise, ordinary scoring applies."
    ],
    facts: [
      ["Goal", "Win all 5 tricks"],
      ["Reward", "4 points for a successful alone hand"],
      ["Beginner focus", "Know the rule before worrying about when to try it"]
    ],
    cards: [["J", "spades"], ["J", "clubs"], ["A", "spades"], ["K", "spades"]],
    board: {
      type: "table",
      caption: "Going alone",
      trump: "spades",
      plays: [
        { seat: "Partner", card: null, tag: "Sits out" },
        { seat: "Right", card: null },
        { seat: "You", card: ["J", "spades"], tag: "Lone player" },
        { seat: "Left", card: null }
      ],
      trickSummary: [
        { label: "Goal", count: 5, tone: "makers" },
        { label: "Reward", value: "4 points", tone: "defenders" }
      ],
      note: "Partner sits out. The lone player is chasing all five tricks for 4 points."
    },
    quiz: {
      question: "A lone player wins all 5 tricks. How many points does their team score?",
      options: ["2", "4", "1"],
      answer: 1,
      good: "Exactly. A successful <strong>alone hand</strong> is worth 4 points.",
      retry: "Going alone pays extra only when <strong>all 5 tricks</strong> are won: that is 4 points."
    }
  },
  {
    id: "review",
    title: "Beginner Review",
    symbol: "*",
    intro: "Time to review the essentials. The app will keep <strong>revisiting ideas</strong>, because mastery takes repetition.",
    steps: [
      "<strong>Trump</strong> beats non-trump.",
      "<span class=\"concept-link\">Right bower (best card)</span> is the jack of trump and is the highest card.",
      "<span class=\"concept-link\">Left bower (second best card)</span> is the same-color jack and counts as trump."
    ],
    facts: [
      ["Trick goal", "Win at least 3 of 5"],
      ["Follow suit", "Required when possible"],
      ["Alone bonus", "4 points for all 5 tricks"]
    ],
    cards: [["J", "clubs"], ["J", "spades"], ["A", "clubs"], ["9", "diamonds"]],
    board: {
      type: "table",
      caption: "Clubs are trump",
      led: "clubs",
      trump: "clubs",
      winner: "Lead",
      plays: [
        { seat: "Lead", card: ["J", "clubs"], tag: "Right bower (best card)" },
        { seat: "Second", card: ["J", "spades"], tag: "Left bower (second best card)" },
        { seat: "Third", card: ["A", "clubs"], tag: "Trump" },
        { seat: "Fourth", card: ["9", "diamonds"], muted: true }
      ],
      note: "Same-color jack reminder: with clubs trump, J&spades; becomes trump too."
    },
    quiz: {
      question: "Clubs are trump. Which card is the left bower (second best card)?",
      options: ["J&clubs;", "J&spades;", "A&clubs;"],
      optionCards: [["J", "clubs"], ["J", "spades"], ["A", "clubs"]],
      answer: 1,
      good: "Yes. Clubs and spades are the black pair, so <strong>J&spades;</strong> becomes the left bower (second best card).",
      retry: "The <strong>left bower (second best card)</strong> is the same-color jack. With clubs trump, that is J&spades;."
    }
  }
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      current: saved?.current || lessons[0].id,
      mastered: saved?.mastered || {},
      attempts: saved?.attempts || {}
    };
  } catch {
    return { current: lessons[0].id, mastered: {}, attempts: {} };
  }
}

let state = loadState();
let selectedAnswer = null;
let feedback = null;
let celebrating = false;
let appMode = "lessons";
let practiceState = {
  index: 0,
  selectedCard: null,
  feedback: null
};
let gameState = null;

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function lessonIndex(id) {
  return lessons.findIndex((lesson) => lesson.id === id);
}

function firstUnmasteredIndex() {
  const index = lessons.findIndex((lesson) => !state.mastered[lesson.id]);
  return index === -1 ? lessons.length - 1 : index;
}

function isUnlocked(index) {
  if (index === 0) return true;
  return lessons.slice(0, index).some((lesson) => state.mastered[lesson.id]) || index <= firstUnmasteredIndex() + 1;
}

function masteredCount() {
  return lessons.filter((lesson) => state.mastered[lesson.id]).length;
}

function currentLesson() {
  return lessons.find((lesson) => lesson.id === state.current) || lessons[0];
}

function clearAdvanceTimer() {
  celebrating = false;
}

function showCelebration() {
  celebrating = true;
  render();
}

function selectLesson(id) {
  clearAdvanceTimer();
  const index = lessonIndex(id);
  if (!isUnlocked(index)) return;
  appMode = "lessons";
  state.current = id;
  selectedAnswer = null;
  feedback = null;
  saveState();
  render();
}

function selectAnswer(index) {
  if (celebrating) return;
  selectedAnswer = index;
  const lesson = currentLesson();
  const correct = index === lesson.quiz.answer;
  state.attempts[lesson.id] = (state.attempts[lesson.id] || 0) + 1;

  if (correct) {
    state.mastered[lesson.id] = true;
    feedback = { type: "good", text: lesson.quiz.good };
    saveState();
    showCelebration();
    return;
  } else {
    state.mastered[lesson.id] = false;
    feedback = { type: "retry", text: lesson.quiz.retry };
  }
  saveState();
  render();
}

function goNext() {
  clearAdvanceTimer();
  const index = lessonIndex(state.current);
  const nextIndex = Math.min(index + 1, lessons.length - 1);
  state.current = lessons[nextIndex].id;
  selectedAnswer = null;
  feedback = null;
  saveState();
  render();
}

function revisit() {
  clearAdvanceTimer();
  const index = lessonIndex(state.current);
  const earlier = lessons.slice(0, index).find((lesson) => !state.mastered[lesson.id]);
  state.current = (earlier || lessons[0]).id;
  selectedAnswer = null;
  feedback = null;
  saveState();
  render();
}

function resetProgress() {
  clearAdvanceTimer();
  state = { current: lessons[0].id, mastered: {}, attempts: {} };
  selectedAnswer = null;
  feedback = null;
  appMode = "lessons";
  saveState();
  render();
}

function startPractice(index = 0) {
  clearAdvanceTimer();
  appMode = "practice";
  practiceState = {
    index,
    selectedCard: null,
    feedback: null
  };
  render();
}

function selectPracticeScenario(index) {
  clearAdvanceTimer();
  appMode = "practice";
  practiceState.index = Math.max(0, Math.min(index, practiceScenarios.length - 1));
  practiceState.selectedCard = null;
  practiceState.feedback = null;
  render();
}

function backToLessons() {
  clearAdvanceTimer();
  appMode = "lessons";
  practiceState.selectedCard = null;
  practiceState.feedback = null;
  render();
}

function selectPracticeCard(rank, suit) {
  if (celebrating) return;
  const scenario = practiceScenarios[practiceState.index];
  if (scenario.type === "call") return;
  const card = [rank, suit];
  const legal = isLegalPracticeCard(card, scenario);
  practiceState.selectedCard = card;

  if (!legal) {
    practiceState.feedback = {
      type: "retry",
      text: "Almost. You still have the led suit, so you must follow it."
    };
  } else if (sameCard(card, scenario.answer)) {
    practiceState.feedback = {
      type: "good",
      text: scenario.explanation
    };
    showCelebration();
    return;
  } else {
    practiceState.feedback = {
      type: "retry",
      text: "That card is legal, but there is a better beginner play here. Use the feedback and table state to try again."
    };
  }
  render();
}

function selectPracticeTrump(suit) {
  if (celebrating) return;
  const scenario = practiceScenarios[practiceState.index];
  if (scenario.type !== "call") return;
  practiceState.selectedCard = [suit, "trump-call"];

  if (suit === scenario.answer) {
    practiceState.feedback = {
      type: "good",
      text: scenario.explanation
    };
    showCelebration();
    return;
  } else if (suit === scenario.passedSuit) {
    practiceState.feedback = {
      type: "retry",
      text: `${suitNames[suit]} was the upcard suit, so it cannot be called after everyone passed.`
    };
  } else {
    practiceState.feedback = {
      type: "retry",
      text: `${suitNames[suit]} is available, but this hand has stronger support for ${suitNames[scenario.answer]}.`
    };
  }
  render();
}

function nextPracticeScenario() {
  clearAdvanceTimer();
  practiceState.index = (practiceState.index + 1) % practiceScenarios.length;
  practiceState.selectedCard = null;
  practiceState.feedback = null;
  render();
}

const tablePlayers = ["left-opponent", "partner", "right-opponent", "you"];
const nextPlayer = {
  "left-opponent": "partner",
  partner: "right-opponent",
  "right-opponent": "you",
  you: "left-opponent"
};
const previousPlayer = {
  "left-opponent": "you",
  partner: "left-opponent",
  "right-opponent": "partner",
  you: "right-opponent"
};
const euchreRanks = ["9", "10", "J", "Q", "K", "A"];
const rankPower = { "9": 1, "10": 2, J: 3, Q: 4, K: 5, A: 6 };

function teamOf(player) {
  return player === "you" || player === "partner" ? "us" : "them";
}

function teamName(team) {
  return team === "us" ? "You + Partner" : "Opponents";
}

function createDeck() {
  return ["hearts", "diamonds", "clubs", "spades"].flatMap((suit) => euchreRanks.map((rank) => [rank, suit]));
}

function shuffle(cards) {
  const deck = cards.map((card) => [...card]);
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[swapIndex]] = [deck[swapIndex], deck[index]];
  }
  return deck;
}

function cardScoreForSuit(card, suit) {
  if (card[0] === "J" && card[1] === suit) return 12;
  if (card[0] === "J" && card[1] === sameColorSuit(suit)) return 10;
  if (card[1] !== suit) return rankPower[card[0]] * 0.25;
  return { A: 7, K: 5, Q: 4, "10": 2, "9": 1, J: 0 }[card[0]] || 0;
}

function handScoreForSuit(hand, suit) {
  return hand.reduce((total, card) => total + cardScoreForSuit(card, suit), 0);
}

function lowestCardForTrump(hand, trump) {
  return [...hand].sort((a, b) => cardPower(a, trump, effectiveSuit(a, trump)) - cardPower(b, trump, effectiveSuit(b, trump)))[0];
}

function removeCardFromHand(hand, card) {
  const index = hand.findIndex((item) => sameCard(item, card));
  if (index >= 0) hand.splice(index, 1);
}

function dealCards() {
  const deck = shuffle(createDeck());
  const hands = {
    partner: [],
    "right-opponent": [],
    you: [],
    "left-opponent": []
  };
  for (let round = 0; round < 5; round += 1) {
    tablePlayers.forEach((player) => hands[player].push(deck.pop()));
  }
  return {
    hands,
    upcard: deck.pop(),
    kitty: deck
  };
}

function startGame() {
  clearAdvanceTimer();
  appMode = "game";
  gameState = {
    score: { us: 0, them: 0 },
    dealer: "you",
    handNumber: 0,
    peek: false,
    message: "New game. First team to 10 wins.",
    hand: null
  };
  dealNextGameHand(false);
}

function dealNextGameHand(rotateDealer = true) {
  if (!gameState) startGame();
  if (rotateDealer) gameState.dealer = nextPlayer[gameState.dealer];
  gameState.handNumber += 1;
  const dealt = dealCards();
  gameState.hand = {
    ...dealt,
    dealer: gameState.dealer,
    phase: "bidding",
    biddingRound: 1,
    bidder: nextPlayer[gameState.dealer],
    passedSuit: null,
    passes: [],
    trump: null,
    maker: null,
    makerTeam: null,
    trickLead: null,
    currentPlayer: null,
    plays: [],
    completedTricks: [],
    trickNumber: 1,
    tricks: { us: 0, them: 0 },
    result: null
  };
  gameState.message = `${seatName(gameState.dealer)} deals. ${suitNames[gameState.hand.upcard[1]]} is the upcard suit.`;
  advanceGameAi();
  render();
}

function gameCallOptions() {
  const hand = gameState.hand;
  if (hand.biddingRound === 1) return [hand.upcard[1]];
  return ["hearts", "diamonds", "clubs", "spades"].filter((suit) => suit !== hand.passedSuit);
}

function isDealerStuck() {
  const hand = gameState.hand;
  return hand.biddingRound === 2 && hand.bidder === hand.dealer && hand.passes.length >= 7;
}

function userPassGameCall() {
  const hand = gameState.hand;
  if (!hand || hand.phase !== "bidding" || hand.bidder !== "you") return;
  if (isDealerStuck()) {
    gameState.message = "Dealer must choose trump in round two.";
    render();
    return;
  }
  passGameBid("you");
  advanceGameAi();
  render();
}

function userCallGameTrump(suit) {
  const hand = gameState.hand;
  if (!hand || hand.phase !== "bidding" || hand.bidder !== "you") return;
  if (!gameCallOptions().includes(suit)) return;
  applyGameTrump("you", suit);
  advanceGameAi();
  render();
}

function passGameBid(player) {
  const hand = gameState.hand;
  hand.passes.push(player);
  gameState.message = `${seatName(player)} passes.`;

  if (hand.biddingRound === 1 && hand.passes.length === 4) {
    hand.biddingRound = 2;
    hand.passedSuit = hand.upcard[1];
    hand.bidder = nextPlayer[hand.dealer];
    gameState.message = `${suitNames[hand.passedSuit]} was turned down. Round two: choose a different suit.`;
    return;
  }

  if (hand.biddingRound === 2 && hand.passes.length >= 8) {
    const bestSuit = bestCallSuit(hand.hands[hand.dealer], hand.passedSuit);
    applyGameTrump(hand.dealer, bestSuit);
    return;
  }

  hand.bidder = nextPlayer[player];
}

function bestCallSuit(hand, blockedSuit = null) {
  return ["hearts", "diamonds", "clubs", "spades"]
    .filter((suit) => suit !== blockedSuit)
    .sort((a, b) => handScoreForSuit(hand, b) - handScoreForSuit(hand, a))[0];
}

function aiBid(player) {
  const hand = gameState.hand;
  if (hand.biddingRound === 1) {
    const suit = hand.upcard[1];
    const score = handScoreForSuit(hand.hands[player], suit) + (player === hand.dealer ? 2 : 0);
    if (score >= 15) return suit;
    return null;
  }

  const bestSuit = bestCallSuit(hand.hands[player], hand.passedSuit);
  const score = handScoreForSuit(hand.hands[player], bestSuit);
  if (isDealerStuck() && player === hand.dealer) return bestSuit;
  if (score >= 14) return bestSuit;
  return null;
}

function applyGameTrump(caller, suit) {
  const hand = gameState.hand;
  hand.trump = suit;
  hand.maker = caller;
  hand.makerTeam = teamOf(caller);
  hand.phase = "playing";
  hand.trickLead = nextPlayer[hand.dealer];
  hand.currentPlayer = hand.trickLead;
  hand.plays = [];

  if (hand.biddingRound === 1) {
    hand.hands[hand.dealer].push(hand.upcard);
    const discard = lowestCardForTrump(hand.hands[hand.dealer], suit);
    removeCardFromHand(hand.hands[hand.dealer], discard);
    gameState.message = `${seatName(caller)} ordered up ${suitNames[suit]}. Dealer picked up and discarded.`;
  } else {
    gameState.message = `${seatName(caller)} called ${suitNames[suit]}.`;
  }
}

function advanceGameAi() {
  let guard = 0;
  while (gameState?.hand && guard < 80) {
    guard += 1;
    const hand = gameState.hand;
    if (hand.phase === "bidding") {
      if (hand.bidder === "you") return;
      const call = aiBid(hand.bidder);
      if (call) applyGameTrump(hand.bidder, call);
      else passGameBid(hand.bidder);
      continue;
    }

    if (hand.phase === "playing") {
      if (hand.currentPlayer === "you") return;
      playGameCard(hand.currentPlayer, chooseAiCard(hand.currentPlayer));
      continue;
    }

    return;
  }
}

function legalGameCards(player) {
  const hand = gameState.hand;
  const cards = hand.hands[player];
  if (!hand.plays.length) return cards;
  const ledSuit = effectiveSuit(hand.plays[0].card, hand.trump);
  const matching = cards.filter((card) => effectiveSuit(card, hand.trump) === ledSuit);
  return matching.length ? matching : cards;
}

function cardPower(card, trump, ledSuit) {
  const suit = effectiveSuit(card, trump);
  if (suit === trump) {
    if (card[0] === "J" && card[1] === trump) return 200;
    if (card[0] === "J" && card[1] === sameColorSuit(trump)) return 199;
    return 150 + rankPower[card[0]];
  }
  if (suit === ledSuit) return 100 + rankPower[card[0]];
  return rankPower[card[0]];
}

function chooseAiCard(player) {
  const hand = gameState.hand;
  const legal = legalGameCards(player);
  const ledSuit = hand.plays[0] ? effectiveSuit(hand.plays[0].card, hand.trump) : effectiveSuit(legal[0], hand.trump);
  const sorted = [...legal].sort((a, b) => cardPower(a, hand.trump, ledSuit) - cardPower(b, hand.trump, ledSuit));
  const partnerWinning = currentTrickLeader()?.team === teamOf(player);
  if (partnerWinning) return sorted[0];
  return sorted[sorted.length - 1];
}

function currentTrickLeader() {
  const hand = gameState.hand;
  if (!hand?.plays.length) return null;
  const ledSuit = effectiveSuit(hand.plays[0].card, hand.trump);
  const best = [...hand.plays].sort((a, b) => cardPower(b.card, hand.trump, ledSuit) - cardPower(a.card, hand.trump, ledSuit))[0];
  return { player: best.player, team: teamOf(best.player), card: best.card };
}

function userPlayGameCard(rank, suit) {
  const hand = gameState.hand;
  if (!hand || hand.phase !== "playing" || hand.currentPlayer !== "you") return;
  const card = [rank, suit];
  if (!legalGameCards("you").some((item) => sameCard(item, card))) {
    const ledSuit = effectiveSuit(hand.plays[0].card, hand.trump);
    gameState.message = `${suitNames[ledSuit]} was led, and you still have ${suitNames[ledSuit]}.`;
    render();
    return;
  }
  playGameCard("you", card);
  advanceGameAi();
  render();
}

function playGameCard(player, card) {
  const hand = gameState.hand;
  removeCardFromHand(hand.hands[player], card);
  hand.plays.push({ player, card });
  gameState.message = `${seatName(player)} played ${card[0]} ${suitNames[card[1]]}.`;

  if (hand.plays.length === 4) {
    resolveGameTrick();
    return;
  }

  hand.currentPlayer = nextPlayer[player];
}

function resolveGameTrick() {
  const hand = gameState.hand;
  const ledSuit = effectiveSuit(hand.plays[0].card, hand.trump);
  const winnerPlay = [...hand.plays].sort((a, b) => cardPower(b.card, hand.trump, ledSuit) - cardPower(a.card, hand.trump, ledSuit))[0];
  const winnerTeam = teamOf(winnerPlay.player);
  hand.tricks[winnerTeam] += 1;
  hand.completedTricks.push({ winner: winnerPlay.player, plays: hand.plays.map((play) => ({ ...play })) });
  gameState.message = `${seatName(winnerPlay.player)} wins trick ${hand.trickNumber}.`;

  if (hand.trickNumber === 5) {
    resolveGameHand();
    return;
  }

  hand.trickNumber += 1;
  hand.trickLead = winnerPlay.player;
  hand.currentPlayer = winnerPlay.player;
  hand.plays = [];
}

function resolveGameHand() {
  const hand = gameState.hand;
  const makerTricks = hand.tricks[hand.makerTeam];
  let points = 0;
  let scoringTeam = hand.makerTeam;
  let resultText = "";

  if (makerTricks >= 5) {
    points = 2;
    resultText = `${teamName(hand.makerTeam)} took all 5 tricks for 2 points.`;
  } else if (makerTricks >= 3) {
    points = 1;
    resultText = `${teamName(hand.makerTeam)} made trump for 1 point.`;
  } else {
    points = 2;
    scoringTeam = hand.makerTeam === "us" ? "them" : "us";
    resultText = `${teamName(hand.makerTeam)} got euchred. ${teamName(scoringTeam)} scores 2.`;
  }

  gameState.score[scoringTeam] += points;
  hand.phase = "hand-over";
  hand.result = { points, scoringTeam, resultText, makerTricks };
  gameState.message = resultText;
  if (gameState.score.us >= 10 || gameState.score.them >= 10) {
    hand.phase = "game-over";
    gameState.message = `${teamName(gameState.score.us >= 10 ? "us" : "them")} win the game.`;
  }
}

function toggleGamePeek() {
  gameState.peek = !gameState.peek;
  render();
}

function colorizeRedCards(html) {
  return html
    .replace(/((?:[AJKQ]|10|9)?)&hearts;/g, '<span class="red-card-text">$1♥</span>')
    .replace(/((?:[AJKQ]|10|9)?)&diams;/g, '<span class="red-card-text">$1♦</span>')
    .replace(/\b(Hearts|Diamonds|hearts|diamonds)\b/g, '<span class="red-card-text">$1</span>');
}

function sameCard(card, other) {
  return Boolean(card && other && card[0] === other[0] && card[1] === other[1]);
}

function sameColorSuit(suit) {
  return {
    hearts: "diamonds",
    diamonds: "hearts",
    clubs: "spades",
    spades: "clubs"
  }[suit];
}

function effectiveSuit(card, trump) {
  if (card[0] === "J" && card[1] === sameColorSuit(trump)) return trump;
  return card[1];
}

function isLegalPracticeCard(card, scenario) {
  if (scenario.type === "call") return false;
  const hand = scenario.hands.you;
  const hasLedSuit = hand.some((handCard) => effectiveSuit(handCard, scenario.trump) === scenario.ledSuit);
  if (!hasLedSuit) return true;
  return effectiveSuit(card, scenario.trump) === scenario.ledSuit;
}

function cardHtml(card, options = {}) {
  if (!card) {
    return `<div class="card-placeholder ${options.small ? "small-card" : ""}" aria-label="No card played yet"></div>`;
  }

  const [rank, suit] = card;
  if (suit === "card-back") {
    return `
      <div class="playing-card card-back ${options.small ? "small-card" : ""}" aria-label="Dealer hand">
        <span></span>
      </div>
    `;
  }

  if (suit === "tricks") {
    return `<div class="playing-card trick-card" aria-label="${rank} tricks"><span class="rank">${rank}</span><span class="suit">tricks</span></div>`;
  }

  const red = suit === "hearts" || suit === "diamonds";
  const classes = [
    "playing-card",
    red ? "red" : "black",
    options.small ? "small-card" : "",
    options.muted ? "muted-card" : "",
    options.winner ? "winner-card" : ""
  ].filter(Boolean).join(" ");

  return `
    <div class="${classes}" aria-label="${rank} of ${suit}">
      <span class="rank">${rank}</span>
      <span class="suit">${suitSymbols[suit]}</span>
    </div>
  `;
}

function suitPill(label, suit) {
  const red = suit === "hearts" || suit === "diamonds";
  return `
    <span class="suit-pill ${red ? "red" : "black"}">
      <span>${label}</span>
      <strong>${suit === "None yet" ? "None yet" : `${suitNames[suit]} ${suitSymbols[suit]}`}</strong>
    </span>
  `;
}

function renderTableBoard(board) {
  const positions = ["partner", "right-opponent", "you", "left-opponent"];
  return `
    <div class="concept-board table-board">
      <div class="table-felt">
        ${board.trump && board.trump !== "None yet" ? `
          <div class="trump-mark ${board.trump === "hearts" || board.trump === "diamonds" ? "red" : "black"}" aria-label="${suitNames[board.trump]} trump">
            <span>${suitSymbols[board.trump]}</span>
            <small>trump</small>
          </div>
        ` : ""}
        <div class="turn-direction" aria-hidden="true">
          <span>TURN</span>
        </div>
        ${board.plays.map((play, index) => `
          <div class="table-seat ${positions[index]} ${play.seat === board.winner ? "winning-seat" : ""} ${index === 0 ? "current-turn" : ""}">
            <span class="turn-order">${index + 1}</span>
            ${cardHtml(play.card, { small: true, winner: play.seat === board.winner })}
            ${positions[index] === "you" ? `<span class="you-marker">YOU</span>` : ""}
            ${play.tag && !["Led suit", "Trump"].includes(play.tag) ? `<span class="card-tag">${play.tag}</span>` : ""}
          </div>
        `).join("")}
      </div>
      <p class="board-note">${colorizeRedCards(board.note)}</p>
      ${board.trickSummary ? renderTrickSummary(board.trickSummary) : ""}
    </div>
  `;
}

function renderTrickSummary(items) {
  return `
    <div class="table-summary">
      ${items.map((item) => `
        <div class="summary-tile ${item.tone || ""}">
          <strong>${item.label}</strong>
          ${typeof item.count === "number" ? `<div class="trick-dots">${Array.from({ length: 5 }, (_, index) => `<span class="trick-dot ${index < item.count ? item.tone || "" : ""}">${index + 1}</span>`).join("")}</div>` : ""}
          <span>${item.value || `${item.count} tricks`}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSuitBoard(board) {
  return `
    <div class="concept-board">
      <div class="board-header">
        <span>${board.caption}</span>
        <span>24-card deck</span>
      </div>
      <div class="suit-grid">
        ${board.suits.map((suit) => {
          const red = suit === "hearts" || suit === "diamonds";
          return `
            <div class="suit-oracle ${red ? "red" : "black"}">
              <span>${suitSymbols[suit]}</span>
              <strong>${suitNames[suit]}</strong>
              <small>${red ? "red suit" : "black suit"}</small>
            </div>
          `;
        }).join("")}
      </div>
      <p class="board-note">${colorizeRedCards(board.note)}</p>
    </div>
  `;
}

function renderHandBoard(board) {
  return `
    <div class="concept-board">
      <div class="board-header">
        <span>${colorizeRedCards(board.caption)}</span>
      </div>
      <div class="board-status">
        ${suitPill("Led", board.led)}
        ${suitPill("Trump", board.trump)}
      </div>
      <div class="hand-label">YOUR HAND</div>
      <div class="hand-board">
        ${board.hand.map((item) => `
          <div class="hand-choice ${item.playable ? "playable" : ""}">
            ${cardHtml(item.card, { small: true })}
          </div>
        `).join("")}
      </div>
      <p class="board-note">${colorizeRedCards(board.note)}</p>
    </div>
  `;
}

function renderScoreBoard(board) {
  const trickDots = (count, owner) => Array.from({ length: 5 }, (_, index) => (
    `<span class="trick-dot ${index < count ? owner : ""}">${index + 1}</span>`
  )).join("");

  return `
    <div class="concept-board">
      <div class="board-header">
        <span>${colorizeRedCards(board.caption)}</span>
        <span>${board.result}</span>
      </div>
      <div class="score-board">
        <div>
          <strong>Makers</strong>
          <div class="trick-dots">${trickDots(board.makers, "makers")}</div>
          <span>${board.makers} tricks</span>
        </div>
        <div>
          <strong>Defenders</strong>
          <div class="trick-dots">${trickDots(board.defenders, "defenders")}</div>
          <span>${board.defenders} tricks</span>
        </div>
      </div>
      <p class="board-note">${colorizeRedCards(board.note)}</p>
    </div>
  `;
}

function renderTrumpChoiceBoard(board) {
  const positions = ["partner", "right-opponent", "you", "left-opponent"];
  return `
    <div class="concept-board table-board">
      <div class="table-felt choosing-felt">
        <div class="upcard-area">
          <span class="upcard-label">UPCARD</span>
          ${cardHtml(board.upcard, { small: true })}
        </div>
        <div class="turn-direction" aria-hidden="true">
          <span>TURN</span>
        </div>
        ${positions.map((position, index) => `
          <div class="table-seat ${position} ${position === board.dealer ? "dealer-seat" : ""}">
            <span class="turn-order">${index + 1}</span>
            ${position === board.dealer ? cardHtml(["", "card-back"], { small: true }) : cardHtml(null, { small: true })}
            ${position === "you" ? `<span class="you-marker">YOU</span>` : ""}
            ${position === board.dealer ? `<span class="card-tag">Dealer</span>` : ""}
          </div>
        `).join("")}
      </div>
      <p class="board-note">${colorizeRedCards(board.note)}</p>
    </div>
  `;
}

function renderDealBoard(board) {
  const seats = [
    { position: "partner", label: "PARTNER" },
    { position: "right-opponent", label: "OPPONENT" },
    { position: "you", label: "YOU" },
    { position: "left-opponent", label: "OPPONENT" }
  ];

  return `
    <div class="concept-board table-board">
      <div class="table-felt deal-felt">
        <div class="turn-direction" aria-hidden="true">
          <span>TURN</span>
        </div>
        ${seats.map((seat, index) => `
          <div class="table-seat ${seat.position} ${seat.position === board.dealer ? "dealer-seat" : ""}">
            <span class="turn-order">${index + 1}</span>
            <div class="hand-stack" aria-label="Five cards dealt">
              ${Array.from({ length: 5 }, (_, cardIndex) => `<span class="mini-card-back card-${cardIndex + 1}"></span>`).join("")}
              <strong>5</strong>
            </div>
            <span class="${seat.position === "you" ? "you-marker" : "seat-chip"}">${seat.label}</span>
            ${seat.position === board.dealer ? `<span class="dealer-chip">DEALER</span>` : ""}
          </div>
        `).join("")}
      </div>
      <p class="board-note">${colorizeRedCards(board.note)}</p>
    </div>
  `;
}

function renderAloneBoard(board) {
  return `
    <div class="concept-board">
      <div class="board-header">
        <span>${colorizeRedCards(board.caption)}</span>
        <span>Trump: ${suitNames[board.trump]} ${suitSymbols[board.trump]}</span>
      </div>
      <div class="alone-board">
        <div class="partner-out">Partner sits out</div>
        <div class="lone-player">
          <span class="seat-label">Lone player</span>
          <div class="card-row compact">${board.loneHand.map((card) => cardHtml(card, { small: true })).join("")}</div>
        </div>
        <div class="defenders">Two defenders stay in</div>
      </div>
      <p class="board-note">${colorizeRedCards(board.note)}</p>
    </div>
  `;
}

function renderBoard(board) {
  if (board.type === "suits") return renderSuitBoard(board);
  if (board.type === "hand") return renderHandBoard(board);
  if (board.type === "score") return renderScoreBoard(board);
  if (board.type === "trump-choice") return renderTrumpChoiceBoard(board);
  if (board.type === "deal") return renderDealBoard(board);
  if (board.type === "alone") return renderAloneBoard(board);
  return renderTableBoard(board);
}

function seatName(position) {
  return {
    partner: "PARTNER",
    "right-opponent": "OPPONENT",
    you: "YOU",
    "left-opponent": "OPPONENT"
  }[position];
}

function practicePlayFor(position, scenario) {
  return scenario.plays.find((play) => play.player === position);
}

function renderPracticeHand(position, cards, scenario) {
  return `
    <div class="practice-hand ${position === "you" ? "user-practice-hand" : ""}">
      ${cards.map((card) => {
        const selected = position === "you" && sameCard(card, practiceState.selectedCard);
        const disabled = position !== "you" || practiceState.feedback?.type === "good" || celebrating;
        return position === "you"
          ? `<button class="practice-card-choice ${selected ? "selected" : ""}" onclick="selectPracticeCard('${card[0]}', '${card[1]}')" ${disabled ? "disabled" : ""}>${cardHtml(card, { small: true })}</button>`
          : `<div class="practice-card-static">${cardHtml(["", "card-back"], { small: true })}</div>`;
      }).join("")}
    </div>
  `;
}

function renderPracticeCallHand(cards) {
  return `
    <div class="practice-hand user-practice-hand">
      ${cards.map((card) => `
        <button class="practice-card-choice" disabled>
          ${cardHtml(card, { small: true })}
        </button>
      `).join("")}
    </div>
  `;
}

function renderTrumpCallOptions(scenario) {
  return `
    <div class="trump-call-options">
      ${scenario.options.map((suit) => {
        const selected = sameCard(practiceState.selectedCard, [suit, "trump-call"]);
        const correct = suit === scenario.answer && practiceState.feedback;
        const blocked = suit === scenario.passedSuit;
        return `
          <button class="answer-button trump-call-button ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${blocked ? "blocked-suit" : ""}" onclick="selectPracticeTrump('${suit}')">
            <span class="${suit === "hearts" || suit === "diamonds" ? "red-card-text" : ""}">${suitNames[suit]} ${suitSymbols[suit]}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderPracticeCallBoard(scenario) {
  const positions = ["partner", "right-opponent", "you", "left-opponent"];
  return `
    <div class="practice-board">
      <div class="practice-meta">
        <span>Second round</span>
        <span>${suitNames[scenario.passedSuit]} turned down</span>
      </div>
      <div class="table-felt practice-felt choosing-felt">
        <div class="round-mark">
          <span>2</span>
          <small>round</small>
        </div>
        <div class="turn-direction" aria-hidden="true"><span>TURN</span></div>
        ${positions.map((position) => `
          <div class="table-seat ${position} ${scenario.turn === position && !practiceState.feedback ? "current-turn" : ""} ${position === scenario.dealer ? "dealer-seat" : ""}">
            ${cardHtml(null, { small: true })}
            <span class="${position === "you" ? "you-marker" : "seat-chip"}">${seatName(position)}</span>
            ${position === scenario.dealer ? `<span class="dealer-chip">DEALER</span>` : ""}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderPracticeBoard(scenario) {
  if (scenario.type === "call") return renderPracticeCallBoard(scenario);

  const positions = ["partner", "right-opponent", "you", "left-opponent"];
  return `
    <div class="practice-board">
      <div class="practice-meta">
        <span>${suitNames[scenario.trump]} ${suitSymbols[scenario.trump]} trump</span>
        <span>${suitNames[scenario.ledSuit]} led</span>
      </div>
      <div class="table-felt practice-felt">
        <div class="trump-mark ${scenario.trump === "hearts" || scenario.trump === "diamonds" ? "red" : "black"}">
          <span>${suitSymbols[scenario.trump]}</span>
          <small>trump</small>
        </div>
        <div class="turn-direction" aria-hidden="true"><span>TURN</span></div>
        ${positions.map((position) => {
          const play = practicePlayFor(position, scenario);
          const isTurn = scenario.turn === position && !practiceState.feedback;
          const isWinner = practiceState.feedback?.type === "good" && scenario.winner === position;
          return `
            <div class="table-seat ${position} ${isTurn ? "current-turn" : ""} ${isWinner ? "winning-seat" : ""}">
              ${cardHtml(play?.card || null, { small: true, winner: isWinner })}
              <span class="${position === "you" ? "you-marker" : "seat-chip"}">${seatName(position)}</span>
              ${position === scenario.dealer ? `<span class="dealer-chip">DEALER</span>` : ""}
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderPractice() {
  const scenario = practiceScenarios[practiceState.index];
  const feedback = practiceState.feedback;
  const completed = feedback?.type === "good";
  const isCallPractice = scenario.type === "call";

  return `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">
          <div class="sigil" aria-hidden="true">☾</div>
          <div>
            <h1>Guided Practice</h1>
            <p class="subtitle">Practice card play and trump calls one decision at a time.</p>
          </div>
        </div>
      </header>
      <div class="layout">
        <nav class="lesson-nav" aria-label="Navigation">
          ${renderNav()}
        </nav>
        <main class="practice-shell">
          <section class="practice-intro">
            <p class="eyebrow">${scenario.title} of ${practiceScenarios.length}</p>
            <h2>${isCallPractice ? "Choose Trump" : "Practice Trick"}</h2>
            <p class="coach-note">${colorizeRedCards(scenario.prompt)}</p>
          </section>
          ${renderPracticeBoard(scenario)}
          <section class="visible-hands">
            ${["you"].map((position) => `
              <div class="visible-hand-panel ${position === "you" ? "you-panel" : ""}">
                <div class="hand-panel-label">
                  <strong>${seatName(position)}</strong>
                  ${isCallPractice ? "<span>Choose trump</span>" : "<span>Choose a card</span>"}
                </div>
                ${isCallPractice ? renderPracticeCallHand(scenario.hands.you) : renderPracticeHand(position, scenario.hands[position], scenario)}
              </div>
            `).join("")}
          </section>
          ${isCallPractice ? renderTrumpCallOptions(scenario) : ""}
          ${celebrating ? renderCelebration("Nice work", "You got it. Take a breath, then try the next one.", practiceState.index === practiceScenarios.length - 1 ? "Restart Practice" : "Next Practice Trick", "nextPracticeScenario()") : ""}
          <div class="feedback ${feedback ? feedback.type : ""}">
            ${feedback ? colorizeRedCards(feedback.text) : isCallPractice ? "Choose the trump suit that best fits your hand. The turned-down suit is not available." : "Choose from your hand. The feedback will coach the decision after you try."}
          </div>
          <div class="actions">
            <button class="primary-button" onclick="nextPracticeScenario()" ${completed && !celebrating ? "" : "disabled"}>${practiceState.index === practiceScenarios.length - 1 ? "Restart Practice" : "Next Practice Trick"}</button>
            <button class="secondary-button" onclick="backToLessons()">Back To Lessons</button>
          </div>
        </main>
      </div>
    </div>
  `;
}

function renderCelebration(title, message, actionLabel, action) {
  return `
    <div class="celebration" role="status" aria-live="polite">
      <div class="celebration-copy">
        <strong>✅ ${title}</strong>
        <span>${message}</span>
      </div>
      <button class="primary-button celebration-next" onclick="${action}">${actionLabel}</button>
    </div>
  `;
}

function renderGameScoreStrip() {
  return `
    <section class="game-score-strip" aria-label="Game score">
      ${renderTeamScore("You + Partner", gameState.score.us, "us", "hearts")}
      ${renderTeamScore("Opponents", gameState.score.them, "them", "clubs")}
    </section>
  `;
}

function renderTeamScore(label, score, team, suit) {
  return `
    <div class="team-score ${team}">
      <div>
        <strong>${label}</strong>
        <span>${score} / 10</span>
      </div>
      <div class="five-score-cards" aria-label="${label} score ${score}">
        ${renderFiveScoreCard(Math.min(score, 5), suit)}
        ${renderFiveScoreCard(Math.max(0, score - 5), suit)}
      </div>
    </div>
  `;
}

function renderFiveScoreCard(count, suit) {
  const red = suit === "hearts" || suit === "diamonds";
  return `
    <div class="score-five ${red ? "red" : "black"}">
      <span class="rank">5</span>
      ${[1, 2, 3, 4, 5].map((pip) => `<span class="score-pip pip-${pip} ${pip <= count ? "shown" : ""}">${suitSymbols[suit]}</span>`).join("")}
    </div>
  `;
}

function renderGameBoard() {
  const hand = gameState.hand;
  const positions = ["partner", "right-opponent", "you", "left-opponent"];
  const isBidding = hand.phase === "bidding";
  const showUpcard = isBidding && hand.biddingRound === 1;
  const center = isBidding
    ? showUpcard
      ? `<div class="upcard-area"><span class="upcard-label">UPCARD</span>${cardHtml(hand.upcard, { small: true })}</div>`
      : `<div class="round-mark"><span>2</span><small>round</small></div>`
    : `<div class="trump-mark ${hand.trump === "hearts" || hand.trump === "diamonds" ? "red" : "black"}"><span>${suitSymbols[hand.trump]}</span><small>trump</small></div>`;

  return `
    <section class="practice-board game-board">
      <div class="practice-meta">
        <span>Hand ${gameState.handNumber}</span>
        <span>${isBidding ? `Bidding round ${hand.biddingRound}` : `${suitNames[hand.trump]} trump`}</span>
        <span>Trick ${Math.min(hand.trickNumber, 5)} of 5</span>
      </div>
      <div class="table-felt practice-felt game-felt">
        ${center}
        <div class="turn-direction" aria-hidden="true"><span>TURN</span></div>
        ${positions.map((position) => {
          const play = hand.plays.find((item) => item.player === position);
          const isTurn = (hand.phase === "bidding" && hand.bidder === position) || (hand.phase === "playing" && hand.currentPlayer === position);
          return `
            <div class="table-seat ${position} ${isTurn ? "current-turn" : ""} ${position === hand.dealer ? "dealer-seat" : ""}">
              ${cardHtml(play?.card || null, { small: true })}
              <span class="${position === "you" ? "you-marker" : "seat-chip"}">${seatName(position)}</span>
              ${position === hand.dealer ? `<span class="dealer-chip">DEALER</span>` : ""}
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderGameHandPanel() {
  const hand = gameState.hand;
  return `
    <section class="visible-hands">
      <div class="visible-hand-panel you-panel">
        <div class="hand-panel-label">
          <strong>YOU</strong>
          <span>${hand.phase === "playing" && hand.currentPlayer === "you" ? "Choose a card" : "Your hand"}</span>
        </div>
        <div class="practice-hand user-practice-hand">
          ${hand.hands.you.map((card) => {
            const enabled = hand.phase === "playing" && hand.currentPlayer === "you";
            return `<button class="practice-card-choice" onclick="userPlayGameCard('${card[0]}', '${card[1]}')" ${enabled ? "" : "disabled"}>${cardHtml(card, { small: true })}</button>`;
          }).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderPeekPanel() {
  if (!gameState.peek) return "";
  const hand = gameState.hand;
  return `
    <section class="peek-panel">
      <div class="hand-panel-label">
        <strong>Training Peek</strong>
        <span>You cannot see these hands in a real game.</span>
      </div>
      <div class="peek-grid">
        ${["partner", "left-opponent", "right-opponent"].map((player) => `
          <div>
            <strong>${seatName(player)}</strong>
            <div class="card-row compact">${hand.hands[player].map((card) => cardHtml(card, { small: true })).join("")}</div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderGameBiddingControls() {
  const hand = gameState.hand;
  if (hand.phase !== "bidding" || hand.bidder !== "you") return "";
  const stuck = isDealerStuck();
  return `
    <section class="game-controls">
      <p class="quiz-question">${stuck ? "You are the dealer, and round two reached you. Choose trump." : "Your turn to call trump or pass."}</p>
      <div class="trump-call-options">
        ${gameCallOptions().map((suit) => `
          <button class="answer-button trump-call-button" onclick="userCallGameTrump('${suit}')">
            <span class="${suit === "hearts" || suit === "diamonds" ? "red-card-text" : ""}">${suitNames[suit]} ${suitSymbols[suit]}</span>
          </button>
        `).join("")}
        ${stuck ? "" : `<button class="secondary-button" onclick="userPassGameCall()">Pass</button>`}
      </div>
    </section>
  `;
}

function renderHandResultPanel() {
  const hand = gameState.hand;
  if (!["hand-over", "game-over"].includes(hand.phase)) return "";
  return `
    <section class="hand-result">
      <p class="eyebrow">${hand.phase === "game-over" ? "Game Over" : "Hand Complete"}</p>
      <h3>${hand.phase === "game-over" ? gameState.message : hand.result.resultText}</h3>
      <div class="mini-table">
        <div class="fact-tile"><strong>Makers</strong><span>${teamName(hand.makerTeam)}</span></div>
        <div class="fact-tile"><strong>Tricks</strong><span>${hand.tricks.us} us · ${hand.tricks.them} opponents</span></div>
        <div class="fact-tile"><strong>Score</strong><span>${gameState.score.us} - ${gameState.score.them}</span></div>
      </div>
      <div class="actions">
        ${hand.phase === "game-over" ? `<button class="primary-button" onclick="startGame()">New Game</button>` : `<button class="primary-button" onclick="dealNextGameHand()">Deal Next Hand</button>`}
      </div>
    </section>
  `;
}

function renderGame() {
  if (!gameState) startGame();
  const hand = gameState.hand;
  return `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">
          <div class="sigil" aria-hidden="true">☾</div>
          <div>
            <h1>Play a Game</h1>
            <p class="subtitle">A real dealt game to 10 with simple computer players.</p>
          </div>
        </div>
      </header>
      <div class="layout">
        <nav class="lesson-nav" aria-label="Navigation">
          ${renderNav()}
        </nav>
        <main class="practice-shell game-shell">
          ${renderGameScoreStrip()}
          ${renderGameBoard()}
          <div class="game-toolbar">
            <button class="secondary-button" onclick="toggleGamePeek()">${gameState.peek ? "Hide Peek" : "Peek"}</button>
            <button class="secondary-button" onclick="startGame()">New Game</button>
          </div>
          ${renderGameBiddingControls()}
          ${renderGameHandPanel()}
          ${renderPeekPanel()}
          <div class="feedback ${hand.phase === "game-over" ? "good" : ""}">
            ${colorizeRedCards(gameState.message)}
          </div>
          ${renderHandResultPanel()}
        </main>
      </div>
    </div>
  `;
}

function renderNav() {
  const lessonButtons = lessons
    .map((lesson, index) => {
      const active = appMode === "lessons" && lesson.id === state.current;
      const mastered = state.mastered[lesson.id];
      const unlocked = isUnlocked(index);
      return `
        <button
          class="lesson-button ${active ? "active" : ""} ${unlocked ? "" : "locked"}"
          onclick="selectLesson('${lesson.id}')"
          ${unlocked ? "" : "disabled"}
          aria-current="${active ? "step" : "false"}"
        >
          <span class="lesson-number">${index + 1}</span>
          <span class="lesson-name">${lesson.title}</span>
          <span class="lesson-status">${mastered ? "✓" : unlocked ? "•" : "locked"}</span>
        </button>
      `;
    })
    .join("");

  const practiceButtons = practiceScenarios
    .map((scenario, index) => {
      const active = appMode === "practice" && practiceState.index === index;
      return `
        <button
          class="lesson-button practice-nav-button ${active ? "active" : ""}"
          onclick="selectPracticeScenario(${index})"
          aria-current="${active ? "step" : "false"}"
        >
          <span class="lesson-number">${index + 1}</span>
          <span class="lesson-name">${scenario.title}</span>
          <span class="lesson-status">${scenario.type === "call" ? "call" : "play"}</span>
        </button>
      `;
    })
    .join("");

  return `
    <div class="nav-section">
      <p class="nav-section-title">Lessons</p>
      <div class="nav-scroll">${lessonButtons}</div>
    </div>
    <div class="nav-section">
      <p class="nav-section-title">Practice Hands</p>
      <div class="nav-scroll">${practiceButtons}</div>
    </div>
    <div class="nav-section">
      <p class="nav-section-title">Play a Game</p>
      <div class="nav-scroll">
        <button
          class="lesson-button practice-nav-button ${appMode === "game" ? "active" : ""}"
          onclick="startGame()"
          aria-current="${appMode === "game" ? "step" : "false"}"
        >
          <span class="lesson-number">10</span>
          <span class="lesson-name">First To 10</span>
          <span class="lesson-status">game</span>
        </button>
      </div>
    </div>
  `;
}

function renderLesson(lesson) {
  const index = lessonIndex(lesson.id);
  const attempts = state.attempts[lesson.id] || 0;
  const mastered = Boolean(state.mastered[lesson.id]);
  const isLastLesson = index === lessons.length - 1;
  const canContinue = mastered && !isLastLesson;
  const canStartPractice = mastered && isLastLesson;
  const needsRevisit = index > 0 && lessons.slice(0, index).some((item) => !state.mastered[item.id]);

  return `
    <section class="lesson-hero">
      <div>
        <p class="eyebrow">Lesson ${index + 1} of ${lessons.length}</p>
        <h2>${lesson.title}</h2>
        <p class="coach-note">${colorizeRedCards(lesson.intro)}</p>
      </div>
      <div class="mystic-board">
        ${renderBoard(lesson.board)}
      </div>
    </section>
    <section class="lesson-body">
      <div class="steps">
        ${lesson.steps.map((step, stepIndex) => `
          <div class="step">
            <span class="step-mark">${stepIndex + 1}</span>
            <p>${colorizeRedCards(step)}</p>
          </div>
        `).join("")}
      </div>

      <div class="mini-table">
        ${lesson.facts.map(([label, value]) => `
          <div class="fact-tile">
            <strong>${colorizeRedCards(label)}</strong>
            <span>${colorizeRedCards(value)}</span>
          </div>
        `).join("")}
      </div>

      <div class="quiz">
        <h3>Comprehension Check</h3>
        <p class="quiz-question">${colorizeRedCards(lesson.quiz.question)}</p>
        <div class="option-row">
          ${lesson.quiz.options.map((option, optionIndex) => {
            const chosen = selectedAnswer === optionIndex;
            const correct = selectedAnswer !== null && optionIndex === lesson.quiz.answer;
            const wrong = chosen && optionIndex !== lesson.quiz.answer;
            const optionCard = lesson.quiz.optionCards?.[optionIndex];
            const cardChoiceClass = optionCard ? "card-answer" : "";
            return `
              <button class="answer-button ${cardChoiceClass} ${chosen ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}" onclick="selectAnswer(${optionIndex})">
                ${optionCard ? cardHtml(optionCard, { small: true }) : colorizeRedCards(option)}
              </button>
            `;
          }).join("")}
        </div>
        ${celebrating ? renderCelebration("Correct", isLastLesson ? "Great work. You are ready for practice hands." : "Nice job. The next concept is ready when you are.", isLastLesson ? "Start Practice" : "Next Lesson", isLastLesson ? "startPractice()" : "goNext()") : ""}
        <div class="feedback ${feedback ? feedback.type : ""}">
          ${feedback ? colorizeRedCards(feedback.text) : "Pick an answer when you feel ready. You can revisit this lesson as often as needed."}
        </div>
        <div class="actions">
          <button class="primary-button" onclick="${isLastLesson ? "startPractice()" : "goNext()"}" ${(canContinue || canStartPractice) && !celebrating ? "" : "disabled"}>
            ${isLastLesson ? "All Set" : "Continue"}
          </button>
          <button class="secondary-button" onclick="revisit()">Revisit Basics</button>
          <button class="secondary-button" onclick="resetProgress()">Reset</button>
          <span class="mastery">${mastered ? "✓ Concept comfortable" : "○ Keep practicing"} · ${attempts} ${attempts === 1 ? "try" : "tries"}</span>
        </div>
        ${
          needsRevisit
            ? `<p class="feedback retry">One earlier concept still needs practice. You can continue, but the app will keep inviting a revisit until it feels solid.</p>`
            : ""
        }
      </div>
    </section>
  `;
}

function render() {
  if (appMode === "game") {
    document.getElementById("app").innerHTML = renderGame();
    return;
  }

  if (appMode === "practice") {
    document.getElementById("app").innerHTML = renderPractice();
    return;
  }

  const progress = Math.round((masteredCount() / lessons.length) * 100);
  document.getElementById("app").innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">
          <div class="sigil" aria-hidden="true">☾</div>
          <div>
            <h1>Euchre Trainer</h1>
            <p class="subtitle">Beginner euchre, one concept at a time.</p>
          </div>
        </div>
        <div class="progress-wrap" aria-label="Course progress">
          <div class="progress-label">
            <span>Mastery</span>
            <span>${progress}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="--progress: ${progress}%"></div>
          </div>
        </div>
      </header>
      <div class="layout">
        <nav class="lesson-nav" aria-label="Navigation">
          ${renderNav()}
        </nav>
        <main class="main-panel">
          ${renderLesson(currentLesson())}
        </main>
      </div>
    </div>
  `;
}

Object.assign(window, {
  backToLessons,
  dealNextGameHand,
  goNext,
  nextPracticeScenario,
  revisit,
  resetProgress,
  selectAnswer,
  selectLesson,
  selectPracticeCard,
  selectPracticeScenario,
  selectPracticeTrump,
  startGame,
  startPractice,
  toggleGamePeek,
  userCallGameTrump,
  userPassGameCall,
  userPlayGameCard
});

render();
