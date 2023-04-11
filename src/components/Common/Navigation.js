import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../style/scss/navi.scss'
import styled from 'styled-components'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const DropDownContent = styled.div`
        height: ${props => (props.display ? '100px' : '0')};
        position: absolute;
        width: 100%;
        overflow: hidden;
        transition: 0.3s;
    `

function Navigation() {

    //search
    const [isActive, setIsActive] = useState(false);
    const clickSearch = () => {
        setIsActive(!isActive)
    }

    //menu
    const [display, setDisplay] = useState([false, false, false, false]);
    function outMouseDisplay() {
        setDisplay([false, false, false, false]);
    }
    function inMouseDisplay(index) {
        let newDisplay = [false, false, false, false];
        newDisplay[index] = true;
        setDisplay(newDisplay);
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
                        <li className="list" 
                            onMouseEnter={() => inMouseDisplay(1)}
                            onMouseLeave={() => outMouseDisplay()}
                        >
                            <Link to="/menu">GODIVA MENU</Link>    
                        </li>
                        <li className="list" 
                            onMouseEnter={() => inMouseDisplay(2)}
                            onMouseLeave={() => outMouseDisplay()}
                        >
                            <Link to="/online">ONLINE EXCLUSIVE</Link>   
                        </li>
                        <li className="list" 
                            onMouseEnter={() => inMouseDisplay(3)}
                            onMouseLeave={() => outMouseDisplay()}
                        >
                            <Link to="/news">NEWS＆EVENT</Link>  
                        </li>
                        <li className="list" 
                            onMouseEnter={() => inMouseDisplay(4)}
                            onMouseLeave={() => outMouseDisplay()}
                        >
                            <Link to="/about">ABOUT GODIVA</Link>
                        </li>
                    </ul>
                    <div className="subMenuGroup">
                        <DropDownContent 
                            display={display[1]}
                            onMouseEnter={() => inMouseDisplay(1)}
                            onMouseLeave={() => outMouseDisplay()}
                        >
                            <ul className="subMenu">
                                <div className="wrap godivaMenu">
                                    <li><Link to="/menu">초콜릿│Chocolate</Link></li>
                                    <li><Link to="/menu">음료│Beverage</Link></li>
                                    <li><Link to="/menu">아이스크림│Icecream</Link></li>
                                    <li><Link to="/menu">스낵＆디저트│Snack＆Dessert</Link></li>
                                    <li><Link to="/menu">전체상품│Shop All</Link></li>
                                </div>
                            </ul>
                        </DropDownContent>
                        <DropDownContent 
                            display={display[2]}
                            onMouseEnter={() => inMouseDisplay(2)}
                            onMouseLeave={() => outMouseDisplay()}
                        >
                            <ul className="subMenu">
                                <div className="wrap online">
                                    <li><Link to="/online">온라인몰│Online Shop</Link></li>
                                    <li><Link to="/online">시즌상품│Season Products</Link></li>
                                    <li><Link to="/online">컬렉션│collection</Link></li>
                                    <li><Link to="/online">전체상품│Shop All</Link></li>
                                </div>
                            </ul>
                        </DropDownContent>
                        <DropDownContent 
                            display={display[3]}
                            onMouseEnter={() => inMouseDisplay(3)}
                            onMouseLeave={() => outMouseDisplay()}
                        >
                            <ul className="subMenu">
                                <div className="wrap newsEvent">
                                    <li><Link to="/news">미디어│Press＆Magazine</Link></li>
                                    <li><Link to="/news">프로모션│Event</Link></li>
                                    <li><Link to="/news">공지사항│News</Link></li>
                                </div>
                            </ul>
                        </DropDownContent>
                        <DropDownContent 
                            display={display[4]}
                            onMouseEnter={() => inMouseDisplay(4)}
                            onMouseLeave={() => outMouseDisplay()}
                        >
                            <ul className="subMenu">
                                <div className="wrap about">
                                    <li><Link to="/about">고디바 스토리│Our Story</Link></li>
                                    <li><Link to="/about">고디바 매장│Our Stores</Link></li>
                                </div>
                            </ul>
                        </DropDownContent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation