import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";

const Scoreboard = props => {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <td>
              <h2>Round Score</h2>
            </td>
            <td>
              <h2>Historical % of Cards in Correct Position</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.score}</td>
            <td>{props.historyAvg}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Scoreboard;
