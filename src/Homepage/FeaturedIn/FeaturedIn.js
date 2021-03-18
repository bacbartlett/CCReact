import React, { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router"
import "./FeaturedIn.css"

const FeaturedIn = (props) => {
    const div = useRef(null)

    const [toggleMe, setToggleMe] = useState(false)

    useEffect(()=> {
        setToggleMe(!toggleMe)
    }, [])

    const forbes = () => {
        window.location = ("https://www.forbes.com/profile/cambium-carbon/")
    }

    const weforum = () => {
        window.location = ("https://www.weforum.org/agenda/2020/10/trees-reforestation-hubs-environment-urban-city-life")
    }


    return(
        <div className="FeaturedIn--Div" ref={div}>
            <div className="FeaturedIn--Container">
                <div></div>
                <div className="FeaturedIn--h1Container">
                    <h1 className="FeaturedIn--h1">FEATURED IN</h1>
                </div>
                <div></div>
                <img onClick={forbes} className="FeaturedIn--Image" src="/Forbes+30+under+30.jpg" style={{width: `${div.current?.offsetWidth *.08}px`, height: `${div.current?.offsetWidth * .08}px`}}/>
                <div></div>
                <img onClick={weforum} className="FeaturedIn--Image" src="/econforum.png" style={{width: `${div.current?.offsetWidth *.08}px`, height: `${div.current?.offsetWidth * .08}px`}}/>
                <div></div>
                <img className="FeaturedIn--Image" src="/yale.jpg" style={{width: `${div.current?.offsetWidth *.08}px`, height: `${div.current?.offsetWidth * .08}px`}} />
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default FeaturedIn