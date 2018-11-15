import React, { Component } from 'react';
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import "../App.css";
import logo from "../img/Melissa_Kepler_Logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <div id="homeSection"></div>
        <Header />

        <div className="jumbotron">
		      <div className="container">
			      <div className="logoDiv">
				      <img src={logo} className="img-responsive myLogo img-center" alt="Melissa Kepler's logo." />
			      </div>	
		      </div>
        </div>
              
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />

      </div>
    );
  }
}

export default App;
