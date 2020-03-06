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

formatDeck = deck => {
  const formatted = [];
  for (let i = 0; i < deck.length; i += 13) {
    let row = deck.slice(i, i + 13);
    formatted.push(row);
  }
  return formatted;
};

shuffle = deck => {
  deck = deck.slice();
  let randomCard;
  let tempX;
  for (let index = deck.length - 1; index >= 0; index -= 1) {
    randomCard = Math.floor(Math.random() * deck.length);
    tempX = deck[index];
    deck[index] = deck[randomCard];
    deck[randomCard] = tempX;
  }
  return deck;
};

generateSortedDeck = () => {
  let deck = [];
  SUITS.forEach(suit => {
    Object.keys(VALUESINDICES).forEach(val => {
      deck.push(`${val}::${suit}`);
    });
  });
  return deck;
};

getScore = cards => {
  let points = 0;
  cards.forEach((card, idx) => {
    let val = card.split("::")[0];
    if (VALUESINDICES[val] === idx) points += 1;
  });

  let deckRows = formatDeck(cards);

  Object.values(deckRows).forEach((row, idx) => {
    row.forEach(card => {
      let suit = card.split("::")[1];
      if (SUITROWS[suit] === idx) points += 1;
    });
  });
  return points;
};

cardsInOrderCount = (ordered, shuffled) => {
  return ordered.reduce((count, card, idx) => {
    if (ordered[idx] === shuffled[idx]) {
      count += 1;
    }
    return count;
  }, 0);
};

module.exports = {
  formatDeck,
  shuffle,
  generateSortedDeck,
  getScore,
  cardsInOrderCount
};
