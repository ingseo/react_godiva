import React from 'react'

function SubTitle(props) {

  const {title} = props;
  const {type} = props;

  return (
    <div className="text">
        <div className="point"><span></span></div>
        <div className="title">{title}</div>
        <div className="type">{type}</div>
    </div>
  )
}

export default SubTitle