const SUITS = ["S", "D", "H", "C"];
const SUITROWS = { S: 0, D: 1, H: 2, C: 3 };
const VALUESINDICES = {
  A: 0,
  "2": 1,
  "3": 2,
  "4": 3,
  "5": 4,
  "6": 5,
  "7": 6,
  "8": 7,
  "9": 8,
  T: 9,
  J: 10,
  Q: 11,
  K: 12
};

exports.formatDeck = deck => {
  const formatted = [];
  for (let i = 0; i < deck.length; i += 13) {
    let row = deck.slice(i, i + 13);
    formatted.push(row);
  }
  return formatted;
};

exports.generateSortedDeck = () => {
  let deck = [];
  SUITS.forEach(suit => {
    Object.keys(VALUESINDICES).forEach(val => {
      deck.push(`${val}::${suit}`);
    });
  });
  return deck;
};
