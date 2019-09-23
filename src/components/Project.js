import React from 'react'

const Project = (props) => {
    return (
        <div className="project">
            {/* <img src="/img/netflix-copy.png" alt="netflix-copy website"/>
            <h3>Netflix Copy</h3>
            <p>A visual non-functional copy of the Netflix website to develop my understanding of Flexbox in CSS.
                This was made using HTML and multiple rows of images and organised using Flexbox. 
            </p> */}
            <img src={props.source} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.description}
            </p>

        </div>
    )
}

export default Project