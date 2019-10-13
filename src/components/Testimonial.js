import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { tsPropertySignature } from '@babel/types'

const Testimonial = (props) => {
    return (
        <div className='testimonial'>
            <p><span className='quotes'>"</span> 
            {props.Quote}
            
            <span className='quotes'>"</span>
            <br/>
            <span className='referee'>{props.Referee}</span></p>

        </div>
    )
}

export default Testimonial