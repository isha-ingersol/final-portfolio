import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import threads from "../assets/img/project-threads-logo.png";
import upcomingweb from "../assets/img/upcoming-web-dev.png";
import upcomingmobile from "../assets/img/upcoming-mobile-dev.png";
import upcomingdatascience from "../assets/img/upcoming-datascience.png";
import '../css-components/Projects.css';

export const Projects = () => {
  const projectsWebDev = [
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
      imgUrl: upcomingweb,
      imgWidth: "180px",
      imgHeight: "180px",
    },
    // {
    //   title: "Maps Clone",
    //   description: "Under Development",
    //   imgUrl: maps,
    //   imgWidth: "180px",
    //   imgHeight: "180px",
    // },
  ];

  const projectsMobileDev = [
    {
      title: "Upcoming Project",
      description: "Under Development",
      imgUrl: upcomingmobile,
      imgWidth: "180px",
      imgHeight: "180px",
    },
    {
      title: "Upcoming Project",
      description: "Under Development",
      imgUrl: upcomingmobile,
      imgWidth: "180px",
      imgHeight: "180px",
    },
  ];

  const projectsDataScience = [
    {
      title: "Upcoming Project",
      description: "Under Development",
      imgUrl: upcomingdatascience,
      imgWidth: "180px",
      imgHeight: "180px",
    },
    {
      title: "Upcoming Project",
      description: "Under Development",
      imgUrl: upcomingdatascience,
      imgWidth: "180px",
      imgHeight: "180px",
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
