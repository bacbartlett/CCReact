import React from "react"
import BottomLinks from "./BottomLinks/BottomLinks"
import Socials from "./Socials/Socials"

const Footer = props => {
    return(
        <div className="Footer">
            <BottomLinks />
            <Socials />
        </div>
    )
}

export default Footer