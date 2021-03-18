import React from "react"
import Hero from "./Hero/Hero"
import "./Homepage.css"
import BoxButtonSet from "./ButtonBoxSet/ButtonBoxSet"
import PickCity from "./PickCity/PickCity"
import HubExplaination from "./HubExplaination/HubExplaination"
import NewsLetterSignUp from "./NewletterSignUp/NewsLetterSignUp"
import DoubleButtonSection from "./DoubleButtonSection/DoubleButtonSection"
import ReadyToHelpParalax from "./ReadyToHelpParalax/ReadyToHelpParalax"

const Homepage = (props) => {
    const buttonboxobjects = []
    buttonboxobjects.push({title: "Reforestation Hubs", url: "./city-scape.jpg", buttonText: "LEARN ABOUT OUR MODEL", href: "/rhub", customClass: "boxbuttonbutton"})
    buttonboxobjects.push({title: "Buy Local Wood", url: "./chiles.jpg", buttonText: "SHOP WITH US",  href: "/pre-order", customClass: "boxbuttonbutton"})
    buttonboxobjects.push({title: "Discover the Future of Wood", url: "./wood_with_fern.jpg", buttonText: "PARTNER WITH US",  href: "/carbon-smart-wood-alliance", customClass: "boxbuttonbutton"})
    return(
        <>
            <Hero />
            <section>
                <div className="S2--header--div">
                    <h1 className="S2--header">Rethinking How We Value Trees</h1>
                </div>
                <div className="center">
                    <p className="S2--content">We are on a mission to tackle climate change head on by improving communities today.  Our Reforestation Hubs are building a circular economy for urban forests—reclaiming city wood waste and generating revenues to plant and maintain trees. These hubs can create sustainable new jobs and help build the resilient cities that the 21st century demands. By focusing on tree equity, workforce development, and investment in local businesses, Cambium is creating a better future for people and the planet.</p>
                </div>
            </section>
            <section>
                <div className="S3-div">
                    <BoxButtonSet boxes={buttonboxobjects} spacing={35} />
                </div>
            </section>
            <section>
                <div className="S4--header--div">
                    <h1 className="S4--header">Find Your City</h1>
                </div>
            </section>
            <section>
                <PickCity />
            </section>
                <HubExplaination />
            <section>
            <section>
                <NewsLetterSignUp />
            </section>
            <section>
                <DoubleButtonSection />
            </section>
            <section>
                <ReadyToHelpParalax />
            </section>
                <div style={{height: "900px"}}>

                </div>
            </section>
        </>
    )
}

export default Homepage