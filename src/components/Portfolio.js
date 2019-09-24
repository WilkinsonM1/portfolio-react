import React from 'react'
import Project from './Project'
import netCopy from '../img/netflix-copy.png'


const Portfolio = (props) =>{
    return (
        <div className="portfolio">
            <Project 
                source={netCopy}
                alt="netflix-copy website"
                title="Netflix Copy"
                link="https://wilkinsonm1.github.io/netflixCopy/"
                description="A visual non-functional copy of the Netflix website to develop my understanding of Flexbox in CSS.
                This was made using HTML and multiple rows of images and organised using Flexbox. "
                />

            <Project
                source="/img/cyber-pet-game.png"
                alt="cyber pet game"
                title="Cyber Pet Game"
                link="https://wilkinsonm1.github.io/cyber-pet-game/."
                description="An interactive game made mostly with Javascript with a bit of HTML and CSS to style the landing page and the game functions are triggered by a html button."
            />
            <Project
                source="/img/keycode-generator.png"
                alt="keycode generator"
                title="Keycode Generator"
                link="https://wilkinsonm1.github.io/keyCodeGenerator/."
                description="A simple website that listens to the keyboard button presses and displays the event keys, which and code of each button press."
            />
            
            <Project
                source="/img/drumkit-cat.png"
                alt="Drumkit Cat"
                title="Drumkit Cat"
                link="https://wilkinsonm1.github.io/drumkitCat/"
                description="Another event-listening challenge where I connected html buttons and keyboard buttons to sound files which make up a drum kit."
            />
            
            <Project
                source="/img/black-dice-game.png"
                alt="Black dice game"
                title="Black Dice Game"
                link="https://wilkinsonm1.github.io/Black-Dice-game/"
                description="A website built that plays a game of 21 with randomly generated dice.
                The challenge here was making each player play on his/her turn, by disabling all the rolling buttons apart from the player who's turn it is."
            />
           
            <Project
                source="/img/london-bus-animation.png"
                alt="London bus driving animation"
                title="London Bus Animation"
                link="https://wilkinsonm1.github.io/london-bus-animation/."
                description="This was a small css challenge to practice CSS animations. I made the clouds move to the left while slowly fading, the bus slightly bounces and the wheels turn. The actual html divs and colouring were provided by our instructor."
            />
             {/*
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