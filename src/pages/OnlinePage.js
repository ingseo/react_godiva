import React from 'react'
import Navigation from '../components/Common/Navigation'
import MobileNavi from '../components/Common/MobileNavi'
import OnlineExclusive from '../components/Sub/OnlineExclusive'
import Footer from '../components/Common/Footer'

function OnlinePage() {
    return (
        <>
            <Navigation />
            <MobileNavi />
            <OnlineExclusive />
            <Footer />
        </>
    )
}

export default OnlinePage