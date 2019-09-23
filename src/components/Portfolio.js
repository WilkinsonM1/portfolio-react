import React from 'react'
import Project from './Project'

const Portfolio = (props) =>{
    return (
        <div className="portfolio">
            <Project 
                source="/img/netflix-copy.png" 
                alt="netflix-copy website"
                title="Netflix Copy"
                description="A visual non-functional copy of the Netflix website to develop my understanding of Flexbox in CSS.
                This was made using HTML and multiple rows of images and organised using Flexbox. "
                />

        </div>
    )
}

export default Portfolio