import React from 'react'
import Navigation from '../components/Common/Navigation'
import MobileNavi from '../components/Common/MobileNavi'
import Contents from '../components/Main/Contents'
import Footer from '../components/Common/Footer'

function MainPage() {
    return (
    <div>
        <Navigation />
        <MobileNavi />
        <Contents />
        <Footer />
    </div>
    )
}

export default MainPage