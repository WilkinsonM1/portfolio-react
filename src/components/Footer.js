import React from 'react'
import profilePic from '../img/profile-pic.jpg'
import emailPic from '../img/social-media/email.jfif'

const Footer = () => {
    return (
        <div className="footer">
            <img src={profilePic} />
            <p>LET'S WORK TOGETHER <br/>
            HAVE A PROJECT IN MIND? <br/>
            CHECK MY AVAILABILITY <br/>
            I RESPOND QUICKLY
            
            </p>

            <img src={emailPic} id='email-pic'/>
            <p>wilkinsonm302@gmail.com</p>            
        </div>
    )
}

export default Footer