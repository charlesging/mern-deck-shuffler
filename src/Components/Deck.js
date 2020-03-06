import React, { Component } from "react";
import Row from "./Row";
import axios from "axios";

class Deck extends Component {
  // { formattedDeck, score, historicalAverage }
  state = {
    cards: [],
    score: 0,
    historicalAverage: 0
  };

  // cards = [[], [], [], []]
  componentDidMount() {
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
  }

  rowsList() {
    return this.state.cards.map((row, idx) => {
      return <Row row={row} key={idx} />;
    });
  }

  render() {
    const shuffle = () => {
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

    return (
      <div>
        <table>
          <tbody>{this.rowsList()}</tbody>
        </table>
        <button className={"btn-small"} onClick={shuffle}>
          SHUFFLE CARDS
        </button>
        <h2>Score for this round :</h2>
        <h3>{this.state.score}</h3>
        <hr />
        <h2>Historical Percentage of Cards in Correct Postion</h2>
        <h3>{this.state.historicalAverage}</h3>
      </div>
    );
  }
}

export default Deck;
