import React from "react";
import fcc from "../img/fcc_puckRoundedCorners600.png";
import codecademy from "../img/logo_black2.svg";
import tree from "../img/teamTreehouse.svg";
import udacity from "../img/udacity.svg";

 const Skills = () => {
  return (
    <div>
      <div id="skills"></div>
      <div className="container">
        <div className="sectionStyle skills">
          <h2 >Skills</h2>

            <div className="row">
              <div className="col-md-3 col-xs-6">
                <div className="ms">
                  <h3>Coding</h3>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="ms">
                  <h3 className="coding">Coding</h3>
                  <ul>
                    <li>JQuery</li>
                    <li>Angular 1.5</li>
                    <li>Bootstrap</li>
                    <li>WordPress</li>
                    <li>Git/GitHub</li>
                    <li>npm</li>
                    <li>Grunt</li>
                  </ul>
                </div>
              </div>
              <div className="clearfix visible-xs"></div>
              <div className="col-md-3 col-xs-6">
                <div className="ms">
                  <h3>Digital Arts</h3>
                    <ul>
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>Sketch</li>
                      <li>Graphic Design</li>
                      <li>Photo Editing</li>
                      <li>3D Animation</li>
                      <li>3D Modeling</li>
                      <li>Texturing</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="ms">
                  <h3>Working Knowledge:</h3>
                  <ul>
                    <li>SQL Queries</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>Flexbox</li>
                    <li>Webpack</li>
                    <li>Redux</li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="row learningIcons text-center">
              <h3 className="edu">Educational Links</h3>
              <div className="links center-block text-center">
              <div className="col-sm-3 col-xs-6">
                <div className="udacityDiv">
                <a href="https://www.udacity.com/course/mobile-web-specialist-nanodegree--nd024" target="_blank" rel="noopener noreferrer"><img src={udacity} className="udacity" alt="Udacity logo." /></a>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="freeCodeCampDiv">
                <a href="https://www.freecodecamp.com/missarachnid" target="_blank" rel="noopener noreferrer"><img src={fcc} className="freecodecamp" alt="Free Code Camp icon link." /></a>
                </div>
              </div>
                <div className="clearfix visible-xs"></div>
              <div className="col-sm-3 col-xs-6">
                <div className="codecademyDiv">
                <a href="https://www.codecademy.com/missarachnid" target="_blank" rel="noopener noreferrer"><img src={codecademy} className="codecademy" alt="Codecademy icon link." /></a>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="treehouseDiv">
                <a href="https://teamtreehouse.com/melissakepler" target="_blank" rel="noopener noreferrer"><img src={tree} className="treehouse" alt="Team Treehouse icon link." /></a>
              </div>
              </div>
              </div>
            </div>
            <div className="row learningIcons text-center">
              <h3 className="edu">Certificates and<br />Statements of Accomplishment</h3>
              <div className="links center-block text-center">
                <div className="col-sm-6 col-xs-12">
                  <div className="certificates">
                    <a href="https://www.freecodecamp.com/missarachnid/front-end-certification" target="_blank" rel="noopener noreferrer">Free Code Camp Front End<br />Development Certificate</a>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="certificates">
                    <a href="https://prod-cert-bucket.s3.amazonaws.com/downloads/fbc68de249794ebe9194ca26ef5b2cdf/Statement.pdf" target="_blank" rel="noopener noreferrer">Stanford Online<br />Computer Science 101</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>	
    </div>
  )
}

export default Skills;