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

            <Project
                source="/img/cyber-pet-game.png"
                alt="cyber pet game"
                title="Cyber Pet Game"
                description="An interactive game made mostly with Javascript with a bit of HTML and CSS to style the landing page and the game functions are triggered by a html button."
            />
            {/* <Project
                source=""
                alt=""
                title=""
                description=""
            />
            <Project
                source=""
                alt=""
                title=""
                description=""
            />
            <Project
                source=""
                alt=""
                title=""
                description=""
            />
            <Project
                source=""
                alt=""
                title=""
                description=""
            />
            <Project
                source=""
                alt=""
                title=""
                description=""
            />
            <Project
                source=""
                alt=""
                title=""
                description=""
            />
            <Project
                source=""
                alt=""
                title=""
                description=""
            />
            <Project
                source=""
                alt=""
                title=""
                description=""
            /> */}

        </div>
       
    )
}

export default Portfolio