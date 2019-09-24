import React from 'react'

const Project = (props) => {
    return (
        <div className="project">
           <div><img src={props.source} alt={props.alt}/>
           </div>
            <div>
            <h3>{props.title}</h3>
            <p>{props.description}
            </p>

            </div>
            

        </div>
    )
}

export default Project