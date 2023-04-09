import React from 'react'
import { Link, Route } from "react-router-dom";

function SubBanner(props) {
    return (
        <Link to="/">
            <div className={props.class}>
                <p>{props.bannerText}</p>
                {props.img}
                {props.icon}
            </div>
        </Link>
    )
}

export default SubBanner