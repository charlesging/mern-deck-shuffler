const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Deck = new Schema({
  cards: {
    type: Array
  },
  percentCorrect: {
    type: int
  }
});

module.exports = mongoose.model("Deck", Deck);
