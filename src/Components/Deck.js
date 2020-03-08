import React, { Component } from "react";
import CardRow from "./Row";
import Scoreboard from "./Scoreboard";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ThemeProvider from "react-bootstrap/ThemeProvider";

class Deck extends Component {
  // { formattedDeck, score, historicalAverage }
  state = {
    cards: [],
    score: 0,
    historicalAverage: 0
  };

  // cards = [[], [], [], []]
  componentDidMount() {
    this.shuffle();
  }

  shuffle = () => {
    console.log("BUTTON CLICKED TO SHUFFLE");

    axios
      .post("http://localhost:4000/shuffle")
      .then(response => {
        this.setState({
          cards: response.data.formattedDeck,
          score: response.data.score,
          historicalAverage: response.data.historicalAverage
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  rowsList = () => {
    return this.state.cards.map((row, idx) => {
      return <CardRow row={row} key={idx} />;
    });
  };

  render() {
    return (
      <Container>
        <div className={"container"}>
          <Button onClick={this.shuffle} variant="primary">
            Shuffle Cards
          </Button>{" "}
        </div>
        <Table bordered>
          <tbody>{this.rowsList()}</tbody>
        </Table>{" "}
        <Scoreboard
          score={this.state.score}
          historyAvg={this.state.historicalAverage}
          className="scoreboard"
        />
      </Container>
    );
  }
}

export default Deck;
