import React from "react";
import { Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
        board: [[1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],

                ]
    };
  }

  onChange() {
    
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
        items[count].push(<td id={idCount} key={i}><input type="number" ></input></td>);
        idCount++;
    }
    return (
      <>
            <tr id={0} key={0}>
                {items[0]}
            </tr>
            <tr id={2} key={1}>
                {items[1]}
            </tr>
            <tr id={2} key={2}>
                {items[2]}
            </tr>
            <tr id={3} key={3}>
                {items[3]}
            </tr>
            <tr id={4} key={4}>
                {items[4]}
            </tr>
            <tr id={5} key={5}>
                {items[5]}
            </tr>
            <tr id={6} key={6}>
                {items[6]}
            </tr>
            <tr id={7} key={7}>
                {items[7]}
            </tr>
            <tr id={8} key={8}>
                {items[8]}
            </tr>

        {/* {items} */}
      </>
    );
  }
}

export default Board;
