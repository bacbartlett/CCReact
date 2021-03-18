import React, { useEffect, useRef, useState } from "react"
import "./ReadyToHelpParalax.css"

const ReadyToHelpParalax = props => {
    const div = useRef(null)
    const [height, setHeight] = useState(0)
    const [backgroundPosition, setBackgroundPostion] = useState(0)

    useEffect(()=> {
        const calculateHeight = () => {
            if(div.current){
                setHeight(div.current.offsetWidth * .436)
                console.log("I RAN")
            }
        }

        window.addEventListener("resize", calculateHeight)
        calculateHeight()
    }, [])

    useEffect(()=> {
        const calculateParalax = () => {
            if(div.current){
                const rect = div.current.getBoundingClientRect();
                const percentScrolled = rect.bottom / (window.innerHeight + (rect.bottom - rect.top))
                setBackgroundPostion((Math.ceil(percentScrolled) < 2 ? (800 * percentScrolled) * -1 : 0))
            }
        }
        document.addEventListener("scroll", calculateParalax)
    }, [])

    console.log("Rendering as", `${backgroundPosition}px`)

    return(
        <div className="ReadyToHelpParalaxDiv" style={{height: height, backgroundRepeat: "no-repeat", backgroundPosition: `0px ${backgroundPosition}px`}} ref={div}>
            <div className="TRHP--Title">
                <h3>READY TO HELP?</h3>
            </div>
            <div className="TRHP--ButtonDiv">
                <div className="TRHP--Button" >
                    JOIN TODAY
                </div>
                <div className="TRHP--Button">
                    CONTACT US
                </div>
            </div>
            

        </div>
    )
}

export default ReadyToHelpParalax