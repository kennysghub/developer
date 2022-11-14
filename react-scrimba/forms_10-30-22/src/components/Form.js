import React from "react";

function Form() {

    const [ firstName, setFirstName ] = React.useState("");
    console.log(firstName)

    function handleChange(event) {
        setFirstName(event.target.value)
    }




    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Form;