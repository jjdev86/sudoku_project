import React from 'react';
import { Component } from 'react';
import Board from './board.jsx';
import '../main.css';

class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <h3>Soduko</h3>
                <div className="table-container">
                <table className="board">
                <Board />
                {/* <Board start={28} end={54}/>
                <Board start={55} end={81}/> */}

                </table>

                </div>
            </div>
        )
    }
};

export default App;