import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../style/scss/navi.scss'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navigation() {

    const [isActive, setIsActive] = useState(false);
    const clickSearch = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="navi">
            <div className="fixed">
                <div className="naviUp">
                    <div className="logo">
                        <Link to="/">
                            <img src={ require('../../assets/img/main/godiva_logomenu.png') } alt="고디바 로고" />
                        </Link>
                    </div>
                    <div className="right">
                        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={clickSearch} className='icon' fixedWidth />
                        <div className={`search ${isActive ? 'clickSearch' : ''}`}>
                            <input type="text" />
                        </div>
                        <ul className="upMenu">
                            <li>로그인</li>
                            <li>최근 본 상품</li>
                            <li>CART</li>
                        </ul>
                    </div>
                </div>
                <div className="naviDown"></div>
                <div className="menuGroup">
                    <ul className="downMenu">
                        <li className="list">
                            <Link to="/menu">GODIVA MENU</Link>    
                        </li>
                        <li className="list">
                            <Link to="/online">ONLINE EXCLUSIVE</Link>   
                        </li>
                        <li className="list">
                            <Link to="/news">NEWS＆EVENT</Link>  
                        </li>
                        <li className="list">
                            <Link to="/about">ABOUT GODIVA</Link>
                        </li>
                    </ul>
                    <div className="subMenuGroup">
                        <ul className="subMenu">
                            <div className="wrap godivaMenu">
                            <li><Link to="/menu">초콜릿│Chocolate</Link></li>
                            <li><Link to="/menu">음료│Beverage</Link></li>
                            <li><Link to="/menu">아이스크림│Icecream</Link></li>
                            <li><Link to="/menu">스낵＆디저트│Snack＆Dessert</Link></li>
                            <li><Link to="/menu">전체상품│Shop All</Link></li>
                            </div>
                        </ul>

                        <ul className="subMenu">
                            <div className="wrap online">
                            <li><Link to="/online">온라인몰│Online Shop</Link></li>
                            <li><Link to="/online">시즌상품│Season Products</Link></li>
                            <li><Link to="/online">컬렉션│collection</Link></li>
                            <li><Link to="/online">전체상품│Shop All</Link></li>
                            </div>
                        </ul>

                        <ul className="subMenu">
                            <div className="wrap newsEvent">
                            <li><Link to="/news">미디어│Press＆Magazine</Link></li>
                            <li><Link to="/news">프로모션│Event</Link></li>
                            <li><Link to="/news">공지사항│News</Link></li>
                            </div>
                        </ul>

                        <ul className="subMenu">
                            <div className="wrap about">
                            <li><Link to="/about">고디바 스토리│Our Story</Link></li>
                            <li><Link to="/about">고디바 매장│Our Stores</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation