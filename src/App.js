import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";
import Deck from "./Components/Deck";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h2>LETS GET SHUFFLIN</h2>
        </div>
        <Deck />
      </Router>
    );
  }
}

export default App;
