import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import EWCIsha from "../assets/img/ewc-semifinal1-02.jpg"
import resume from '../assets/files/IshaIngersolResume.pdf';

import '../css-components/About.css'

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
                            <img className="EWCIsha1" src={EWCIsha} alt="Image of Isha Ingersol" />
                        </div>

                        <div className="col-right">
                            <p>
                                I am <span>Isha Ingersol</span>, a 20-year-old based in Dubai, United Arab Emirates.
                                <br></br>
                                <br></br>
                                As an undergraduate, I have taken up leadership roles at the university as the:
                                <ol>
                                    <li> <span>Computer Science Student Representative</span>, for 2 consecutive academic years! </li>
                                    <li> <span>Marketing Student Ambassador</span>, and </li>
                                    <li> <span>Student Ambassador</span> (for Open Days and Welcome Weeks). </li>
                                </ol>

                                I am proficient in a variety of programming languages and have a <span>hands-on experience </span> 
                                in developing various projects, in <span>full stack web development</span>, <span>game development</span>, and <span>data science and analytics</span>.
                                <br></br>
                                <br></br>
                                {/* I am currently enrolled in <span>Harvard University's CS50x</span> course, which has been incredibly interesting. 
                                The course covers the basics of Computer Science, along with Python, HTML, CSS, JavaScript, Scratch, Data Structures and Algorithms, Flask, and more. 
                                I plan to continue my learning journey by pursuing the <span>CS50P</span> and <span>CS50AI</span> courses (offered by Harvard University) in the future.
                                <br></br>
                                <br></br> */}
                                Apart from academics and tech, I have a keen interest in playing <span>badminton</span>, exploring 
                                <span> different varieties of food</span>, and watching <span>"Shark Tank"</span> and learning the language used in the show.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        <div className="resume-button-container">
            <button className="resume-button" onClick={() => window.open(resume, '_blank')}>
                FIND MY RESUME HERE!
            </button>
        </div>
    </section>
  )
}