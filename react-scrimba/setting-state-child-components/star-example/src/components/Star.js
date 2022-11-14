/** @format */

import React from "react";

function Star(props) {

    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"


    return (
        <div>
            <img
                src={`../${starIcon}`}
                className="card--favorite"
                onClick={props.handleClick}
            />
        </div>
    );
}

export default Star;
