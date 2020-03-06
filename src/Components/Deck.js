import React, { Component } from "react";
import Row from "./Row";

class Deck extends Component {
  state = {
    cards: [
      ["AS", "2H", "3C"],
      ["QD", "KH", "6C"],
      ["8H", "9D", "TS"]
    ]
  };

  // retrieve cards on mount
  // cards = [[], [], [], []]
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:4000/cards")
  //     .then(response => {
  //       this.setState({ cards: response.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  rowsList() {
    return this.state.cards.map((row, idx) => {
      return <Row row={row} />;
    });
  }

  render() {
    return (
      <table>
        {/* <thead>
          <tr>DECK HEAD</tr>
        </thead> */}
        <tbody>{this.rowsList()}</tbody>
      </table>
    );
  }
}

export default Deck;
