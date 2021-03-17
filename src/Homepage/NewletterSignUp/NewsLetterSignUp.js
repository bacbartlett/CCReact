import React, { useState } from "react"
import "./NewsLetterSignUp.css"

const NewsLetterSignUp = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const updateFirstName = e => setFirstName(e.target.value)
    const updateLastName = e => setLastName(e.target.value)
    const updateEmail = e => setEmail(e.target.value)

    return(
        <div className="NewsLetterSignUp--Container">
            <div className="NewsLetterSignUp--Title">
                <h2 className="NewsLetterSignUp--h2">Sign Up For Our Newsletter</h2>
            </div>
            <div className="NewsLetterSignUp--Subheader">
                <p>Keep in touch with all that is happening at Cambium Carbon.</p>
            </div>
            <div className="NewsLetterSignUp--FormDiv">
                <input className={"NewsLetterSignUp--Input NewsLetterSignUp--Form__Spacer"} onChange={updateFirstName} value={firstName} type="text" placeholder="First Name" autoComplete={true} />
                <input className={"NewsLetterSignUp--Input NewsLetterSignUp--Form__Spacer"} onChange={updateLastName} value={lastName} type="text" placeholder="Last Name" autoComplete={true} />
                <input className={"NewsLetterSignUp--Input NewsLetterSignUp--Form__Spacer"} onChange={updateEmail} value={email} type="email" placeholder="Email Address" autoComplete={true} />
                <div className="NewsLetterSignUp--Button NewsLetterSignUp--Form__Spacer">
                    SIGN UP
                </div>
            </div>
            <div className="NewsLetterSignUp--Footer">
                <p>We will respect your privacy and not clog your inbox!</p>
            </div>
        </div>
    )
}

export default NewsLetterSignUp