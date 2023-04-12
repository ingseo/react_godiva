import React from 'react'

function CountBox() {
    return (
        <div className='count'>
            <div className='btnGroup'>
                <div className="leftBtn arrowBtn">
                    <img src={ require('../../assets/img/sub_news/main-slick-prev.png') } alt="왼쪽버튼" />
                </div>
                <ul className="countBtn">
                    <li className="cBtn">1</li>
                    <li className="cBtn">2</li>
                    <li className="cBtn">3</li>
                    <li className="cBtn">4</li>
                    <li className="cBtn">5</li>
                    <li className="cBtn">6</li>
                    <li className="cBtn">7</li>
                    <li className="cBtn">8</li>
                </ul>
                <div className="rightBtn arrowBtn">
                    <img src={ require('../../assets/img/sub_news/main-slick-next.png') } alt="오른쪽튼" />
                </div>
            </div>
        </div>
    ) 
}

export default CountBox