import React from 'react'
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart } from '@fortawesome/free-solid-svg-icons';

function InstagramCard() {
    return (
        <Link to="https://www.instagram.com/godivakorea/?hl=ko">
            <div className="box box1">
                <img src={ require('../../assets/img/main/insta1.jpg') } alt="인스타그램" />
                <div className="imgText">
                    <div className="heart"><FontAwesomeIcon icon={faHeart} className="icon"/> 20314</div>
                    <div className="type">#고디바 #고디바초콜릿 #코디바화이트데이 #화이트데이초콜릿 #화이트데이 #완벽한고백 #화이트데이 선물 #여자친구선물 #고디바퍼펙트페어링컬렉션 #godiva #godivachocolate #WonderAwaits</div>
                    <div className="mType">#고디바화이트데이</div>
                </div>
                <div className="backColor"></div>
            </div>
        </Link>
    )
}

export default InstagramCard