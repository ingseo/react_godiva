import React, { useEffect, useState } from 'react'

function TopBtn() {

    //top button
    const [showButton, setShowButton] = useState(false);
        
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return showButton && (
        <input type="button" value="▲" className="top" onClick={scrollToTop}/>  
    )
}

export default TopBtn