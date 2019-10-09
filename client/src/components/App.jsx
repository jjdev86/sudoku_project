import React from 'react';
import { Component } from 'react';
import Board from './board.jsx';

class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h3>Soduko</h3>
                <table>
                <Board/>
                {/* <Board start={28} end={54}/>
                <Board start={55} end={81}/> */}

                </table>
            </div>
        )
    }
};

export default App;