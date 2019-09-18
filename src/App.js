import React from 'react';
import logo from './logo.svg';

import Navbar from './components/Navbar'
// import ProfilePic from './components/ProfilePic'
import AboutMe from './components/AboutMe'
import MoreAboutMe from './components/MoreAboutMe'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      page: "home",
    }
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
 

  render(){
    let show;
    if(this.state.page === "portfolio") {
      show = <Portfolio />
    }
    else if(this.state.page === "more about me") {
      show = <MoreAboutMe />
    } else {show = <AboutMe />}
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
