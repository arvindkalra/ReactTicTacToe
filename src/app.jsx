// console.log("This is JSX..");

import React from "react";
import ReactDOM from "react-dom";
import Square from "./Components/Square.jsx";
import Board from "./Components/Board.jsx";

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

var sq = (<Square/>);
var game = (<Game/>);
// ========================================

ReactDOM.render(
    game,
    document.getElementById('app')
);