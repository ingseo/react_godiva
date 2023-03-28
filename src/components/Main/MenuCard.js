import React from 'react'
import { Link, Route } from "react-router-dom";

function MenuCard() {
    return (
        <Link to="/">
            <div className="boxover box1">
                <img src={ require('../../assets/img/main/menu1.jpg') } alt="골드 컬렉션" />
                <div className="contents">
                    <h4>골드 컬렉션</h4>
                    <span></span>
                    <p>화려한 디자인과 다양한 맛의 고디바 시그니처 컬렉션</p>
                </div>
                <div className="over"></div>
            </div>
        </Link>
    )
}

export default MenuCard