import React from 'react'
import '../../style/scss/text.scss'

function SubTitle(props) {

  return (
    <div className="text">
        <div className="point"><span></span></div>
        <div className="title">{props.title}</div>
        <div className="type">{props.type}</div>
    </div>
  )
}

export default SubTitle