import React from "react";

function Counter(props) {
    return (
        <div>
            <div className="counter--count">
                <h1>{props.number}</h1>
            </div>
        </div>
    )
}

export default Counter; 