import React from "react";
import { Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
        board:  [Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9)]
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const rowId = event.target.parentNode.parentNode.id; 
    const col = event.target.parentNode.id 
    let board = [...this.state.board];
    board[Number(rowId)][Number(col)] = event.target.value;
    this.setState({ board}, () => {console.log(this.state.board)});
  }
  render() {
    const items = [[], [], [], [], [], [], [], [], []];
    let count = -1;
    let idCount = 0
    for (let i = 1; i <= 81; i++) {
        if ((i-1) % 9 === 0) {
            count++;
            idCount = 0;
        }
        items[count].push(<td id={idCount} key={i} className="col"><input type="number" onChange={this.onChange}></input></td>);
        idCount++;
    }
    return (
      <>
      <tbody>
            <tr id={0} key={0} className="row a-top-border">
                {items[0]}
            </tr>
            <tr id={1} key={1}>
                {items[1]}
            </tr>
            <tr id={2} key={2} >
                {items[2]}
            </tr>
            <tr id={3} key={3} className="row a-top-border">
                {items[3]}
            </tr>
            <tr id={4} key={4}>
                {items[4]}
            </tr>
            <tr id={5} key={5}>
                {items[5]}
            </tr>
            <tr id={6} key={6} className="row a-top-border">
                {items[6]}
            </tr>
            <tr id={7} key={7}>
                {items[7]}
            </tr>
            <tr id={8} key={8} className="row a-bottom-border">
                {items[8]}
            </tr>
            </tbody>
        {/* {items} */}
      </>
    );
  }
}

export default Board;
