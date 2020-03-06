const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.post("/", (req, res) => {
  // shuffle cards
  // issue cards as a response
  res.send(["c1", "c2"]);
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
