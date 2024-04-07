import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import linkedin from "../assets/img/project-LinkedIn-logo.png";
import instagram from "../assets/img/project-instagram-logo.png";
import threads from "../assets/img/project-threads-logo.png";
import maps from "../assets/img/project-maps-logo.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../css-components/Projects.css';

export const Projects = () => {

  const projects = [
    {
      title: "Threads Clone",
      description: (
        <>
          Under Development. <br />
          Technologies Used: TailwindCSS, NextJS, Clerk, TypeScript, and more.
        </>
      ),
      imgUrl: threads,
      imgWidth: "200px",
      imgHeight: "200px",
    },
    {
      title: "LinkedIn Clone",
      description: "Under Development",
      imgUrl: linkedin,
      imgWidth: "200px",
      imgHeight: "200px",
    },
    {
      title: "Maps Clone",
      description: "Under Development",
      imgUrl: maps,
      imgWidth: "200px",
      imgHeight: "200px",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                {/* <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={projectBG} alt="Contact Us"/> */}
                <div className="project-bx">
                <h2>PROJECTS</h2>
                <p>Throughout my journey, I have created multiple projects. Below, I have mentioned my most <span>notable projects</span>. Some of them are under development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : "mt-5"}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}