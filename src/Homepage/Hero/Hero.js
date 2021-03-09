import React from "react"

const Hero = (props) => {
    const [video, setVideo] = useState(false)

    return(
        <div className="homepage__hero">
            {video? null : <div className="homepage__hero--image">
                </div>}
        </div>
    )
}