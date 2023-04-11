import React from 'react'
import SubVisual from './SubVisual';
import NewsList from './NewsList';
import EventBox from './EventBox';
import '../../style/scss/newsevent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function NewsEvent() {

  //subVisual props
  const aboutSubVisual = {
    logo: <div className="miniLogo"><img src={ require('../../assets/img/sub_news/new_logo.png') } alt="미니로고" /></div>,
    type: 'Godiva with you',
    subGroup: 
      <ul className="subGroup">
        <li>NEWS</li>
        <li>EVENT</li>
      </ul>,
    under: <div className='underArrow'><img src={ require('../../assets/img/main/under_arrow.png') } alt="아래화살표" /></div>
  }

  //newsList props
  const newsList1 = {
    first: '공지',
    second: '제 24기 결산공고',
    thrid: '2020.03.27',
  }
  const newsList2 = {
    first: '공지',
    second: '[NOTICE] 신종 바이러스 관련 배송 제한 안내 공지 드립니다.',
    thrid: '2020.03.05',
  }
  const newsList3 = {
    first: '공지',
    second: '[NOTICE] 고디바 컵 아이스크림 세븐일레븐 입점',
    thrid: '2020.01.15',
  }
  const newsList4 = {
    first: '공지',
    second: '[NOTICE] 고디바 매장별 메뉴 이용 안내',
    thrid: '2020.03.27',
  }
  const newsList5 = {
    first: '84',
    second: '고디바 시즌한정 ‘치즈 폼 초콜렉사’ 출시',
    thrid: '2020.05.06',
  }
  const newsList6 = {
    first: '83',
    second: '고디바 5월 감사의 달 스페셜 혜택 안내',
    thrid: '2020.04.29',
  }
  const newsList7 = {
    first: '82',
    second: '5월 황금연휴 배송 안내',
    thrid: '2020.04.22',
  }

  return (
    <div className='newsEvent'>
      {/* visual */}
      <SubVisual {...aboutSubVisual}/>
      {/* search */}
      <div className="searchBox">
        <div className="container">
          <select className="box">
            <option value="제목">제목</option>
            <option value="내용">내용</option>
          </select>
          <div className="search">
            <input type="text" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
          </div>
        </div>
      </div>
      {/* news, event */}
      <div className='newsEventBox'>
        <div className='newsBox'>
          <div className='container'>
            <NewsList {...newsList1}/>
            <NewsList {...newsList2}/>
            <NewsList {...newsList3}/>
            <NewsList {...newsList4}/>
            <NewsList {...newsList5}/>
            <NewsList {...newsList6}/>
            <NewsList {...newsList7}/>
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
      </div>
      <div className='count'>
        <div className='btnGroup'>
          <div className="leftBtn arrowBtn">
            <img src={ require('../../assets/img/sub_news/main-slick-prev.png') } alt="왼쪽버튼" />
          </div>
          <ul className="countBtn">
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
            <img src={ require('../../assets/img/sub_news/main-slick-next.png') } alt="오른쪽튼" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsEvent