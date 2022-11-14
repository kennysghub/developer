import React from "react";
import styles from "./styles.css";
function App() {


    const [ formData, setFormData ] = React.useState(
        {
            email: "",
            password: "",
            confirm: "",
            joinedNewsletter: true,

        }
    )
    function handleChange(event) {
        const { name, type, checked, value } = event.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [ name ]: type === "checkbox" ? checked : value
            }
        })

    }
    console.log(formData.joinedNewsletter)


    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        formData.password === formData.confirm ? console.log("Succesfully signed up") : console.log("Passwords do not match")
        formData.joinedNewsletter === true ? console.log("Thanks for signing up for our newsletter!") : console.log("Don't forget to sign up for our news letter!")
    }


    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}



                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}

                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="confirm"
                    value={formData.confirm}

                />

                <div className="form--marketing bouncy">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        checked={formData.joinedNewsletter}
                        onChange={handleChange}



                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"

                >
                    Sign up
                </button>
            </form>
        </div>
    )
}


export default App;