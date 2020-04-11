import React from 'react';
import photo from "../img/mkepler_200.jpg";
import linked from "../img/In-Black-34px-TM.png";
import git from "../img/GitHub-Mark-32px.png";
import behance from "../img/behance.svg";

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
                <p>I'm was the owner of Melissa Kepler Web Design & Development. I am currently looking for a full time full stack React developer job remotely or in the Greater Denver area. </p>
                <br />
                <p>I have been using every cheap or free resource I can to learn to be a JavaScript developer since 2015. I can’t remember what “Learn how to code” website got me, but they got me. I love the idea of a career where you can grow through learning in ways that aren’t just traditional education.</p>
                <br />
                <p>I have finished the Front End tracks for Team Treehouse and Free Code Camp. I have been working on the Back End track at Free Code Camp, but they recently changed their requirements. In 2018 I won a Grow with Google scholarship for Udacity’s Mobile Web Specialist Nanodegree and earned my Nanodegree.</p>
              </div>
              <br />
              <div>
                <p>I love astronomy and astrophysics, and that might have something to do with my last name! I am a huge fan of Game of Thrones and the Alien movies.  I also love dinosaurs, and really wanted to be a paleontologist as a child.  In my spare time I am into body building.  I am a former member of Women Who Code and I was a co-host the Woodstock Northwest OTP meetups before I relocated to Denver.</p><br />													
            </div>
            </div>
          </div>
            <div className="row text-center">
              <div className="hobbies col-sm-4">
                <div className="about-links">
                  <p>My work history &nbsp;
                    <span>
                      <a href="https://www.linkedin.com/in/melissa-kepler-137a55104" target="_blank" rel="noopener noreferrer"> 
                        <img src={linked} className="linked-about" alt="Logo for LinkedIn"/>
                      </a>
                    </span>
                  </p>
                </div>
            </div>
            <div className="hobbies col-sm-4">
              <div className="about-links">
                <p>My latest projects &nbsp;<span>
                <a href="https://github.com/Missarachnid" target="_blank" rel="noopener noreferrer">
                  <img src={git} className="git-about" alt="GitHub link icon." />
                </a>
                </span>
                </p>
              </div>
            </div>
            <div className="hobbies col-sm-4">
              <div className="about-links">
                <p>My graphic work &nbsp;<span>
                <a href="https://www.behance.net/mmkepler" target="_blank" rel="noopener noreferrer">
                  <img src={behance} className="behance-about" alt="behance link icon." />
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