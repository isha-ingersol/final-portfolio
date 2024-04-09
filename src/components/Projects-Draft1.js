import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import threads from "../assets/img/project-threads-logo.png";
import linkedin from "../assets/img/project-LinkedIn-logo.png";
import maps from "../assets/img/project-maps-logo.svg";
import '../css-components/Projects.css';

export const Projects = () => {
  const projectsWebDev = [
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

  const projectsMobileDev = [
    {
      title: "Threads Clone",
      description: "Under Development",
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

  const projectsDataScience = [
    {
      title: "Threads Clone",
      description: "Under Development",
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

  const projectSettings = { itemsPerRow: 2 };

  // Define the createRows function
  function createRows(items, settings) {
    const rows = [];
    for (let i = 0; i < items.length; i += settings.itemsPerRow) {
      rows.push(items.slice(i, i + settings.itemsPerRow));
    }
    return rows;
  }

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <p>Throughout my journey, I have created multiple projects. Below, I have mentioned my most <span>notable projects</span>. Some of them are under development.</p>
            <div className="project-bx-webdev">
              <h3>Web App Development</h3>
              <br />
              {createRows(projectsWebDev, projectSettings).map((row, rowIndex) => (
                <Row key={rowIndex}>
                  {row.map((project, itemIndex) => (
                    <Col key={itemIndex} md={12 / projectSettings.itemsPerRow}>
                      <ProjectCard {...project} />
                    </Col>
                  ))}
                </Row>
              ))}
            </div>

            <br />

            <div className="project-bx-mobiledev">
              <h3>Mobile App Development</h3>
              <br />
              {createRows(projectsMobileDev, projectSettings).map((row, rowIndex) => (
                <Row key={rowIndex}>
                  {row.map((project, itemIndex) => (
                    <Col key={itemIndex} md={12 / projectSettings.itemsPerRow}>
                      <ProjectCard {...project} />
                    </Col>
                  ))}
                </Row>
              ))}
            </div>

            <br />

            <div className="project-bx-datascience">
              <h3>Data Science Projects</h3>
              <br />
              {createRows(projectsDataScience, projectSettings).map((row, rowIndex) => (
                <Row key={rowIndex}>
                  {row.map((project, itemIndex) => (
                    <Col key={itemIndex} md={12 / projectSettings.itemsPerRow}>
                      <ProjectCard {...project} />
                    </Col>
                  ))}
                </Row>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
