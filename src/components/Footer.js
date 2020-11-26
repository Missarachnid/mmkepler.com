import React from "react";
import Twitter from "../img/Twitter_Logo_WhiteOnImage.png";

const Footer = () => {
  return (
    <footer>
		  <div id="footer">
          <p>© 2020 Melissa Kepler, background image courtesy of NASA</p>
          <a href="https://twitter.com/missarachnid" target="_blank" rel="noopener">
            <img id="twitter" src={Twitter} alt="Twitter logo"/>
          </a>
      </div>
	  </footer>
  )
}

export default Footer;