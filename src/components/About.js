import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import EWCIsha from "../assets/img/ewc-semifinal1-02.jpg"
import { ArrowRightCircle } from 'react-bootstrap-icons';

import '../css-components/About.css'

export const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About Me</h2>
                        <img className="EWCIsha1" src={EWCIsha} alt="Image of Isha Ingersol" />
                        <p>
                            I am <span>Isha Ingersol</span>, a 19-year-old from India.
                            <br></br>
                            <br></br>
                            As an undergraduate, I took up leadership roles at the university as the <span>Computer Science Student Representative </span> 
                            (in my sophomore year/Year 2), <span>Marketing Student Ambassador</span>, and as a <span>Student Ambassador</span> for Open Days and Welcome Weeks.
                            <br></br>
                            <br></br>
                            I am proficient in a variety of programming languages and web development technologies, and have <span>hands-on experience </span> 
                            in developing various projects, in <span>full stack web development</span> and <span>game development</span>.
                            <br></br>
                            <br></br>
                            {/* I am currently enrolled in <span>Harvard University's CS50x</span> course, which has been incredibly interesting. 
                            The course covers the basics of Computer Science, along with Python, HTML, CSS, JavaScript, Scratch, Data Structures and Algorithms, Flask, and more. 
                            I plan to continue my learning journey by pursuing the <span>CS50P</span> and <span>CS50AI</span> courses (offered by Harvard University) in the future.
                            <br></br>
                            <br></br> */}
                            Apart from academics and tech, I have a keen interest in playing <span>badminton</span>, exploring 
                            <span> different varieties of food</span>, watching <span>"Shark Tank"</span>, and <span>driving</span>.
                            <a href="#connect">Got any questions? Reach out to me now! <ArrowRightCircle size={25} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}