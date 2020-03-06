const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const deckLogic = require("./deckLogic.js");

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.post("/shuffle", (req, res) => {
  // shuffle cards
  const sortedDeck = deckLogic.generateSortedDeck();
  const shuffled = deckLogic.shuffle(sortedDeck);
  const score = deckLogic.getScore(shuffled);
  const inOrder = deckLogic.cardsInOrderCount(sortedDeck, shuffled);
  const percentInOrder = +(inOrder / 52).toFixed(3);
  // send formatted deck (2d array - 4row x 13col) back to client
  res.send(deckLogic.formatDeck(shuffled));
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
