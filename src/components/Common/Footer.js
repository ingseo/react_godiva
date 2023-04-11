import React from 'react'
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../style/scss/footer.scss'

import { faPhone, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <ul>
                            <h5>SITEMAP</h5>
                            <span></span>
                            <li><Link to="#">사이트맵</Link></li>
                            <li><Link to="#">개인정보 취급방침</Link></li>
                            <li><Link to="#">사업자 정보</Link></li>
                            <li><Link to="#">마케팅 제휴/매장 오픈</Link></li>
                            <li><Link to="#">채용정보</Link></li>
                        </ul>
                        <ul>
                            <h5>CUSTOMER SERVICE</h5>
                            <span></span>
                            <li><Link to="#">고객센터</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">1:1 문의</Link></li>
                            <li><Link to="#">주문 / 배송 / 대량구매</Link></li>
                        </ul>
                        <ul>
                            <h5>OPENING TIME</h5>
                            <span></span>
                            <li><FontAwesomeIcon icon={faPhone} className="icon" /> 평일 AM 10:00 - PM 5:00</li>
                            <li><FontAwesomeIcon icon={faClockRotateLeft} className="icon" /> TEL. 080-827-7700</li>
                            <li>점심시간 PM 12:00 - 2:00</li>
                            <li>토, 일, 공휴일 휴무</li>
                        </ul>
                        <ul>
                            <h5>CONNECT WITH US</h5>
                            <span></span>
                            <div className="iconGroup">
                                <li>
                                    <a href="https://www.facebook.com/GODIVAKR/">
                                        <img src={ require('../../assets/img/main/icon_facebook.png') } alt="페이스북" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/godivakorea/?hl=ko">
                                        <img src={ require('../../assets/img/main/icon_insta.png') } alt="인스타그램" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://pf.kakao.com/_qxgxnlxl">
                                        <img src={ require('../../assets/img/main/icon_chat.png') } alt="카카오톡" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCFB6ZUKG6l6pB0wvDvxjftg">
                                        <img src={ require('../../assets/img/main/icon_utb.png') } alt="유튜브" />
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="adress">
                        <p>(주)비에스케이코퍼레이션 ㅣ 대표이사 : 박종호 ㅣ서울시 강남구 학동로 401 13층 | 개인정보관리책임자 : 박종호</p>
                        <p>전화번호 080-827-7700 (수신자 부담) ㅣ 팩스번호 02-759-0788 ㅣ E-MAIL info@godiva.kr ㅣ 문의시간 오전 10시-오전12시, 오후2시- 오후5시</p>
                        <p>공정거래위원회 고시 제 2000-1호에 따른 사업자등록번호 116-81-62784</p>
                        <p>통신판매업신고번호 제 2010-서울강남-02017호 3 ㅣ 사업자정보확인</p>
                    </div> 
                </div>
                <input type="button" value="▲" className="top" />     
            </div>
        </div>
    )
}

export default Footer