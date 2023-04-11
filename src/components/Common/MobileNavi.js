import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../style/scss/mnavi.scss';

import { 
    faCartShopping, 
    faEye, 
    faRotateLeft, 
    faMagnifyingGlass,
    faRightToBracket
} from '@fortawesome/free-solid-svg-icons';

function MobileNavi() {
    return (
        <div>
            <div className="mNavi">
                <div className="fixed">
                    <div className="left">
                        <ul>
                            <li><FontAwesomeIcon icon={faCartShopping} className="icon"/></li>
                            <li><FontAwesomeIcon icon={faEye} className="icon"/></li>
                        </ul>
                    </div>
                    <div className="logo">
                    <Link to="/"><img src={ require('../../assets/img/main/logo_footer.png') } alt="고디바 로고" /></Link>
                    </div>
                    <div className="mBtn">
                        <div className="menuBtn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mMenu">
                <div className="mMainMenu">
                    <ul className="downMenu">
                        <li className="list godivaManu">GODIVA MENU</li>
                        <li className="list online">ONLINE EXCLUSIVE</li>
                        <li className="list newsEvent">NEWS＆EVENT</li>
                        <li className="list about">ABOUT GODIVA</li>
                    </ul>
                </div>
                <div className="mSubmenu">
                    <ul className="subMenu">
                            <li><Link to="/menu">초콜릿│Chocolate</Link></li>
                            <li><Link to="/menu">음료│Beverage</Link></li>
                            <li><Link to="/menu">아이스크림│Icecream</Link></li>
                            <li><Link to="/menu">스낵＆디저트│Snack＆Dessert</Link></li>
                            <li><Link to="/menu">전체상품│Shop All</Link></li>
                        </ul>
                    <ul className="subMenu">
                            <li><Link to="/online">온라인몰│Online Shop</Link></li>
                            <li><Link to="/online">시즌상품│Season Products</Link></li>
                            <li><Link to="/online">컬렉션│collection</Link></li>
                            <li><Link to="/online">전체상품│Shop All</Link></li>
                        </ul>
                    <ul className="subMenu">
                            <li><Link to="/news">미디어│Press＆Magazine</Link></li>
                            <li><Link to="/news">프로모션│Event</Link></li>
                            <li><Link to="/news">공지사항│News</Link></li>
                        </ul>
                    <ul className="subMenu">
                            <li><Link to="/about">고디바 스토리│Our Story</Link></li>
                            <li><Link to="/about">고디바 매장│Our Stores</Link></li>
                        </ul>
                </div>
                <div className="subBottom">
                    <ul>
                        <li><FontAwesomeIcon icon={faRotateLeft} className="icon"/><br /> BACK</li>
                        <li><FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/><br /> SEARCH</li> 
                        <li><FontAwesomeIcon icon={faRightToBracket} className="icon"/><br /> LOGIN</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileNavi