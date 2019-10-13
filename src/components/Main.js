import React from 'react'
import ReactCardFlip from 'react-card-flip'
import Summary from './Summary'
import CommonServices from './CommonServices'
import Testimonial from './Testimonial'
import WorkExperience from './WorkExperience'
import MyValues from './MyValues'
import Footer from './Footer'

const Main = () => {
    return (
        <div className='main'>
            <div className='summary'>
                <Summary />

             </div>

            <div className='common-services'>
                <CommonServices />

            </div>
            <hr/>

            <div className='testimonials'>
                <div><h3>Testimonials</h3></div>
                
                <div className='testimonials-box'> <WorkExperience />
                <Testimonial Referee='Someone' Quote="Mohammed is an energetic, thoughtful and highly resourceful tech developer who would be an asset in anyone's team" />
                </div>
               

            </div>
            <hr/>

            <div className='selected-work'>

            </div>
           

            <div className='my-values'>
                <MyValues />

            </div>
            <hr/>

            <div className='footer'>
                <Footer />

            </div>

        </div>
        
    )
}

export default Main