import React from "react"
import { useHistory } from "react-router"
import "./Button.css"

const Button = (props) => {
    const history = useHistory()
    const {text, style, link, customClass} = props

    const click = () => history.push(link)

    return(
        <div onClick={click} className={"themedButton " + customClass}>
            <p className="themedButtonText">{text}</p>
        </div>
    )
}

export default Button