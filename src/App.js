import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Deck from "./Components/Deck";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  render() {
    return (
      <Container>
        <h1>Card Shuffler</h1>
        <Deck />
      </Container>
    );
  }
}

export default App;
