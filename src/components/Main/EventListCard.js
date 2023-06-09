import React from 'react'

function EventListCard(props) {
  return (
    <div className={`card ${props.cardName}`}>    
        <div className="wrap">
            <div className="front">
                {props.img}
            </div>
            <div className="back">
              {props.back}
              <span>바로가기</span>
            </div>
        </div>
    </div>
  )
}

export default EventListCard