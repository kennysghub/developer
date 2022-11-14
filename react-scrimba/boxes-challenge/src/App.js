import React from "react"
import styles from "./styles.css"
import BoxArray from "./components/Boxes.js"
import Box from "./components/Box.js"

function App() {
    const [ boxes, setBoxes ] = React.useState(BoxArray)


    // function toggle(id) {
    //     setBoxes(prevBoxes => {
    //         return prevBoxes.map((box) => {
    //             return box.id === id ? { ...box, on: !box.on } : box
    //         })
    //     })
    // }




    function toggle(id) {
        setBoxes((prevBoxes) => {
            return prevBoxes.map(box => {
                return box.id === id ? { ...box, on: !box.on } : box
            })
        })
    }





    const mapper = boxes.map((item) => (
        <Box
            key={item.id}
            id={item.id}
            on={item.on}
            handleClick={toggle}
        />
    ))

    return <div>{mapper}</div>
}

export default App
