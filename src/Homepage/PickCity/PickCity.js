import React from "react"
import "./PickCity.css"
import CityBlock from "./CityBlock/CityBlock"

const PickCity = () => {
    return(
        <div className="PickCityDiv">
            <div className="left2columns">
                <div className="nycontainer cityblockcontianer">
                    <CityBlock url="/city_nyc.jpg" cityname="New York" heightpercent="58%" />
                </div>
                <div className="leftquad">
                    <div className="leftquad--leftside">
                        <div className="philadelphiacontainer cityblockcontianer">
                            <CityBlock url="/city_philadelphia.jpeg" cityname="Philadelphia" heightpercent="58%" />
                        </div>
                        <div className="denvercontainer cityblockcontianer">
                            <CityBlock url="/city_denver.gif" cityname="Denver" heightpercent="58%" />
                        </div>
                    </div>
                    <div className="leftquad--rightside">
                        <div className="baltimorecontainer cityblockcontianer">
                            <CityBlock url="/city_baltimore.jpg" cityname="Baltimore" heightpercent="58%" />
                        </div>
                        <div className="riograndecontainer cityblockcontianer">
                            <CityBlock url="/city_riogande.png" cityname="Rio Grande" heightpercent="58%" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightcolumn">
                <div className="pittsburghcontainer cityblockcontianer">
                    <CityBlock url="/city_pittsburg.jpeg" cityname="Pittsburgh" heightpercent="58%" />
                </div>
                <div className="eugenecontainer cityblockcontianer">
                    <CityBlock url="/city_eugene.jpeg" cityname="Eugene" heightpercent="58%" />
                </div>
            </div>
        </div>
    )
}

export default PickCity