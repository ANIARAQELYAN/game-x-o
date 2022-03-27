import React from "react";
import Block from "./Block";

function Board(props) {

    let renderBlock = function (i) {
        return (
            <Block
                value={props.blocks[i]}
                onClick={() => props.onClick(i)}
            />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderBlock(0)}
                {renderBlock(1)}
                {renderBlock(2)}
            </div>
            <div className="board-row">
                {renderBlock(3)}
                {renderBlock(4)}
                {renderBlock(5)}
            </div>
            <div className="board-row">
                {renderBlock(6)}
                {renderBlock(7)}
                {renderBlock(8)}
            </div>
        </div>
    );
}

export default Board;