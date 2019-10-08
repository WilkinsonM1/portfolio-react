import React from 'react'
import ReactCardFlip from 'react-card-flip'

const Project = (props) => {
    return (
        <div className="project">
           <div><img src={props.source} alt={props.alt}/>
           </div>
            <div>
            <h3>{props.title}</h3>
            <p>{props.description}
            </p>
            <a href={props.link}>Click me to see website</a>

            </div>
            

        </div>
    )
}

export default Project