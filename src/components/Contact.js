import React from "react";
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
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="contact-email">
                <h2 className="text-center">Send a message to my planet!</h2>
                <div className="melissaMail contactLinks">
                 <p>mmkepler@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;