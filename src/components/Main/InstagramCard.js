import React from 'react'
import { Link, Route } from "react-router-dom";
import '../../style/scss/card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart } from '@fortawesome/free-solid-svg-icons';

function InstagramCard(props) {
    return (
        <Link to={props.link}>
            <div className="box">
                {props.img}
                <div className="imgText">
                    <div className="heart"><FontAwesomeIcon icon={faHeart} className="icon"/> 20314</div>
                    <div className="type">{props.type}</div>
                    <div className="mType">{props.mType}</div>
                </div>
                <div className="backColor"></div>
            </div>
        </Link>
    )
}

export default InstagramCard