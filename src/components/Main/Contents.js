import React from 'react'
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SliderComponent from './SliderComponent';
import '../../style/scss/mainpage.scss'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Contents() {
    return (
        <>
            <SliderComponent />
        </>
    )
}

export default Contents