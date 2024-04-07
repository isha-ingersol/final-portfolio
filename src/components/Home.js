import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/homescreen.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../css-components/Home.css'
import resume from '../assets/files/IshaIngersolResume.pdf';

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Full Stack Web Developer", "Data Scientist", "Data Analyst"  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="home" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <h3>WELCOME TO</h3>
                <h1>Isha Ingersol's</h1>
                <h2>Portfolio Website</h2>
        

                {/* <a href="#connect">Let’s Connect <ArrowRightCircle size={25} /></a> */}
              </div>}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{marginTop:"10%"}}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>

          <div className="resume-button-container">
            <button className="resume-button" onClick={() => window.open(resume, '_blank')}>
              <span>FIND MY RESUME HERE!</span>
            </button>
          </div>
        </Row>
      </Container>
    </section>
  )
}