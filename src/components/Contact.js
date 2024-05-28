import React from "react";

import mail from "../assets/contact-images/email-icon.png"
import github from "../assets/contact-images/github-icon.png"
import linkedin from "../assets/contact-images/linkedin-icon.png"

import '../css-components/Contact.css';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <div class="contact-content" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>        
        
        <h2> GET IN TOUCH NOW!</h2>

        <div className="social-icon" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "30%", margin: "auto"}}>
            <div className="email" style={{display: "flex", flexDirection: "column", alignItems: "center", paddingRight: "10%", paddingLeft: "10%"}}>
                <a href="mailto:ingersol.isha@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt="Mail" /></a>
                <h4>Email</h4>
            </div>
            <div className="github" style={{display: "flex", flexDirection: "column", alignItems: "center", paddingRight: "10%"}}>
                <a href="https://github.com/isha-ingersol" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
                <h4>GitHub</h4>
            </div>
            <div className="linkedin" style={{display: "flex", flexDirection: "column", alignItems: "center", paddingRight: "10%"}}>
                <a href="https://www.linkedin.com/in/isha-ingersol/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <h4>LinkedIn</h4>
            </div>
        </div>
      </div>
    </section>
  )
}