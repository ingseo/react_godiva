import React from 'react'
import "../../style/scss/slick.scss";
import "../../style/scss/slick-theme.scss";
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

  return (
    <Slider {...settings}>
      <div className="item active"><img src={ require('../../assets/img/main/event_slide1.jpg') } alt="슬라이드배너1" /></div>
      <div className="item"><img src={ require('../../assets/img/main/event_slide2_2.jpg') } alt="슬라이드배너2" /></div>
      <div className="item"><img src={ require('../../assets/img/main/event_slide3.jpg') } alt="슬라이드배너3" /></div>
    </Slider>
  )
}

export default SliderCompont