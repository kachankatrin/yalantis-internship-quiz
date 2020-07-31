import React from "react";
import {calendar} from "../utils.js"

export default function Calendar(props) {
    return (
        <ul className="calendar">
            {calendar.map(month => (<li className="month-container">
            <div>{month.key} {month.month}</div>
    <p>{props.count}</p>
            </li>))}
        </ul>
    )
}