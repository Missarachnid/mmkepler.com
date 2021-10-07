import React from "react";
import resume from "../img/Melissa_Kepler_resume.pdf";

const Header =  () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" id="navbarScroll">
      <div className="container">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
         	
          <a className="navbar-brand nameText home" href="#home">Melissa<br />Kepler</a>
			
        <div className="collapse navbar-collapse">
           <ul className="nav navbar-nav navbar-right">
             <li role="presentation"><a href="#about" className="nameText">About</a></li>
             <li role="presentation"><a href="#skills" className="nameText">Skills</a></li>
             <li role="presentation"><a href="#portfolio" className="nameText">Portfolio</a></li>
            <li role="presentation"><a href="#contact" className="nameText">Contact</a></li>
            <li role="presentation"><a href={resume} target="_blank" rel="noreferrer" className="nameText">Resume</a></li>
          </ul>
        </div>
    </div>
  </nav> 
  )
}

export default Header;