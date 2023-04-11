import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart } from '@fortawesome/free-solid-svg-icons';

function InstagramCard(props) {
    return (
        <a href={props.link} className="box">
            <div className="boxWrap">
                {props.img}
                <div className="imgText">
                    <div className="heart"><FontAwesomeIcon icon={faHeart} className="icon"/> 20314</div>
                    <div className="type">{props.type}</div>
                    <div className="mType">{props.mType}</div>
                </div>
                <div className="backColor"></div>
            </div>
        </a>
    )
}

export default InstagramCard