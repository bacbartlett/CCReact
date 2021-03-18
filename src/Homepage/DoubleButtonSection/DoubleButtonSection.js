import React from "react";
import { useHistory } from "react-router";
import "./DoubleButtonSection.css"


const DoubleButtonSection = props => {
    const history = useHistory()

    const ourStory = (e) => {
        history.push("/mission")
    }

    const careers = (e) => {
        history.push("/careers")
    }

    return(
        <div className="DoubleButtonSectionDiv">
            <div className="DoubleButtonSection--TopSpacer"></div>
            <div className="DoubleButtonSection--ButtonDiv">
                <div onClick={ourStory} className="DoubleButtonSection--Button" >
                    OUR STORY
                </div>
                <div onClick={careers} className="DoubleButtonSection--Button">
                    JOIN US
                </div>
            </div>
            <div className="DoubleButtonSection--BottomSpacer"></div>
        </div>
    )
}

export default DoubleButtonSection