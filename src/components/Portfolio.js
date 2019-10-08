import React from 'react'
import ReactCardFlip from 'react-card-flip'
import Project from './Project'
import netCopy from '../img/netflix-copy.png'
import cyberPet from '../img/cyber-pet-game.png'
import keyCode from '../img/keycode-generator.png'
import drumKit from '../img/drumkit-cat.png'
import blackDice from '../img/black-dice-game.png'
import busAnimation from '../img/london-bus-animation.png'


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
                source={cyberPet}
                alt="cyber pet game"
                title="Cyber Pet Game"
                link="https://wilkinsonm1.github.io/cyber-pet-game/."
                description="An interactive game made mostly with Javascript with a bit of HTML and CSS to style the landing page and the game functions are triggered by a html button."
            />
            <Project
                source={keyCode}
                alt="keycode generator"
                title="Keycode Generator"
                link="https://wilkinsonm1.github.io/keyCodeGenerator/."
                description="A simple website that listens to the keyboard button presses and displays the event keys, which and code of each button press."
            />
            
            <Project
                source={drumKit}
                alt="Drumkit Cat"
                title="Drumkit Cat"
                link="https://wilkinsonm1.github.io/drumkitCat/"
                description="Another event-listening challenge where I connected html buttons and keyboard buttons to sound files which make up a drum kit."
            />
            
            <Project
                source={blackDice}
                alt="Black dice game"
                title="Black Dice Game"
                link="https://wilkinsonm1.github.io/Black-Dice-game/"
                description="A website built that plays a game of 21 with randomly generated dice.
                The challenge here was making each player play on his/her turn, by disabling all the rolling buttons apart from the player who's turn it is."
            />
           
            <Project
                source={busAnimation}
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