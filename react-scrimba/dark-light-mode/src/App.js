import React from "react";

import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";
import style from "./styles.css";
function App() {

    const [ darkMode, setDarkMode ] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }


    return (
        <div className="container">
            <Navbar darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Main
                darkMode={darkMode}

            />

        </div>
    )
}

export default App;