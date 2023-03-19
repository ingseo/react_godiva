import React from 'react'
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../style/scss/navi.scss'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    return (
        <div className="navi">
            <div className="fixed">
                <div className="navi_up">
                    <div className="logo">
                        <Link to="/">
                            <img src={ require('../../assets/img/main/godiva_logomenu.png') } alt="고디바 로고" />
                        </Link>
                    </div>
                    <div className="right">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' fixedWidth/>
                        <div className="search">
                            <input type="text" />
                        </div>
                        <ul className="upmenu">
                            <li>로그인</li>
                            <li>최근 본 상품</li>
                            <li>CART</li>
                        </ul>
                    </div>
                </div>
                <div className="navi_down"></div>
                <div className="menu_group">
                    <ul className="downmenu">
                        <li className="list">
                            <Link to="/">GODIVA MENU</Link>    
                        </li>
                        <li className="list">
                            <Link to="/">ONLINE EXCLUSIVE</Link>   
                        </li>
                        <li className="list">
                            <Link to="/">NEWS＆EVENT</Link>  
                        </li>
                        <li className="list">
                            <Link to="/">ABOUT GODIVA</Link>
                        </li>
                    </ul>
                    <div className="submenu_group">
                        <ul className="submenu">
                            <div className="wrap godiva_menu">
                            <li><Link to="/">초콜릿│Chocolate</Link></li>
                            <li><Link to="/">음료│Beverage</Link></li>
                            <li><Link to="/">아이스크림│Icecream</Link></li>
                            <li><Link to="/">스낵＆디저트│Snack＆Dessert</Link></li>
                            <li><Link to="/">전체상품│Shop All</Link></li>
                            </div>
                        </ul>

                        <ul className="submenu">
                            <div className="wrap online">
                            <li><Link to="/">온라인몰│Online Shop</Link></li>
                            <li><Link to="/">시즌상품│Season Products</Link></li>
                            <li><Link to="/">컬렉션│collection</Link></li>
                            <li><Link to="/">전체상품│Shop All</Link></li>
                            </div>
                        </ul>

                        <ul className="submenu">
                            <div className="wrap newsevent">
                            <li><Link to="/">미디어│Press＆Magazine</Link></li>
                            <li><Link to="/">프로모션│Event</Link></li>
                            <li><Link to="/">공지사항│News</Link></li>
                            </div>
                        </ul>

                        <ul className="submenu">
                            <div className="wrap about">
                            <li><Link to="/">고디바 스토리│Our Story</Link></li>
                            <li><Link to="/">고디바 매장│Our Stores</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation