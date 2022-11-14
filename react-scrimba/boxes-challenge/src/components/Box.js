/** @format */

import React from "react";

function Box(props) {

    const styler = {
        backgroundColor: props.on ? "green" : "red"
    };


    return (
        <div
            className="box"
            // onClick={() => props.handleClick(props.id)}
            onClick= { () => props.handleClick(props.id)}
            style={styler}>
        </div>
    )
}

export default Box;
