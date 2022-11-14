import React from "react";
import WindowTracker from "./components/WindowTracker.js";
import styles from "./styles.css";


function App() {


    const [ show, setShow ] = React.useState(true);

    function toggle() {
        setShow(prevShow => !prevShow)
    }
    console.log(show)

    React.useEffect(function () {
        console.log("It ran")
    }, [ toggle ])



    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle Windowtracker
            </button>
            {show && <WindowTracker />}

        </div>
    )
}

export default App;