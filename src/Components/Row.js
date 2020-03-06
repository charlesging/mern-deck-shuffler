import React, { Component } from "react";

const Row = props => {
  return (
    <tr>
      <td>{props.row[0]}</td>
      <td>{props.row[1]}</td>
      <td>{props.row[2]}</td>
    </tr>
  );
};

export default Row;
