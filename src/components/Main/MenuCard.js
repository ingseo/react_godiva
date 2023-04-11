import React from 'react'
import { Link } from "react-router-dom";

function MenuCard(props) {
    return (
        <Link to="/menu">
            <div className="boxover">
                {props.img}
                {props.mImg}
                <div className="contents">
                    <h4>{props.name}</h4>
                    <span></span>
                    <p>{props.value}</p>
                </div>
                <div className="over"></div>
            </div>
        </Link>
    )
}

export default MenuCard