import React from 'react'
import "../../style/scss/slick.scss";
import "../../style/scss/slick-theme.scss";
import "../../style/scss/slider.scss"
import Slider from "react-slick";

function SliderCompont() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 3000, 	
  };

  const settingsRegular = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 3000, 	
    vertical: true,
  };

  return (
    <>
      <Slider {...settings} className="mainSlider">
        <div><img src={ require('../../assets/img/main/event_slide1.jpg') } alt="슬라이드배너1" /></div>
        <div><img src={ require('../../assets/img/main/event_slide2_2.jpg') } alt="슬라이드배너2" /></div>
        <div><img src={ require('../../assets/img/main/event_slide3.jpg') } alt="슬라이드배너3" /></div>
      </Slider>

      <Slider {...settings} className="mobileSlider">
        <div><img src={ require('../../assets/img/main/m_event1.jpg') } alt="슬라이드배너1" /></div>
        <div><img src={ require('../../assets/img/main/m_event2.jpg') } alt="슬라이드배너2" /></div>
        <div><img src={ require('../../assets/img/main/m_event3.jpg') } alt="슬라이드배너3" /></div>
      </Slider>

      <div className="regularEvent">
        <div className="container">
            <div className="title"><span>Regular</span><br /><span>events</span></div>
            <Slider {...settingsRegular} className="regularSlider">
              <ul className="event">
                  <li><span>#고디바챌린지 </span>#해시태그이벤트</li> 
                  <li>#카카오톡친구추가 <span>#무료배송쿠폰</span></li>
              </ul>
              <ul className="event">
                  <li>#고디바신규가입 <span>#5000원쿠폰</span></li>
                  <li>#고디바회원가입 <span>#1000포인트적립</span> #개이득</li>
              </ul>
              <ul className="event">
                  <li><span>#3만원무료배송 </span> #친구선물 #가족선물</li> 
                  <li>#애인선물 #사실내선물 <span>#맛스타그램</span></li>
              </ul>
            </Slider>
        </div>
        <Slider {...settingsRegular} className="mContainer">
          <li><span>#고디바챌린지 </span> #해시태그이벤트</li> 
          <li>#카카오톡친구추가 <span> #무료배송쿠폰</span></li>
          <li>#고디바신규가입 <span> #5000원쿠폰</span></li>
          <li>#고디바회원가입 <span> #1000포인트적립</span> #개이득</li>
          <li><span>#3만원무료배송 </span> #친구선물 #가족선물</li> 
          <li>#애인선물 #사실내선물 <span> #맛스타그램</span></li>
        </Slider>
      </div>
    </>
  )
}

export default SliderCompont