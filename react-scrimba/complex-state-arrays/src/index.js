import React from "react";
import ReactDOM from "react-dom/client";

function App() {


  const [ thingsArray, setThingsArray ] = React.useState([ "Thing 1", "Thing 2" ])

  function onClickHandler() {
    setThingsArray((thingsArray) => ([ ...thingsArray, `Thing ${thingsArray.length + 1}` ])
    )
  }

  const thingsElements = thingsArray.map(elements => <p>{elements}</p>)



  return (
    <div>

      <button onClick={onClickHandler}>Click Me</button>
      <div>
        {thingsElements}
      </div>
    </div>
  )


}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);