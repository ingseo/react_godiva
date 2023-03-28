import React from 'react'
import { Link, Route } from "react-router-dom";
import SliderComponent from './SliderComponent';
import EventListCard from './EventListCard';
import SubTitle from './SubTitle';
import MenuCard from './MenuCard';
import InstagramCard from './InstagramCard';
import '../../style/scss/mainpage.scss'

function Contents() {
    return (
        <>
            <SliderComponent />

            {/* 초콜렛 배경 */}
            <div className="chocoBg">
                
                {/* event */}
                <div className="event">
                    <div className="container">
                        <div className="left">
                            <SubTitle />
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

                {/* today's chocolate */}
                <div className="today">
                    <div className="container">
                        <div className="left">
                            <SubTitle />
                        </div>
                        <input type="button" className="go" value="확인하기" />
                        <div className="right">
                            <div className="choco"><img src={ require('../../assets/img/main/chocolate-01.png') } alt="Tourbillon Ⅱ" /></div>
                            <div className="contents">
                                <div className="name">Tourbillon Ⅱ</div>
                                <div className="ex">카카오 85%의 다크 초콜릿 가나슈가 들어간 다크초콜릿. 고디바의 시그니처 제품인 골드 컬렉션을 보다 더 모던하고 정교하게 업그레이드한 골드 디스커버리 제품.</div>
                                <input type="button" className="btnMore" value="MORE" />
                            </div>   
                        </div>
                    </div>
                </div>

                {/* godiva menu */}
                <div className="gMenu">
                    <div className="container">
                        <div className="box">
                            <MenuCard />
                            <MenuCard />
                            <Link to="/">
                            <div className="boxover box3">
                                <span>G</span>
                                <span>O</span>
                                <span>D</span>
                                <span>I</span>
                                <span>V</span>
                                <span>A</span>
                                <span> </span>
                                <span>M</span>
                                <span>E</span>
                                <span>N</span>
                                <span>U</span>
                            </div>
                            </Link>
                            <MenuCard />
                            <MenuCard />
                            <MenuCard />
                        </div>
                    </div>
                </div>
            </div>

            {/* 매장배너*/}
            <div className="store">
                <Link to="/">
                    <div className="container">
                        <div className="iceImg"><img src={ require('../../assets/img/main/ice.png') } alt="아이스크림" /></div>
                        <div className="text">
                            <div className="title"><span>매장에서만 만날 수 있는 </span>달콤한 맛</div>
                            <div className="type">Sweet Place</div>
                        </div>
                        <input type="button" value="매장찾기" />
                    </div>
                </Link>
            </div>

            {/* 인스타그램 */}
            <div className="insta">
                <div className="instaGroup">
                    <InstagramCard />
                    <InstagramCard />
                    <div className="box box3">
                        <div>SHOW US<br />HOW YOU<br />SHARE<br />THE LOVE<br />#GODIVA</div>
                    </div>
                    <InstagramCard />
                    <InstagramCard />
                    <InstagramCard />
                    <InstagramCard />
                    <InstagramCard />
                    <div className="box box9">
                        <div>#GODIVA<br />#LOVESTAGRAM<br /></div>
                    </div>
                </div>
            </div>

            {/* email */}
            <div className="email">
                <div className="container">
                    <input placeholder="Type to your e-mail adress" />
                    <div className="sign">
                        <input type="submit" value="sign" />
                        <div><span></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contents