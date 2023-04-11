import React from 'react'
import { Link } from "react-router-dom";
import SubVisual from './SubVisual';
import SubBanner from './SubBanner';
import ContentsBox from './ContentsBox';
import '../../style/scss/onlineexclusive.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function OnlineExclusive() {

  //subVisual props
  const OnlineSubVisual = {
    logo: <p>GODIVA</p>,
    title: <><span>ONLINE</span><br /><span>EXCLUSIVE</span></>,
    type: 'A special gift for loved ones',
    subGroup: 
    <ul className="subGroup">
      <Link to="#"><li>전체 상품</li></Link>
      <Link to="#"><li>시즌 상품</li></Link>
      <Link to="#"><li>컬렉션</li></Link>
    </ul>,
  }

  //subBanner props
  const offShopBanner = {
    class: "subBanner off",
    bannerText: "오프라인 매장도 찾아보기",
    icon: <FontAwesomeIcon icon={faCircleArrowRight} className="icon"/>,
  }
  
  //contentBox props
  const ContentBox = {
    class: 'list online',
    title: '온라인샵',
    type: 'Online Shop',
    ex: <>온라인 단독으로 구성된 특별한 상품을 <br />지금 만나보세요</>,
    btn: '전체상품 보러가기',
  }

  return (
    <div className='onlineExclusive'>
      {/* visual */}
      <SubVisual {...OnlineSubVisual}/>
      {/* banner */}
      <div className='miniBanner'>
        <SubBanner {...offShopBanner}/>
      </div>
      {/* list */}
      <div className='menuList'>
        <ContentsBox {...ContentBox}/>
      </div>
      {/* collection */}
      <div className='collection'>
        <div className="wrap">
          <div className="left">
            <div className="rotate">
              <div className="bg"></div>
            </div>
          </div>
          <div className="right">
            <div className="rotate">
              <div className="bg"></div>
            </div>
          </div>
        </div>
        <div className="text">
          <p className="p1">What's NOW?</p>
          <p className="p2"></p>
          <p className="p3"></p>
        </div>
      </div>
    </div>
  )
}

export default OnlineExclusive