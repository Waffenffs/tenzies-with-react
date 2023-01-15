import React from "react"

const Die = (props) => {
    return(
        <div className={props.isHeld ? "held-card" : "card"} onClick={props.holdDice} >
            <h1>{props.value}</h1>
        </div>
    )
}

export default Die;