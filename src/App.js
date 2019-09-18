import React from 'react';
import logo from './logo.svg';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css';

class App extends React.Component {


  render(){
  return (
    <div className="App">
     <header className="App-header">
       <Navbar />
       <div className="footer-container">
       <img src={logo} className="App-logo" alt="logo" />
       
       <Footer />
       </div>
        
      </header>

      
    </div>
  );}
}

export default App;
