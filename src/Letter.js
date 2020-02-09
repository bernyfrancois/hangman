import React from "react";
import "./Letter.css"

const HIDDEN8SYMBOL = "?"

const Letter = ({letter, feedback}) => <div className={`word__letter ${feedback}`}>
    <span>{feedback === "visible" ? letter : HIDDEN8SYMBOL}</span></div>

export default Letter