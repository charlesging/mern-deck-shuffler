import React, { Component } from "react";

const Row = props => {
  // Each row will have 13 <td> rows
  return (
    <tr>
      <td>{props.row[0]}</td>
      <td>{props.row[1]}</td>
      <td>{props.row[2]}</td>
      <td>{props.row[3]}</td>
      <td>{props.row[4]}</td>
      <td>{props.row[5]}</td>
      <td>{props.row[6]}</td>
      <td>{props.row[7]}</td>
      <td>{props.row[8]}</td>
      <td>{props.row[9]}</td>
      <td>{props.row[10]}</td>
      <td>{props.row[11]}</td>
      <td>{props.row[12]}</td>
    </tr>
  );
};

export default Row;
