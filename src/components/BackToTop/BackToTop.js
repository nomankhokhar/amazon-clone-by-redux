import React, { useEffect, useState } from 'react'
import "./BackToTop.css";


const BackToTop = () => {
    const [inVisible, setInVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setInVisible(true);
        }
        else {
            setInVisible(false);
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll",toggleVisibility);
        };
    }, []);


    return (
        <div className="scroll-to-top">
            {inVisible && (
                <div onClick={scrollToTop} className="back-top-container">
                    Back To Top
                </div>
            )}
        </div>
    )
}

export default BackToTop