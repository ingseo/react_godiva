import React from 'react'
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SliderComponent from './SliderComponent';
import EventListCard from './EventListCard';
import '../../style/scss/mainpage.scss'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Contents() {
    return (
        <>
            <SliderComponent />
            <div className="chocoBg">
                {/* event */}
                <div className="event">
                    <div className="container">
                        <div className="left">
                        <div className="text">
                            <div className="point"><span></span></div>
                            <div className="title">EVENT LIST</div>
                            <div className="type">Sweet pleasure</div>
                            </div>
                            <ul className="list">
                                <li>2020 스프링 앙샹뜨 컬렉션<br />
                                    Spring Enchanteur Collection </li>
                                <li>고디바 회원만의 특별한 혜택<br />
                                    GODIVA MAMBERSHIP</li>
                                <li>프리미엄 컵 아이스크림<br />
                                    Premium Cup Ice Cream</li>
                            </ul>
                        </div>
                        <div className="right">
                        <div className="cardGroup">
                                <div className="card logo">
                                    <div className="wrap logo">
                                        <img src={ require('../../assets/img/main/event_imegeLogo.png') } alt="고디바 로고" /> 
                                    </div>
                                </div>
                                <EventListCard />
                                <EventListCard />
                                <EventListCard />
                                <ul className="mList">   
                                    <li>2020 스프링 앙샹뜨 컬렉션<br />
                                        Spring Enchanteur Collection </li>
                                    <li>고디바 회원만의 특별한 혜택<br />
                                        GODIVA MAMBERSHIP</li>
                                    <li>프리미엄 컵 아이스크림<br />
                                        Premium Cup Ice Cream</li>
                                </ul>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contents