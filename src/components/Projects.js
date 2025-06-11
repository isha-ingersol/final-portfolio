import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsCarousel from "./ProjectCarousel.js";
import threads from "../assets/img/project-threads-logo.png";
import upcomingproject from "../assets/img/upcoming-project.png";
import '../css-components/Projects.css';

export const Projects = () => {
  const projectsAll = [
    {
      title: "Threads Clone",
      description: (
        <>
          Under Development. <br />
          Technologies Used: <br />
          TailwindCSS, NextJS, Clerk, <br />
          TypeScript, and more.
        </>
      ),
      imgUrl: threads,
      imgWidth: "180px",
      imgHeight: "180px",
    },
    {
      title: "Upcoming Project",
      description: "Under Development",
      imgUrl: upcomingproject,
      imgWidth: "180px",
      imgHeight: "180px",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <p>Throughout my journey, I have created multiple projects. Below, I have mentioned my most <span>notable projects</span>. Some of them are under development.</p>
            <div className="project-bx-all">
              <ProjectsCarousel projects={projectsAll} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;