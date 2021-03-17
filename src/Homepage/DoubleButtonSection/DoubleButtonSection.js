import React from "react";
import "./DoubleButtonSection.css"


const DoubleButtonSection = props => {
    return(
        <div className="DoubleButtonSectionDiv">
            <div className="DoubleButtonSection--TopSpacer"></div>
            <div className="DoubleButtonSection--ButtonDiv">
                <div className="DoubleButtonSection--Button" >
                    OUR STORY
                </div>
                <div className="DoubleButtonSection--Button">
                    JOIN US
                </div>
            </div>
            <div className="DoubleButtonSection--BottomSpacer"></div>
        </div>
    )
}

export default DoubleButtonSection