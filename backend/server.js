const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const deckLogic = require("./deckLogic.js");
var Deck = require("./deck.model.js");

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/shuffle", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

// app.get("/decks", (req, res) => {
//   Deck.find((err, decks) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(decks);
//     }
//   });
// });

app.post("/shuffle", (req, res) => {
  const sortedDeck = deckLogic.generateSortedDeck();
  const shuffled = deckLogic.shuffle(sortedDeck);
  const score = deckLogic.getScore(shuffled);
  const inOrder = deckLogic.cardsInOrderCount(sortedDeck, shuffled);
  const percentInOrder = +(inOrder / 52).toFixed(3);

  let deck = new Deck({ cards: shuffled, percentCorrect: percentInOrder });
  // let historicalCorrect

  deck
    .save()
    .then(todo => {
      // send formatted deck (2d array - 4row x 13col) back to client
      // send { formattedDeck, score, historicalPercentInOrder }
      // res.send(deckLogic.formatDeck(shuffled));
      res.send(deckLogic.formatDeck(shuffled));
    })
    .catch(err => {
      res.status(400).send("adding new todo failed");
    });
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
