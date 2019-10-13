import React from 'react'
import ReactCardFlip from 'react-card-flip'
import mwLogo from '../img/mw-logo.png'
import TechStack from './TechStack'



const Summary = () => {
    return (
        
        <div className='summary-component'>
            <div className='contact-me-box'>



                 

            </div>

            <div className='name-logo-job'>
                <img src={mwLogo} id='mw-logo'/>
                <p id='name-job'>MOHAMMED WILKINSON 
                    <br/>
                    FULL STACK WEB DEVELOPMENT
                </p>
               

            </div>
            
            <div className='summary'>
            <p id='summary-p'>
                A full stack junior devloper using React, Express.js, Node.js as well as
                MySQL with a passion and love for coding and building things that serve people
                since 2019.
            </p>
            <p id='availability-p'>
                Available for remote or Merseyside-based projects - I can work independently or collaboratively
                with a team. As well as being honest, transparent and easy to work with, I am passionate about helping people and strive
                to be a tech developer ready for any challenge.

            </p>

            </div>

            <TechStack />

            


        </div>
        
    )
}

export default Summary