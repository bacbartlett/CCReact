import React, { useRef } from "react"
import "./FeaturedIn.css"

const FeaturedIn = (props) => {
    const div = useRef(null)
    return(
        <div className="FeaturedIn--Div" ref={div}>
            <div className="FeaturedIn--Container">
                <div></div>
                <div className="FeaturedIn--h1Container">
                    <h1 className="FeaturedIn--h1">FEATURED IN</h1>
                </div>
                <div></div>
                <img className="FeaturedIn--Image" src="/Forbes+30+under+30.jpg" style={{width: `${div.current?.offsetWidth *.08}px`, height: `${div.current?.offsetWidth * .08}px`}}/>
                <div></div>
                <img className="FeaturedIn--Image" src="/econforum.png" style={{width: `${div.current?.offsetWidth *.08}px`, height: `${div.current?.offsetWidth * .08}px`}}/>
                <div></div>
                <img className="FeaturedIn--Image" src="/yale.jpg" style={{width: `${div.current?.offsetWidth *.08}px`, height: `${div.current?.offsetWidth * .08}px`}} />
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default FeaturedIn