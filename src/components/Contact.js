import React, {useState} from "react";
import planets from "../img/planets.png";
import * as emailjs from "emailjs-com";
import Failure from "./Failure";
import Success from "./Success";

require("dotenv").config();

 const Contact = () => {

  /* so remeber that you took out the async/await and may have to add it back. Also look up persist() */
  //start for form inputs
  const InitialState = {emailInput: "", nameInput: "", messageInput: ""};
  const [form, setForm] = useState(InitialState);

  //start for showing send success or failure
  const InitialSuccess = {show: false}
  const InitialFailure = {show: false}
  const InitialForm = {show: true};
  const [showSuccess, setSuccess] = useState(InitialSuccess);
  const [showFailure, setFailure] = useState(InitialFailure);
  const [showForm, setShowForm] = useState(InitialForm);

  const handleChange = (event) => {
    event.preventDefault();
    const {target} = event;
    const {name, value} = target;
    
    setForm({...form, [name]: value});

  }

  function clickSubmit (event) {
    event.preventDefault();
    
    //info needed for emailjs
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;

    let formInfo = {from_name: form.nameInput, from_email: form.emailInput, message: form.messageInput, reply_to: form.emailInput};

      emailjs.send(
        serviceId, templateId, formInfo, userId)
        .then(() => {
          setSuccess({show: true})
          setShowForm({show: false});
          setForm(InitialState);
          })
        .catch(err => {
          setShowForm({show: false});
          setFailure({show:true})
        });
    
  }
 
  return (
    <div>
      <div id="contact"></div>
      <div className="container">
        <div className="contact">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="planetDiv">
                <img src={planets} 
                id="myPlanet" 
                className="img-responsive img-center" 
                alt="A bluish green planet with 3 orbiting moons." />
              </div>
              <p id="contact-planet-text">Drop a line to my planet!</p>
            </div>
            <div className="col-md-6 col-sm-12">
              
                {/* Form Starts Here */}
                {/* If the form has been submitted, a success or failure message will appear */}
                {showSuccess.show && <Success />}
                {showFailure.show && <Failure />}
                {/* The form will be hidden after submit */}
                { showForm.show &&
                (<form
                id="form" 
                onSubmit={e => clickSubmit(e)}>
                  <div className="form-group">
                    <label>Name
                    <br />
                    <input type="text" 
                    className="form-control email-form" 
                    id="nameInput" 
                    name="nameInput" 
                    placeholder="Name" 
                    value={form.nameInput} 
                    onChange={(e)=> handleChange(e)} 
                    min-lenth="2"
                    aria-required="true"
                    required/>
                    <br />
                    </label>
                    <label>Email
                    <br />
                    <input type="email" 
                    className="form-control email-form" 
                    id="emailInput" placeholder="Email" 
                    name="emailInput" 
                    value={form.emailInput} 
                    onChange={(e) => handleChange(e)} 
                    aria-required="true"
                    required/>
                    <br />
                    </label>
                    <label>Message
                    <br />
                    <textarea form="form" 
                    className="form-control email-form" 
                    id="messageInput" 
                    name="messageInput" 
                    placeholder="What's up?" 
                    cols="20" 
                    rows="5" 
                    value={form.messageInput} 
                    onChange={(e) => handleChange(e)} 
                    aria-required="true"
                    required></textarea>
                    </label>
                  </div>
                  <br />
                  <button 
                  type="submit" 
                  id="submit-button"
                  className="btn btn-default" 
                  >
                    Submit
                  </button>
                </form>) }
              {/* Form Ends Here*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;