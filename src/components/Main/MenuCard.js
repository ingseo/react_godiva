import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";

function MenuCard(props) {
    return (
        <Link to="/">
            <div className="boxover">
                {props.img}
                {props.mImg}
                <div className="contents">
                    <h4>{props.name}</h4>
                    <span></span>
                    <p>{props.value}</p>
                </div>
                <div className="over"></div>
            </div>
        </Link>
    )
}

export default MenuCard