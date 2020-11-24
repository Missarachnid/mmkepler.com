import React, {useState} from "react";
import planets from "../img/planets.png";

 const Contact = () => {
  return (
    <div>
      <div id="contact"></div>
      <div className="container">
        <div className="contact">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="planetDiv">
                <img src={planets} id="myPlanet" className="img-responsive img-center" alt="A planet I made in photoshop with three orbiting moons" />
              </div>
              <p id="contact-planet-text">Drop a line to my planet!</p>
            </div>
            <div className="col-md-6 col-sm-12">
              
              <div className="contact-email">
                {/* Start form here*/}
                <form class="navbar-form navbar-left" role="email" id="form">
                  <div class="form-group">
                    <input type="text" class="form-control email-form" id="email" placeholder="email"/>
                    <br />
                    <input type="text" class="form-control email-form" id="name" placeholder="name" />
                    <br />
                    <textarea form="form" class="form-control email-form" id="message" name="message" placeholder="message" cols="20" rows="5" required></textarea>
                  </div>
                  <br />
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;