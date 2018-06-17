import React from 'react';
import photo from "../img/Me.png";
import linked from "../img/In-Black-34px-TM.png";
import git from "../img/GitHub-Mark-32px.png";

 const About = () => {
  return (
    <div>
      <div id="about"></div>
      <div className="container">
        <div className="sectionStyle">
          <div className="row">
            <div className="col-md-4">
              <img src={photo} className="img-responsive img-circle pic center-block" alt="Melissa Kepler." />		
            </div>
            <div className="col-md-8">
              <div className="story">
                <h3>I&apos;m Melissa</h3><br />
                <p>I have been using every cheap or free resource I can to learn to be a JavaScript developer since 2015. I can’t remember what “Learn how to code” website got me, but they got me. I love the idea of a career where you can grow through learning in ways that aren’t just traditional education.</p>
                <br />
                <p>I have finished the Front End tracks for Team Treehouse and Free Code Camp. I have been working on the Back End track at Free Code Camp, but they recently changed their requirements. This year I won a Grow with Google scholarship for Udacity’s Mobile Web Specialist Nanodegree. I will finish in October and will be prepared to take the Google Mobile Web Specialist certification exam.</p>
              </div>
              <br />
              <div>
                <p>I love astronomy and astrophysics, and that might have something to do with my last name! I am a huge fan of Game of Thrones. I am a member of Women Who Code and go to events and meetups in Atlanta whenever I can.</p><br />													
            </div>
            </div>
          </div>
            <div className="row text-center">
              <div className="hobbies col-sm-6">
                <div className="about-links">
                  <p>Check out my work history at &nbsp;
                    <span>
                      <a href="https://www.linkedin.com/in/melissa-kepler-137a55104" target="_blank" rel="noopener noreferrer"> 
                        <img src={linked} className="linked-about" alt="Logo for LinkedIn"/>
                      </a>
                    </span>
                  </p>
                </div>
            </div>
            <div className="hobbies col-sm-6">
              <div className="about-links">
                <p>Check out my latest projects on &nbsp;<span>
                <a href="https://github.com/Missarachnid" target="_blank" rel="noopener noreferrer">
                  <img src={git} className="git-about" alt="GitHub link icon." />
                </a>
                </span>
                </p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default About;