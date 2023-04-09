import React from 'react'
import { Link, Route } from "react-router-dom";

export default function ContentsBox(props) {
    return (
        <div className={props.class}>
            <div className="bg"></div>
            <div className="mBg"></div>
            <div className="subText subText2">
                <div className="title">{props.title}</div>
                <div className="type">{props.type}</div>
                <div className="point"><span></span></div>
                <div className="ex">{props.ex}</div>
                <Link to="/"><div className="deialisBtn">{props.btn}</div></Link>
            </div>
        </div>
    )
}
