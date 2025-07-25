import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsCarousel from "./ProjectCarousel.js";
import threads from "../assets/img/project-threads-logo.png";
import upcomingproject from "../assets/img/upcoming-project.png";
import '../css-components/Projects.css';

import DyscoverAI from "../assets/project-logos/DyscoverAI.png"

export const Projects = () => {
  const projectsAll = [
    {
      id: 1,
      title: "Threads Clone",
      description: "A full-stack social media application clone with real-time features, user authentication, and modern UI design. Features include post creation, commenting, following system, and responsive design.",
      imgUrl: threads,
      imgWidth: "120px",
      imgHeight: "180px",
      date: "2025-06-01",
      link: null,
      demoLink: null,
      documentation: null,
      status: "In Development",
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "Clerk", "MongoDB", "Vercel"],
      categories: ["Web Development", "Full Stack"]
    },
    {
      id: 2,
      title: "DyscoverAI",
      description: [
        "A full-stack system with deep learning models to detect learning disabilities in children and young adults using handwriting analysis.",
      ],
      imgUrl: DyscoverAI,
      imgWidth: "250px",
      imgHeight: "180px",
      date: "2025-04-17",
      link: "https://github.com/isha-ingersol/final-year-project",
      demoLink: null,
      documentation: "/files/DyscoverAI.pdf",
      status: "Completed",
      technologies: ["Python", "Handwriting Image Analysis", "Neural Networks", "TensorFlow/Keras", "MobileNetV2", "REST API", "Docker", "React", "Vite", "Flask", "AWS EC2", "Grad-CAM", "UI/UX",],
      categories: ["Artificial Intelligence", "Data Science", "Data Engineering", "Machine Learning", "Full Stack Web Development",]
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with payment integration, inventory management, and admin dashboard. Built with scalability and performance in mind.",
      imgUrl: upcomingproject,
      imgWidth: "180px",
      imgHeight: "180px",
      date: "2025-06-01",
      link: null,
      demoLink: null,
      documentation: null,
      status: "Planned",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe", "AWS"],
      categories: ["Web Development", "Software Engineering"]
    },
    // {
    //   id: 4,
    //   title: "Mobile Fitness App",
    //   description: "Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
    //   imgUrl: upcomingproject,
    //   imgWidth: "180px",
    //   imgHeight: "180px",
    //   date: "2024-02-10",
    //   link: "https://github.com/yourusername/fitness-app",
    //   demoLink: null,
    //   documentation: null,
    //   status: "Planned",
    //   technologies: ["React Native", "Firebase", "Redux", "Expo"],
    //   categories: ["Mobile Development", "Software Engineering"]
    // },
    // {
    //   id: 5,
    //   title: "Crypto Trading Bot",
    //   description: "Automated cryptocurrency trading bot with machine learning algorithms for market prediction and risk management.",
    //   imgUrl: upcomingproject,
    //   imgWidth: "180px",
    //   imgHeight: "180px",
    //   date: "2023-09-22",
    //   link: "https://github.com/yourusername/crypto-bot",
    //   demoLink: null,
    //   documentation: null,
    //   status: "Completed",
    //   technologies: ["Python", "TensorFlow", "Binance API", "Docker", "PostgreSQL"],
    //   categories: ["AI", "Software Engineering", "Data Analysis"]
    // }
  ];

  // Sort projects by date (most recent first)
  const sortedProjects = projectsAll.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <p>Throughout my journey, I have created multiple projects. Below, I have mentioned my most <span>notable projects</span>. Each project showcases different technologies and problem-solving approaches.</p>
            <div className="project-bx-all">
              <ProjectsCarousel projects={sortedProjects} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;