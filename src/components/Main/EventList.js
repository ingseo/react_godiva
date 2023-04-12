import React from 'react'

function EventList(props) {
    return (
        <ul className="list">   
            {props.listName1}
            {props.listName2}
            {props.listName3}
        </ul>
    )
}

export default EventList