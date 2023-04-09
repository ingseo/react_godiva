import React from 'react'
import SubVisual from './SubVisual';
import NewsList from './NewsList';
import EventBox from './EventBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function NewsEvent() {

  //subVisual props
  const aboutSubVisual = {
    logo: <div className="miniLogo"><img src={ require('../../assets/img/sub_news/new_logo.png') } alt="미니로고" /></div>,
    type: 'Godiva with you',
    subGroup: 
      <ul className="menuGroup">
        <li>NEWS</li>
        <li>EVENT</li>
      </ul>,
    under: <div><img src={ require('../../assets/img/main/under_arrow.png') } alt="아래화살표" /></div>
  }


  return (
    <div className='newsEvent'>
      {/* visual */}
      <SubVisual {...aboutSubVisual}/>
      {/* search */}
      <div className="seachBox">
        <div className="container">
          <select name="box">
            <option value="제목">제목</option>
            <option value="내용">내용</option>
          </select>
          <div className="seach">
            <input type="text" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
          </div>
        </div>
      </div>
      {/* news, event */}
      <div className='newEventBox'>
        <div className='newsBox'>
          <div className='container'>
            <NewsList />
            <NewsList />
            <NewsList />
            <NewsList />
            <NewsList />
            <NewsList />
            <NewsList />
          </div>
        </div>
        <div className='eventBox'>
          <div className='container'>
            <EventBox />
            <EventBox />
            <EventBox />
            <EventBox />
          </div>
        </div>
        <div className='count'>
          <div className='btnGroup'>
            <div className="leftBtn arrowBtn">
              <img src={ require('../../assets/img/sub_news/main-slick-prev.png') } alt="왼쪽버튼" />
            </div>
            <ul className="count-btn">
              <li className="cBtn">1</li>
              <li className="cBtn">2</li>
              <li className="cBtn">3</li>
              <li className="cBtn">4</li>
              <li className="cBtn">5</li>
              <li className="cBtn">6</li>
              <li className="cBtn">7</li>
              <li className="cBtn">8</li>
            </ul>
            <div className="rightBtn arrowBtn">
              <img src={ require('../../assets/img/sub_news/main-slick-prev.png') } alt="오른쪽튼" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsEvent