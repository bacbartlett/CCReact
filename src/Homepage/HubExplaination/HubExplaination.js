import React from "react"
import "./HubExplaination.css"
import Button from "../../Button/Button"

const HubExplaination = () => {
    return(
        <div className="HubExplainationContainer">
            <img src="/centralpark.jpeg" className="HubExplainationPhoto"/>
            <div className="HubExplainationContent">
                <div className="HubExplaination--Title" >
                    <h1 className="HubExplaination--TextMargin">How do Reforestation Hubs work?</h1>
                </div>
                <div className="HubExplaination--Text " >
                    <p className="HubExplaination--TextMargin">We work with cities to create the economic, social, and environmental case for lifecycle tree management.</p>
                </div>
                <div className="HubExplaination--Text" >
                    <Button text="LEARN MORE" link="/rhub" customClass="HubExplaination--blackbutton" />
                </div>
            </div>
        </div>
    )
}

export default HubExplaination