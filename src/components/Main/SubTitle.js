import React from 'react'

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