import React from 'react'


const Navbar = (props) => {
    return (
        <div className="navbar">
           
            <button onClick={props.handleHomeClick}>Home</button>
            <button onClick={props.handlePortfolioClick}>Portfolio</button>
            <button onClick={props.handleMoreAboutMeClick}>More about me</button>

        </div>
    )
}

export default Navbar