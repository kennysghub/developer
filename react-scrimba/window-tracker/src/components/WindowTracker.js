import React from "react";

function WindowTracker() {

    const [ windowWidth, setWindowWidth ] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting Up")
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return function () {
            console.log("Cleaning UP")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])


    return (
        <h1> Window Width: {windowWidth}</h1>
    )
}

export default WindowTracker;