import React, { useEffect, useRef, useState } from "react"
import "./BoxButton.css"
import Button from "../../../Button/Button"

const BoxButton = (props) => {
    const buttonBox = useRef(null)
    const [height, setHeight] = useState(0)
    useEffect(()=> {
        if(buttonBox.current){
            setHeight(buttonBox.current.clientWidth * .75)
        }
    }, [])

    const {info} = props
    console.log("height:", height)

    return(
        <div className="buttonBox" style={{height: height, backgroundImage: `url(${info.url})`}} ref={buttonBox}>
            <p className="buttonBox--title">{info.title}</p>
            <div className="buttonBox--buttonDiv">
                <Button text={info.buttonText} link={info.href} customClass={info.customClass}/>
            </div>
        </div>
    )
}

export default BoxButton