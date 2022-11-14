// import React from "react";
// import ReactDOM from "react-dom"; 17
import ReactDOM from "react-dom/client";




const slide = (
    <div>
        <img width="40" src="react-logo.png" />
        <h1>Fun facts about React </h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

//ReactDOM.render(slide, document.getElementById("root"));      React 17
//1st: what element to render, 2nd: where to render

//ReactDOM.render NOT supported. use -> createDOM
ReactDOM.createRoot(document.getElementById("root")).render(slide);
