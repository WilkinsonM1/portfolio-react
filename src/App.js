import React from 'react';
import logo from './logo.svg';
import ReactCardFlip from 'react-card-flip'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// import Summary from './components/Summary'


// import Navbar from './components/Navbar'
// // import ProfilePic from './components/ProfilePic'
// import AboutMe from './components/AboutMe'
// import ProfilePic from './components/ProfilePic'
import Main from './components/Main'
import MoreAboutMe from './components/MoreAboutMe'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'
// import Footer from './components/Footer'

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

    return (
    <BrowserRouter>
      <div className='App'>
           <Route exact path="/" component={Main} /> 
            <Route path="/portfolio" component={Portfolio} />
              <Route path="/more-about-me" component={MoreAboutMe} /> 
                <Route path="/contact-me" component={ContactMe} /> 
       
        <div className='navigation'>
            <Link to="/" className="item">Home</Link>
              <Link to="/portfolio" className="item">Portfolio</Link>
                <Link to="/more-about-me" className="item">More About Me</Link>
                  <Link to="/contact-me" className="item">Contact Me</Link>

        </div>

        

        


        



      </div>
    
      </BrowserRouter>
   
      )

    
    }
  
}


export default App;

// render(){
//   let show;
//   if(this.state.page === "portfolio") {
//     show = <Portfolio />
//   }
//   else if(this.state.page === "more about me") {
//     show = <MoreAboutMe />
//   } else {
//     // <AboutMe />
//     show = <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
//             <ProfilePic key="front" handleFlip={this.handleFlip}>
              

//             </ProfilePic>
//             <AboutMe key="back" handleFlip={this.handleFlip}>
            

//             </AboutMe>

//           </ReactCardFlip>
//   }
// return (
//   <div className="App">
//     <Navbar 
//     handleHomeClick={this.handleHomeClick}
//     handlePortfolioClick={this.handlePortfolioClick}
//     handleMoreAboutMeClick={this.handleMoreAboutMeClick}/>
//     {/* <ProfilePic /> */}
//     {show}
//     {/* {(this.state.MoreAboutMe)?(<Portfolio />):(<AboutMe />)} */}
    
    
//      <div className="footer-container">
//      <img src={logo} className="App-logo" alt="logo" />
     
     
//      <Footer />
//      </div>

    
//   </div>
// );}