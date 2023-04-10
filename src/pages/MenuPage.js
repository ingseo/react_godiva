import React from 'react'
import Navigation from '../components/Common/Navigation'
import MobileNavi from '../components/Common/MobileNavi'
import GodivaMenu from '../components/Sub/GodivaMenu'
import Footer from '../components/Common/Footer'


function MenuPage() {
    return (
        <div className='subPage menuPage'>
            <Navigation />
            <MobileNavi />
            <GodivaMenu />
            <Footer />
        </div>
    )
}

export default MenuPage