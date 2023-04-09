import React from 'react'
import { Link, Route } from "react-router-dom";
import SubVisual from './SubVisual';
import SubBanner from './SubBanner';
import ContentsBox from './ContentsBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function AboutGodiva() {

    //subVisual props
    const aboutSubVisual = {
        logo: <p>GODIVA</p>,
        title: 'ABOUT GODIVA',
        type: 'A special gift for loved ones',
        subGroup: 
        <ul className="subGroup">
        <Link to="/"><li>고디바 스토리</li></Link>
        <Link to="/"><li>매장 안내</li></Link>
        </ul>,
    }

    //subBanner props
    const aboutBanner = {
        class: "subBanner off",
        bannerText: "코엑스 디저트페어 안내",
        icon: <FontAwesomeIcon icon={faCircleArrowRight} className="icon"/>,
    }

    //contentBox props
    const ContentBox1 = {
        class: 'list story',
        title: '고디바 스토리',
        type: 'Our Godiva',
        ex: '고디바의 과거부터 현재까지 이모저모',
        btn: '이야기 보러가기',
    }
    const ContentBox2 = {
        class: 'list shop',
        title: '매장 안내',
        type: 'Our Stores',
        ex: <>가로수길 1호점부터 시작된 <br /> 총 37군데 지점의 브랜드 스토어</>,
        btn: '전체매장 보러가기',
    }

    return (
        <div className='aboutGodiva'>
            {/* visual */}
            <SubVisual {...aboutSubVisual}/>
            {/* banner */}
            <div className='miniBanner'>
                <SubBanner {...aboutBanner} />
            </div>
            {/* list */}
            <div className='menuList'>
                <ContentsBox {...ContentBox1}/>
                <ContentsBox {...ContentBox2}/>
            </div>
        </div>
    )
}

export default AboutGodiva