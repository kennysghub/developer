import React from "react";


function Meme() {
    const [ meme, setMeme ] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    });




    const [ allMemes, setAllMemes ] = React.useState([]);

    React.useEffect(function () {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    console.log(allMemes)
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[ randomNumber ].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }

        })
    }
    function submitHandler(event) {
        event.preventDefault()
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => (
            {
                ...prevMeme,
                [ name ]: value

            }
        ))
    }


    return (
        <main>
            <div className="form" onSubmit={submitHandler}>

                <input
                    className="form--input"
                    type="text"
                    placeholder="Top Text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                >

                </input>

                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                >
                </input>

                <button
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image 🖼

                </button>


            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <div>
            </div>

        </main>
    )
}

export default Meme;