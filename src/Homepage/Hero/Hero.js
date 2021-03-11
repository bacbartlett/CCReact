import React, { useEffect, useRef, useState } from "react"
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import "./Hero.css"

const Hero = (props) => {
    const heroImage = useRef(null)
    const [moveUp, setMoveUp] = useState(0)
    
    useEffect(()=>{
        if(heroImage.current){
            const rect = heroImage.current.getBoundingClientRect()
            setMoveUp(((rect.bottom - rect.top) / 2) - 50)
            console.log(heroImage.current, moveUp)
        }
    },[])
    
    

    const [video, setVideo] = useState(false)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const turnToVideo = () => {
        const rect = heroImage.current.getBoundingClientRect()
        setWidth(rect.right - rect.left)
        setHeight(rect.bottom - rect.top - 145)
        setVideo(true)
    }

    return(
        <div className="homepage__hero">
            {video? <iframe style={{paddingBottom: "70px"}} width={width} height={height} src="https://www.youtube.com/embed/BRwu1iJIYI0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : 
            <div onClick={turnToVideo} className="homepage__hero--image" ref={heroImage}>
                <div className="pointer">
                    <PlayArrowRoundedIcon style={{position: "relative", bottom: moveUp, color: "white", fontSize: 100}} />
                </div>
            </div>}
        </div>
    )
}

export default Hero