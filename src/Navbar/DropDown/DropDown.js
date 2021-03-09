import React from "react"
import { useHistory } from "react-router"
import "./DropDown.css"

const DropDown = (props) => {
    const history = useHistory()

    const generateLink = (link) => {
        return () => {
            history.push(link)
        }
    }
    const styles = {
        left: props.left,
        top: props.top
    }
    return(
        <div style={styles} className="dropdown" onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave}>
            {props.list.map(el=>{
                return(
                    <a className="dropdown__link" onClick={generateLink(el.link)}>{el.title}</a>
                )
            })}
        </div>
        
    )
}

export default DropDown