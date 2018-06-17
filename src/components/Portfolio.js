import React from "react";
import github from "../img/GitHub-Mark-64px.png";
import sphere from "../img/202-sphere.svg";

import chart from "../img/app-img/stock2.jpg";
import calc from "../img/app-img/calc.jpg";
import tic from "../img/app-img/tictactoe.jpg";
import shortener from "../img/app-img/shortener.jpg";
import wiki from "../img/app-img/wiki.jpg";
import header from "../img/app-img/header.jpg";
import timestamp from "../img/app-img/timestamp.jpg";
import imageab from "../img/app-img/image-ab.jpg";
import simon from "../img/app-img/simon.jpg";
import metadata from "../img/app-img/metadata.jpg";
import pomo from "../img/app-img/pomo.jpg";
import twitch from "../img/app-img/twitch.jpg";
import restaurant from "../img/app-img/restaurant.jpg";
import weather from "../img/app-img/weather.jpg";
import quote from "../img/app-img/quote.jpg";

 const Portfolio = () => {
  return (
    <div>
      <div id="portfolio"></div>
        <div className="container">
          <div className="sectionStyle">
            <h2 className="text-center">Portfolio Projects</h2>

              <div className="row center-block">
              {/* Project 1 stock Market Chart*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={chart} className="img-responsive img-circle card-img" alt="A thumbnail of my stock market charting app"/>
                    <div className="card-text">
                      <h4 className="text-center">Stock Market Chart App</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/stock-chart" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://stock-.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2 Udacity Project 1*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={restaurant} className="img-responsive img-circle card-img" alt="A thumbnail from a restaurant review website"/>
                    <div className="card-text">
                      <h4 className="text-center">Udacity Project 1 Restaurant Review</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-12 link-div btn-left">
                          <a href="https://github.com/Missarachnid/Udacity-project1" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3 URL Shortener*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={shortener} className="img-responsive img-circle card-img" alt="A screen shot of a url shortener app" />
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

                {/* Project 4  File Metadata Microservice*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={metadata} className="img-responsive img-circle card-img" alt="A screen shot of a file metadata app"/>
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

                {/* Project 5 Image Search Abstraction Layer*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={imageab} className="img-responsive img-circle card-img" alt="A screenshot an app that searches for images"/>
                    <div className="card-text">
                      <h4 className="text-center">Image Search Abstraction Layer</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-imageSearch" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://corgi.glitch.me/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project 6 Request Header Parser*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={header} className="img-responsive img-circle card-img" alt="A screenshot of a header parser app"/>
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
                    <img src={timestamp} className="img-responsive img-circle card-img" alt="A screenshot of a timestamp microservice app"/>
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
                    <img src={tic} className="img-responsive img-circle card-img" alt="A screenshot of a Tic Tac Toe app"/>
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
                    <img src={simon} className="img-responsive img-circle card-img" alt="A screenshot of a Simon game app"/>
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
                    <img src={pomo} className="img-responsive img-circle card-img" alt="A screenshot of a pomodoro app"/>
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
                    <img src={wiki} className="img-responsive img-circle card-img" alt="A screenshot of a wikipedia viewer"/>
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

                {/* Project 12 Weather App*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={weather} className="img-responsive img-circle card-img" alt="A weather app screenshot"/>
                    <div className="card-text">
                      <h4 className="text-center">Weather Conditions App</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-weather-app" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://missarachnid.github.io/fcc-weather-app/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 13 Weather App Angular*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={weather} className="img-responsive img-circle card-img" alt="A weather app made with angular screenshot"/>
                    <div className="card-text">
                      <h4 className="text-center">Weather Conditions App ( Angular )</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-weather-app-angular" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://missarachnid.github.io/fcc-weather-app-angular/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 14 Twitch Viewer*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={twitch} className="img-responsive img-circle card-img" alt="A twitch viewer app screenshot"/>
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

                {/* Project 15 Calculator App*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={calc} className="img-responsive img-circle card-img" alt="A screenshot of a calculator app"/>
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

                {/* Project 16 Random Quote Machine*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="card container">
                    <img src={quote} className="img-responsive img-circle card-img" alt="A screenshot of a random quote app"/>
                    <div className="card-text">
                      <h4 className="text-center">Random Quote Machine</h4> 
                    </div>
                    <div className="row card-row">
                      <div className="card-info">
                        <div className="col-xs-6 link-div btn-left">
                          <a href="https://github.com/Missarachnid/fcc-random-quote" target="_blank" rel="noopener noreferrer"><img src={github} className="git" alt="Logo for GitHub"/></a>
                        </div>
                        <div className="col-xs-6 link-div btn-right">
                          <a href="https://missarachnid.github.io/fcc-random-quote/" target="_blank" rel="noopener noreferrer"><img src={sphere} className="sphere" alt="Icon representing a webpage link"/></a>
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