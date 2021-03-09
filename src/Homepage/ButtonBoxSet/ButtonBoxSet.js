import React from "react"
import BoxButton from "./BoxButton/BoxButton"

const ButtonBoxSet = (props) => {
    const {boxes, spacing} = props;
    let column = []
    boxes.forEach(el=>column.push(`1fr ${spacing}px `))
    column.pop()
    column.push("1fr")
    column = column.join("")
    console.log(column)

    return(
        <div className="ButtonBoxSet" style={{display: "grid", gridTemplateColumns: column}}>
            {boxes.map((el,i) =>{
                return (boxes.length - 1 === i ? <><BoxButton info={el} /></>: <><BoxButton info={el} /><div></div></>)
            })}
        </div>
    )
}

export default ButtonBoxSet