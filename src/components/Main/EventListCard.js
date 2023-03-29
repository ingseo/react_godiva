import React from 'react'

function EventListCard(props) {

  const {img} = props;
  const {back} = props;

  return (
    <div className="card">    
        <div className="wrap">
            <div className="front">
                <img src={ require('../../assets/img/main/event1.png') } alt="2020 스프링 앙샹뜨 컬렉션" /></div>
                <div className="back">2020 스프링 앙샹뜨 컬렉션<br />Spring Enchanteur Collection
                <span>바로가기</span>
            </div>
        </div>
    </div>
  )
}

export default EventListCard