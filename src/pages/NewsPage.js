import React from 'react'
import Navigation from '../components/Common/Navigation'
import MobileNavi from '../components/Common/MobileNavi'
import NewsEvent from '../components/Sub/NewsEvent'
import Footer from '../components/Common/Footer'

function NewsPage() {
    return (
        <div className='subPage newsPage'>
            <Navigation />
            <MobileNavi />
            <NewsEvent />
            <Footer />
        </div>
    )
}

export default NewsPage