import React from "react";
import github from "../img/GitHub-Mark-64px.png";
import sphere from "../img/202-sphere.svg";
import calc from "../img/app-img/calc.jpg";
import tic from "../img/app-img/tictactoe.jpg";
import shortener from "../img/app-img/shortener.jpg";
import wiki from "../img/app-img/wiki.jpg";
import header from "../img/app-img/header.jpg";
import timestamp from "../img/app-img/timestamp.jpg";
import simon from "../img/app-img/simon.jpg";
import metadata from "../img/app-img/metadata.jpg";
import pomo from "../img/app-img/pomo.jpg";
import twitch from "../img/app-img/twitch.jpg";
import restaurant from "../img/app-img/restaurant.jpg";
import quote from "../img/app-img/quote.jpg";
import georgia from "../img/app-img/georgia-corgi.svg";
import openWeather from '../img/app-img/open-weather.png'

 const Portfolio = () => {
  return (
    <div>
      <div id="portfolio"></div>
        <div className="container">
          <div className="sectionStyle">
            <h2 className="text-center">Portfolio Projects</h2>

              <div className="row center-block">

                {/* Project 1 Puplanta*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={georgia} className="img-responsive img-rounded card-img" alt="The state of georgia with a heart over atlanta, with a corgi head to its left, an a corgi butt to its right" id="georgia"/>
                    <div className="card-text">
                      <h4 className="text-center">Puplanta.com</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                      <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/puplanta2" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="http://puplanta.com" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2 Weather App*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={openWeather} className="img-responsive img-rounded card-img" alt="An the current weather details of a town in Georgia" />
                    <div className="card-text">
                      <h4 className="text-center">Weather App</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                      <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/open-weather" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://warm-cliffs-12741.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3 Udacity Project 1*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={restaurant} className="img-responsive img-rounded card-img" alt="A thumbnail from a restaurant review website"/>
                    <div className="card-text">
                      <h4 className="text-center">Udacity Project Restaurant Review</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-12 link-div btn-left">
                          <a href="https://github.com/Missarachnid/Udacity-project3" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 4 URL Shortener*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={shortener} className="img-responsive img-rounded card-img" alt="A screen shot of a url shortener app" />
                    <div className="card-text">
                      <h4 className="text-center">URL Shortener Microservice</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-url-shortener" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://momentous-trick.glitch.me/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 5 File Metadata Microservice*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={metadata} className="img-responsive img-rounded card-img" alt="A screen shot of a file metadata app"/>
                    <div className="card-text">
                      <h4 className="text-center">File Metadata Microservice</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/file-metadata" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub" /></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://kepler.glitch.me/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project 6 Request Header Parser*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={header} className="img-responsive img-rounded card-img" alt="A screenshot of a header parser app"/>
                    <div className="card-text">
                      <h4 className="text-center">Request Header Parser Microservice</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-request-header-parser" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://header-parser-mmk.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 7 Timestamp Microservice*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={timestamp} className="img-responsive img-rounded card-img" alt="A screenshot of a timestamp microservice app"/>
                    <div className="card-text">
                      <h4 className="text-center">Timestamp Microservice</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-timestamp" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://timestamp-mmk.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 8 Tic Tac Toe Game*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={tic} className="img-responsive img-rounded card-img" alt="A screenshot of a Tic Tac Toe app"/>
                    <div className="card-text">
                      <h4 className="text-center">Tic Tac Toe Game</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-tictactoe" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://missarachnid.github.io/fcc-tictactoe/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 9 Simon Game*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={simon} className="img-responsive img-rounded card-img" alt="A screenshot of a Simon game app"/>
                    <div className="card-text">
                      <h4 className="text-center">Simon Game</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-simon" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://missarachnid.github.io/fcc-simon/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 10 Pomodoro*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={pomo} className="img-responsive img-rounded card-img" alt="A screenshot of a pomodoro app"/>
                    <div className="card-text">
                      <h4 className="text-center">Pomodoro</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-pomodoro" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://missarachnid.github.io/fcc-pomodoro/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 11 Wikipedia Viewer*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={wiki} className="img-responsive img-rounded card-img" alt="A screenshot of a wikipedia viewer"/>
                    <div className="card-text">
                      <h4 className="text-center">Wikipedia Viewer</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-wikipedia-viewer" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://missarachnid.github.io/fcc-wikipedia-viewer/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 12 Twitch Viewer*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={twitch} className="img-responsive img-rounded card-img" alt="A twitch viewer app screenshot"/>
                    <div className="card-text">
                      <h4 className="text-center">Twitch Viewer</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-twitch-viewer" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://missarachnid.github.io/fcc-twitch-viewer/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 13 Calculator App*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={calc} className="img-responsive img-rounded card-img" alt="A screenshot of a calculator app"/>
                    <div className="card-text">
                      <h4 className="text-center">Calculator</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-calculator" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://missarachnid.github.io/fcc-calculator/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 14 Random Quote Machine*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={quote} className="img-responsive img-rounded card-img" alt="A screenshot of a random quote app"/>
                    <div className="card-text">
                      <h4 className="text-center">Random Quote Machine</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-12 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-random-quote" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>		
        </div>	
    </div>
  )
}

export default Portfolio;