import React from 'react'
import oilPaint from '../img/oil-painting-mountain.jpg'
import waterSakura from '../img/water-colour-sakura.jpg'
import waterGoku from '../img/goku-blue-water.jpg'
import gokuMastered from '../img/goku-mastered-ui.jpg'
import waterSunset from '../img/water-colour-sunset.jpg'
import originChar from '../img/original-character.jpg'
import gogeta from '../img/gogeta.jpg'
import broly from '../img/broly-older.jpg'
import cv from '../files/Developer-CV.pdf'

const MoreAboutMe = () => {
    return (
        <div className="more-about-me">
            <div className="education">
            <h1 >Education</h1>
            <p>Although my early schooling was done in Saudi Arabia, I did my GCSEs, A levels and Masters in England.
            I went to Mosslands School for GCSEs and A levels. I then went on to a Biochemistry undergraduate degree at the University of Liverpool which I then integrated with a Masters.
            </p>
            <h3>GCSEs</h3>
            <ul>
                <li>A*: Physics, Chemistry, Geography</li>
                <li>A: Maths, Biology, Astronomy</li>
                <li>B: Design and Technology, Religious Education, English Literature</li>
                <li>C: English Language, German, History, ICT </li>
            </ul>
            <h3>A levels</h3>
            <ul>
                <li>A: Maths</li>
                <li>B: Physics, Biology, Chemistry</li>
                <li>AS level Further Maths (Grade B)</li>
                
            </ul>
            <h3>Masters in Biological Sciences (Biochemistry)</h3>
            <p><b>Obtained a <u>1st</u></b></p>
            </div>
            <div className="why-coding">

            <h1 >Why I'm coding</h1>
       
            <p>In 2017 I decided I wanted to create a game of my own and I knew that my brother had tried doing the same thing using GameMaker Studio. 
                I started following tutorials to make my own RPG. 
            </p>
            <p>While this was a fun experience I still had to take care of real life and while looking for different career paths to take,
                a friend of mine suggested I look into being a web developer. This sparked a light bulb in me as I realised this was a very interesting and creative new avenue for me to explore. I started learning HTML and CSS to make my own blog and I found the whole process really fun!
            </p>
            <p>But I didn't have the resources I needed to propel myself in this career until I came across Code Nation who have helped me go from a novice to a Junior Developer in just 12 weeks!</p>
            </div>

            <div className="hobbies">
            <h1>Hobbies and Interests</h1>
            <p>I really love anime and drawing anime characters. Although I don't play any specific sport I've tried various ones over the years such as Tai Chi and Sword Fencing.
                More recently I've really developed fitness as a major interest, learning about improving my strengh and cardiovascular system and actually implementing what I learn consistently every week.
            </p>
            </div>
   
            <div className='art-gallery'>
            <h1>Art Gallery</h1>
            <img src={oilPaint} />
            <img src={waterSunset} />
            <img src={waterSakura} />
            <img src={waterGoku} />
            <img src={broly}/>
            <img src={originChar} />
            <img src={gokuMastered} />
            <img src={gogeta}/>
            </div>
            <div className='cv'>
            <h1>Curriculum Vitae</h1>
            <a href={cv} download>Click to download CV</a>
            </div>
            <div className='contact-me'>
            <h1>Contact Me</h1>
            <h3>My contact information</h3>
            <ol>
                <li>Email: wilkinsonm302@gmail.com </li>
                <li><a href='https://www.linkedin.com/in/mohammed-wilkinson-0a44b1b9/'>Click me</a>  for my LinkedIn </li>
                <li><a href='https://github.com/WilkinsonM1'>Click me</a>  for my Github</li>
                <li>Mobile: 07942250766</li>
            </ol>
            </div>

        </div>
    )
}

export default MoreAboutMe