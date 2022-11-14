import React from "react";
import Clicker from "./components/Clicker.js";
import styles from "./style.css";


function App() {

    const [ isGoingOut, setIsGoingOut ] = React.useState(false);

    function onClickHandler() {
        setIsGoingOut(prevState => !prevState)
    }



    return (  




        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={onClickHandler} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

export default App;

//setting state to a boolean -> false
// calling onClickHandler function when the button is clicked  
// the function calls the setter method-> setIsGoingOut which takes in a value .
// Since we need the prev.state to update the state , we'll call our parameter value prevState which we are passing in our current state isGoingOut into 
// prevState => !prevState 
//equivalent when passed in to isGoingOut => !isGoingOut   which is our current state name  
// this just returns the opposite