import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import SliderComponent from './SliderComponent';
import SubTitle from './SubTitle';
import EventList from './EventList';
import EventListCard from './EventListCard';
import MenuCard from './MenuCard';
import InstagramCard from './InstagramCard';
import { Parallax } from 'react-parallax';

import '../../style/scss/mainpage.scss'


function Contents() {
    
    //subTitle props
    const titleProps1 = {
        title: 'EVENT LIST',
        type: 'Sweet pleasure',
    }
    const titleProps2 = {
        title: <>TODAY'S<br/>CHOCOLATE</>,
        type: 'Chocolate with love',
    }

    //event props
    const eventProps1 = {
        img: <img src={ require('../../assets/img/main/event1.png') } alt="2020 스프링 앙샹뜨 컬렉션" />,
        back: <>2020 스프링 앙샹뜨 컬렉션<br />Spring Enchanteur Collection</>,
    }
    const eventProps2 = {
        img: <img src={ require('../../assets/img/main/event2.png') } alt="고디바 회원만의 특별한 혜택" />,
        back: <>고디바 회원만의 특별한 혜택<br />GODIVA MAMBERSHIP</>,
    }
    const eventProps3 = {
        img: <img src={ require('../../assets/img/main/event3.png') } alt="프리미엄 컵 아이스크림" />,
        back: <>프리미엄 컵 아이스크림<br />Premium Cup Ice Cream</>,
    }

    //godiva menu props
    const menuProps1 = {
        img: <img src={ require('../../assets/img/main/menu1.jpg') } alt="골드 컬렉션" />,
        name: '골드 컬렉션', 
        value: '화려한 디자인과 다양한 맛의 고디바 시그니처 컬렉션',
    }
    const menuProps2 = {
        img: <img src={ require('../../assets/img/main/menu2.jpg') } alt="큐브 트뤼프" />,
        name: '큐브 트뤼프', 
        value: '다양한 식감과 뛰어난 풍미의 고급스러운 초콜릿',
    }
    const menuProps3 = {
        img: <img src={ require('../../assets/img/main/menu3.jpg') } alt="음료＆디저트"  className='desktop'/>,
        mImg: <img src={ require('../../assets/img/main/m_menu3.jpg') } alt="음료＆디저트"  className='mobile'/>,
        name: '음료＆디저트', 
        value: '고디바 프리미엄 디저트와 스페셜티, 원두 로스팅 커피 그리고 코코아',
    }
    const menuProps4 = {
        img: <img src={ require('../../assets/img/main/menu4.jpg') } alt="아이스크림" className='desktop'/>,
        mImg: <img src={ require('../../assets/img/main/m_menu4.jpg') } alt="아이스크림"  className='mobile'/>,
        name: '아이스크림', 
        value: '부드러운 텍스처의 깊고 진한 아이스크림',
    }
    const menuProps5 = {
        img: <img src={ require('../../assets/img/main/menu5.jpg') } alt="초콜렉사" className='desktop'/>,
        mImg: <img src={ require('../../assets/img/main/m_menu5.jpg') } alt="초콜렉사" className='mobile'/>,
        name: '초콜렉사', 
        value: '초콜릿을 직접갈아만든 고디바 리얼 초콜릿 음료',
    }

    //instagram props
    const instaProps1 = {
        link: "https://www.instagram.com/godivakorea/?hl=ko",
        img: <img src={ require('../../assets/img/main/insta1.jpg') } alt="인스타그램" />,
        type: '#고디바 #고디바초콜릿 #코디바화이트데이 #화이트데이초콜릿 #화이트데이 #완벽한고백 #화이트데이 선물 #여자친구선물 #고디바퍼펙트페어링컬렉션 #godiva #godivachocolate #WonderAwaits',
        mType: '#고디바화이트데이',
    }
    const instaProps2 = {
        link: "https://www.instagram.com/godivakorea/?hl=ko",
        img: <img src={ require('../../assets/img/main/insta2.jpg') } alt="인스타그램" />,
        type: '#고디바 #고디바초콜릿 #고디바발렌타인데이 #발렌타인데이초콜릿 #발렌타인데이 #발렌타인데이선물 #남자친구선물 선물 #남자친구선물 #고디바크로니클컬렉션 #godiva #godivachocolate #WonderAwaits',
        mType: '#고디바발렌타인데이',
    }
    const instaProps3 = {
        link: "https://www.instagram.com/godivakorea/?hl=ko",
        img: <img src={ require('../../assets/img/main/insta3.jpg') } alt="인스타그램" />,
        type: '#고디바 #고디바골드컬렉션 #프리미엄벨기에초콜릿 #godiva #godivachocolate',
        mType: '#고디바골드컬렉션',
    }
    const instaProps4 = {
        link: "https://www.instagram.com/godivakorea/?hl=ko",
        img: <img src={ require('../../assets/img/main/insta4.jpg') } alt="인스타그램" />,
        type: '#godiva Our Signature Coffee Blend is made from perfectly roasted Arabica beans, sourced from thr finest growing regions in the world. Treat yourself to its exceptional, full-bodied flavor at any GODIVA Cafe.',
        mType: '#godivacafe',
    }
    const instaProps5 = {
        link: "https://www.instagram.com/godivakorea/?hl=ko",
        img: <img src={ require('../../assets/img/main/insta5.jpg') } alt="인스타그램" />,
        type: '고디바가 벨기에 왕실 인증 초콜릿 브랜드로서 자랑스러운 50주년을 맞이하게 되었습니다! 왕실 인증 브랜드로서 50주년은 벨기에 최고의 독창성과 정교한 장인의 솜씨를 세계에 선사하겠다는 고디바의 신념을 성공적으로 이뤄왔다는 것을 의미합니다.',
        mType: '#GODIVA50주년',
    }
    const instaProps6 = {
        link: "https://www.instagram.com/godivakorea/?hl=ko",
        img: <img src={ require('../../assets/img/main/insta6.jpg') } alt="인스타그램" />,
        type: '@godiva NEW GODIVA Cube Truffles. Four luxurious layers of flavor. Exquisite inside ＆ out.',
        mType: '#CubeTruffles',
    }
    const instaProps7 = {
        link: "https://www.instagram.com/godivakorea/?hl=ko",
        img: <img src={ require('../../assets/img/main/insta7.jpg') } alt="인스타그램" />,
        type: '@godiva The best way to celebrate #NationalStrawberryDay ? By covering them in GODIVA chocolate. Check out our stories for a special! treat!',
        mType: '#StrawberryDay',
    }

    //email
    const [hover, setHover] = useState(false);
    const emailMouseOver = () => {
        setHover(true);
    }
    const emailMouseOut = () => {
        setHover(false);
    }


    return (
        <>
            <SliderComponent />

            {/* 초콜렛 배경 */}
            <Parallax 
                className="chocoBg" 
                strength={500} 
                bgImage={require('../../assets/img/main/choco_bg2.png')}
            >

                {/* event */}
                <div className="event">
                    <div className="container">
                        <div className="left">
                            <SubTitle {...titleProps1}/>
                            <EventList />
                        </div>
                        <div className="right">
                            <div className="cardGroup">
                                <div className="card logo">
                                    <div className="wrap logo">
                                        <img src={ require('../../assets/img/main/event_imegeLogo.png') } alt="고디바 로고" /> 
                                    </div>
                                </div>
                                <EventListCard {...eventProps1}/>
                                <EventListCard {...eventProps2}/>
                                <EventListCard {...eventProps3}/>
                                <EventList />
                            </div>
                        </div>            
                    </div>
                </div>

                {/* today's chocolate */}
                <div className="today">
                    <div className="container">
                        <div className="left">
                            <SubTitle {...titleProps2}/>
                        </div>
                        <input type="button" className="go" value="확인하기" />
                        <div className="right">
                            <div className="choco"><img src={ require('../../assets/img/main/chocolate-01.png') } alt="Tourbillon Ⅱ" /></div>
                            <div className="contents">
                                <div className="name">Tourbillon Ⅱ</div>
                                <div className="ex">카카오 85%의 다크 초콜릿 가나슈가 들어간 다크초콜릿. 고디바의 시그니처 제품인 골드 컬렉션을 보다 더 모던하고 정교하게 업그레이드한 골드 디스커버리 제품.</div>
                                <input type="button" className="btnMore" value="MORE" />
                            </div>   
                        </div>
                    </div>
                </div>

                {/* godiva menu */}
                <div className="gMenu">
                    <div className="container">
                        <div className="box">
                            <MenuCard {...menuProps1}/>
                            <MenuCard {...menuProps2}/>
                            <Link to="/">
                            <div className="boxover menuTitle">
                                <span>G</span>
                                <span>O</span>
                                <span>D</span>
                                <span>I</span>
                                <span>V</span>
                                <span>A</span>
                                <span> </span>
                                <span>M</span>
                                <span>E</span>
                                <span>N</span>
                                <span>U</span>
                            </div>
                            </Link>
                            <MenuCard {...menuProps3}/>
                            <MenuCard {...menuProps4}/>
                            <MenuCard {...menuProps5}/>
                        </div>
                    </div>
                </div>
            </Parallax>

            {/* 매장배너*/}
            <div className="store">
                <Link to="/">
                    <div className="container">
                        <div className="iceImg"><img src={ require('../../assets/img/main/ice.png') } alt="아이스크림" /></div>
                        <div className="text">
                            <div className="title"><span>매장에서만 만날 수 있는 </span>달콤한 맛</div>
                            <div className="type">Sweet Place</div>
                        </div>
                        <input type="button" value="매장찾기" />
                    </div>
                </Link>
            </div>

            {/* 인스타그램 */}
            <div className="insta">
                <div className="instaGroup">
                    <InstagramCard {...instaProps1}/>
                    <InstagramCard {...instaProps2}/>
                    <div className="box colorBox">
                        <div>SHOW US<br />HOW YOU<br />SHARE<br />THE LOVE<br />#GODIVA</div>
                    </div>
                    <InstagramCard {...instaProps3}/>
                    <InstagramCard {...instaProps4}/>
                    <InstagramCard {...instaProps5}/>
                    <InstagramCard {...instaProps6}/>
                    <InstagramCard {...instaProps7}/>
                    <div className="box colorBox">
                        <div>#GODIVA<br />#LOVESTAGRAM<br /></div>
                    </div>
                </div>
            </div>

            {/* email */}
            <div className="email">
                <div className="container">
                    <input placeholder="Type to your e-mail adress" />
                    <div className="sign">
                        <input type="submit" value="sign" onMouseEnter={emailMouseOver} onMouseLeave={emailMouseOut}/>
                        <div><span className={`subMenu ${hover ? 'mouseOver' : 'mouseOut'}`}></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contents