import React from 'react'
import Navigation from '../components/Common/Navigation'
import MobileNavi from '../components/Common/MobileNavi'
import NewsEvent from '../components/Sub/NewsEvent'
import Footer from '../components/Common/Footer'

function NewsPage() {
    return (
        <>
            <Navigation />
            <MobileNavi />
            <NewsEvent />
            <Footer />
        </>
    )
}

export default NewsPage