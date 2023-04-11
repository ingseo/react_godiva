import React from 'react'
import { Link } from "react-router-dom";

function NewsList(props) {
    return (
        <div className="row">
            <span className="first">{props.first}</span>
            <Link to="#"><span className="second">{props.second}</span></Link>
            <span className="thrid">{props.thrid}</span>
        </div>
    )
}

export default NewsList