import React from 'react'
import linkedIn from '../img/social-media/linkedin.jfif'
import gitHub from '../img/social-media/github.jfif'
import ReactCardFlip from 'react-card-flip'

const ContactMe = () => {
    return (
        <div className='contact-me'>
            <h1>
                <span id='span-invitation'>Don't be a stranger</span> just say hello.
            </h1>
            <div className='contact-info-box'>
                <div className='contact-info'>
                    <p>
                        Feel free to get in touch with me. I am always open to discussing new projects , creative ideas or
                        opportunities to be part of your visions.
                    </p>

                    <div className='email-box'>
                        
                        <p><b>Need help</b> <br/>wilkinsonm302@gmail.com</p>

                    </div>

                    <div className='number-box'>
                        
                        <p><b>Feel like talking</b> <br/>+44 7942250766</p>

                    </div>

                    <div className='social-media-icons-contact'>
                        <a href='https://www.linkedin.com/in/mohammed-wilkinson-0a44b1b9/'>
                            <img src={linkedIn} alt='linkedin-icon'  />
                        
                        </a>

                        <a href='https://github.com/WilkinsonM1'>
                            <img src={gitHub} alt='github-icon'/>
                        </a>
                        

                    </div>

                </div>
                <div className='contact-form'>

                </div>

            </div>

        </div>
    )
}

export default ContactMe

