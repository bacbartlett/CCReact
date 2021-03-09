import React from "react"
import "./CityBlock.css"

const CityBlock = (props) => {
    const {cityname, url, heightpercent} = props



    return(
        <div className="CityBlock" style={{backgroundImage: `url(${url})`, paddingTop: heightpercent}}>
            <p className="CityBlock--name">{cityname}</p>
        </div>
    )
}

export default CityBlock