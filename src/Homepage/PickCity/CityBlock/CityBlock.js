import React, { useEffect, useRef, useState } from "react"
import "./CityBlock.css"

const CityBlock = (props) => {
    const {cityname, url, heightpercent, fontSize, backgroundPosition} = props
    const divRef = useRef(null)
    const [height, setHeight] = useState(0)
    useEffect(()=>{
        if(divRef){
            setHeight(divRef.current.offsetWidth * heightpercent)
        } 
    },[])

    return(
        <div className="CityBlock" style={{backgroundImage: `url(${url})`, backgroundPosition: backgroundPosition}} ref={divRef}>
            <div style={{height: height, fontSize:fontSize}} className="CityBlock--name">{cityname}</div>
        </div>
    )
}

export default CityBlock

//paddingTop: heightpercent