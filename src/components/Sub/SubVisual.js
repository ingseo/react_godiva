import React from 'react'

function SubVisual(props) {
    return (
        <div className="subVisual">
            <div className="text">
                {props.logo}
                <div className="title">{props.title}</div>
                <div className="type">{props.type}</div>
            </div>
            {props.subGroup}
            {props.under}
        </div>
    )
}

export default SubVisual