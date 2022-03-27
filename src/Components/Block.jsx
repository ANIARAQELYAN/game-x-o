import React from "react";

function Block(props) {
    return (
        <button className="block" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Block;