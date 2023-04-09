import React from 'react'
import { Link, Route } from "react-router-dom";

function SubVisual(props) {
    return (
        <div className="subVisual">
            <div className="text">
                {props.logo}
                <div className="title">{props.title}</div>
                <div className="type">{props.type}</div>
            </div>
            {props.subGroup}
        </div>
    )
}

export default SubVisual