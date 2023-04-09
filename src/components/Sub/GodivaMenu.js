import React from 'react'
import { Link, Route } from "react-router-dom";
import SubVisual from './SubVisual';
import SubBanner from './SubBanner';
import ContentsBox from './ContentsBox';
import '../../style/scss/godivamenu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function GodivaMenu() {

  //subVisual props
  const godivaMenuSubVisual = {
    logo: <p>GODIVA</p>,
    title: 'MENU',
    type: 'Premium chocolate for you',
    subGroup: 
    <ul className="subGroup">
      <Link to="/"><li>초콜릿</li></Link>
      <Link to="/"><li>음료</li></Link>
      <Link to="/"><li>아이스크림</li></Link>
      <Link to="/"><li>스낵＆디저트</li></Link>
    </ul>,
  }

  //subBanner props
  const doubleBanner1 = {
    class: "subBanner double hot",
    bannerText: "What's HOT",
    icon: <FontAwesomeIcon icon={faCircleArrowRight} className="icon"/>,
  }
  const doubleBanner2 = {
    class: "subBanner double today",
    bannerText: <>MD추천<br />오늘의 초콜릿 보러가기</>,
    img: <img src={ require('../../assets/img/sub_menu/choco.png') } alt="오늘의초콜릿" />,
    icon: <FontAwesomeIcon icon={faCircleArrowRight} className="icon"/>,
  }

  //contentBox props
  const ContentBox1 = {
    class: 'list choco',
    title: '초콜릿',
    type: 'Chocolate',
    ex: '다양한 풍미의 고급스러운 초콜릿',
    btn: '자세히보기',
  }
  const ContentBox2 = {
    class: 'list drink',
    title: '음료',
    type: 'Drink',
    ex: <>초콜릿의 맛과 향을 배가시켜주는 <br /> 커피와 코코아, 그리고 초콜렉사</>,
    btn: '자세히보기',
  }
  const ContentBox3 = {
    class: 'list ice',
    title: '아이스크림',
    type: 'IceCream',
    ex: <>깊은 초콜릿과 소프트아이스크림의 <br /> 달콤하고 부드러운 맛의 조화</>,
    btn: '자세히보기',
  }
  const ContentBox4 = {
    class: 'list snack',
    title: '스낵＆디저트',
    type: 'Snack＆Dessert',
    ex: '어디에서도 맛볼 수 없는 환상적인 초콜릿 디저트',
    btn: '자세히보기',
  }

  return (
    <div className='godivaMenu'>
      {/* visual */}
      <SubVisual {...godivaMenuSubVisual}/>
      {/* banner */}
      <div className='miniBanner'>
        <SubBanner {...doubleBanner1} />
        <SubBanner {...doubleBanner2} />
      </div>
      {/* list */}
      <div className='menuList'>
        <ContentsBox {...ContentBox1}/>
        <ContentsBox {...ContentBox2}/>
        <ContentsBox {...ContentBox3}/>
        <ContentsBox {...ContentBox4}/>
      </div>
    </div>
  )
}

export default GodivaMenu