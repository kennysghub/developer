import React from "react";
import dark from "../react-icon-dark.png";
import Small from "../react-icon-small.png";

function Navbar(props) {
    return (
        <nav
            className={props.darkMode ? "dark" : ""}
        >
            <img
                className="nav--logo_icon"
                src={Small}
                alt="Small"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar;