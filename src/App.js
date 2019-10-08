import React from 'react';
import logo from './logo.svg';
import ReactCardFlip from 'react-card-flip'

import Navbar from './components/Navbar'
// import ProfilePic from './components/ProfilePic'
import AboutMe from './components/AboutMe'
import ProfilePic from './components/ProfilePic'
import MoreAboutMe from './components/MoreAboutMe'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      page: "home",
      isFlipped: false,
    }
    this.handleFlip = this.handleFlip.bind(this)
  }
  handleHomeClick = ()=>{
    this.setState(prevState => {
      return {
        page:"home"
      }
    })
  }

  handleMoreAboutMeClick = ()=>{
    this.setState(prevState => {
      return {
        page:"more about me"
      }
    })
  }
  handlePortfolioClick = ()=>{
    this.setState(prevState => {
      return {
        page:"portfolio"
      }
    })
  }

  handleFlip = (e)=>{
    e.preventDefault()
    this.setState( prevState => ({ isFlipped: !this.state.isFlipped }) )
  }
 

  render(){
    let show;
    if(this.state.page === "portfolio") {
      show = <Portfolio />
    }
    else if(this.state.page === "more about me") {
      show = <MoreAboutMe />
    } else {
      // <AboutMe />
      show = <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
              <ProfilePic key="front" handleFlip={this.handleFlip}>
                

              </ProfilePic>
              <AboutMe key="back" handleFlip={this.handleFlip}>
              

              </AboutMe>

            </ReactCardFlip>
    }
  return (
    <div className="App">
      <Navbar 
      handleHomeClick={this.handleHomeClick}
      handlePortfolioClick={this.handlePortfolioClick}
      handleMoreAboutMeClick={this.handleMoreAboutMeClick}/>
      {/* <ProfilePic /> */}
      {show}
      {/* {(this.state.MoreAboutMe)?(<Portfolio />):(<AboutMe />)} */}
      
      
       <div className="footer-container">
       <img src={logo} className="App-logo" alt="logo" />
       
       
       <Footer />
       </div>

      
    </div>
  );}
}

export default App;
