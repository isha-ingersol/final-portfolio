import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import EWCIsha from "../assets/img/ewc-semifinal1-02.jpg";
import resume from "../assets/files/IshaIngersolResume.pdf";

import mail from "../assets/contact-images/email-icon.png";
import github from "../assets/contact-images/github-icon.png";
import linkedin from "../assets/contact-images/linkedin-icon.png";

import "../css-components/About.css";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <h2>ABOUT ME</h2>
            <br></br>
            <div className="about-bx wow zoomIn">
              <div className="col-left">
                <img
                  className="EWCIsha1"
                  src={EWCIsha}
                  alt="Image of Isha Ingersol"
                />
              </div>

              <div className="col-right">
                <p>
                  I am Isha Ingersol, a First-Class Honours MEng Computer
                  Science and Software Engineering graduate based in{" "}
                  <span>London, United Kingdom</span>.
                  <br />
                  <br />
                  During my time at the <span>University of Birmingham</span>, I
                  served as the Computer Science Student Representative for two
                  consecutive academic years, as well as a Student Ambassador
                  and the Marketing Student Ambassador for university events and
                  outreach. These roles strengthened my communication,
                  leadership, and advocacy skills alongside my technical
                  development.
                  <br />
                  <br />
                  My technical interests lie in{" "}
                  <span>full-stack development</span>,{" "}
                  <span>machine learning</span>, and <span>data science</span>.
                  I have hands-on experience building end-to-end systems in
                  areas such as AI-powered applications, backend infrastructure,
                  and real-time data pipelines.
                  <br />
                  <br />
                  Outside of tech, I enjoy playing badminton, exploring diverse
                  cuisines, and watching Shark Tank (particularly learning the
                  strategies used in pitching and negotiation).
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="resume-button-container">
        <button
          className="resume-button"
          onClick={() => window.open(resume, "_blank")}
        >
          FIND MY RESUME HERE
        </button>
      </div>

      {/* <br />

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
        </div> */}
    </section>
  );
};
