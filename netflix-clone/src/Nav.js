import React, { useState } from 'react'
import './Nav.css'
import { useEffect } from 'react'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY> 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt= "Netflix Logo"
            />

            <img className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt= "User Logo"
            />
        </div>
    )
}

export default Nav
