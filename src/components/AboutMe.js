import React from 'react'

const AboutMe = (props) => {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <p>My name is Mohammed and I'm proud to call myself a React Junior Developer.</p>
            <p>Before I got into coding I went to university and got my Masters in Biological Sciences. Although initially I had ambitions to pursue a PhD in cancer research I realised that I didn't want to spend my life cooped up in a lab and wanted more human contact.
                This led me to enroll on a teaching course to obtain my PGCE though in the end I found that teaching was also not what I wanted to do.
            </p>
            <p>I started to pursue my own hobbies such as painting, blogging and learning Arabic as well as doing other jobs like sales and customer service.</p>
            <p>My interest in coding started actually with GameMaker Studio in GameMaker Language as I wanted to create and develop my own games.
            So I followed tutorials on youtube to make a simple RPG. Then a friend suggested I should become a web developer which I hadn't considered before that point (around 2017). The idea of being a web developer, of developing a set of skills and independently code and create things on the internet really excited me. 
            I started again following tutorials on how to make blog websites using HTML and CSS.
            </p>
            <p>Fortunately 2 years later I came across Code Nation on instagram and realised I should take the plunge and move forward to make my dream of becoming a web developer a reality and haven't looked back since!</p>
            <button onClick={props.handleFlip}>Click to flip</button>
        </div>
    )
}

export default AboutMe