import React from "react"
import "./PickCity.css"
import CityBlock from "./CityBlock/CityBlock"

const PickCity = () => {
    return(
        <div className="PickCityDivContainer">
        <div className="PickCityDiv">
            <div className="left2columns">
                <div className="nycontainer cityblockcontianer">
                    <CityBlock url="/city_nyc.jpg" cityname="New York City" heightpercent={.33} fontSize={70} backgroundPosition="0px -85px"/>
                </div>
                <div className="leftquad">
                    <div className="leftquad--leftside">
                        <div className="philadelphiacontainer cityblockcontianer">
                            <CityBlock url="/city_philadelphia.jpeg" cityname="Philadelphia" heightpercent={.58} fontSize={40} backgroundPosition="0px -140px" />
                        </div>
                        <div className="denvercontainer cityblockcontianer">
                            <CityBlock url="/city_denver.gif" cityname="Denver" heightpercent={.58} fontSize={40} backgroundPosition="0px -20px" />
                        </div>
                    </div>
                    <div className="leftquad--rightside">
                        <div className="baltimorecontainer cityblockcontianer">
                            <CityBlock url="/city_baltimore.jpg" cityname="Baltimore" heightpercent={.58} fontSize={33} backgroundPosition="0px -55px" />
                        </div>
                        <div className="riograndecontainer cityblockcontianer">
                            <CityBlock url="/city_riogande.png" cityname="Rio Grande" heightpercent={.58} fontSize={33} backgroundPosition="-40px 0px"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightcolumn">
                <div className="pittsburghcontainer cityblockcontianer">
                    <CityBlock url="/city_pittsburg.jpeg" cityname="Pittsburgh" heightpercent={.58} fontSize={33} />
                </div>
                <div className="eugenecontainer cityblockcontianer">
                    <CityBlock url="/city_eugene.jpeg" cityname="Eugene" heightpercent={.58} fontSize={33} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default PickCity