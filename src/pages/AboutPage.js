import React from 'react'
import Navigation from '../components/Common/Navigation'
import MobileNavi from '../components/Common/MobileNavi'
import AboutGodiva from '../components/Sub/AboutGodiva'
import Footer from '../components/Common/Footer'

function AboutPage() {
    return (
        <div className='subPage'>
            <Navigation />
            <MobileNavi />
            <AboutGodiva />
            <Footer />
        </div>
    )
}

export default AboutPage