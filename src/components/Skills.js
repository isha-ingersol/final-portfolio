import React from 'react';
import SkillsCarousel from './SkillsCarousel';
import '../css-components/Skills.css';

// Images of the Skills
import java from "../assets/logos/java-logo.svg";
import python from "../assets/logos/python-logo.svg";
import postgresql from "../assets/logos/postgresql.svg";
import mongodb from "../assets/logos/mongodb-icon.svg";
import JavaScript from "../assets/logos/logo-javascript.svg";
import TailwindCSS from "../assets/logos/tailwind-css-2.svg";
import TypeScript from "../assets/logos/typescript.svg";
import ReactJS from "../assets/logos/react-2.svg";
import NodeJS from "../assets/logos/nodejs-icon.svg";
import Bootstrap from "../assets/logos/bootstrap-4-logo.svg";
import PyTorch from "../assets/logos/pytorch-icon.svg";
import TensorFlow from "../assets/logos/tensorflow-2.svg";
import Git from "../assets/logos/git-icon.svg";
import Figma from "../assets/logos/figma.svg";
import Agile from "../assets/logos/agile.svg";
import MS365 from "../assets/logos/microsoft-5.svg";
import nlp from "../assets/logos/NLP-icon.svg";
import excel from "../assets/logos/microsoft-excel-icon.svg";

const programminglanguagesanddatabases = [
  { name: 'Java', imgSrc: java, altText: 'Java Logo' },
  { name: 'Python', imgSrc: python, altText: 'Python Logo' },
  { name: 'TypeScript', imgSrc: TypeScript, altText: 'TypeScript' },
  { name: 'JavaScript', imgSrc: JavaScript, altText: 'JavaScript' },
  { name: 'PostgreSQL', imgSrc: postgresql, altText: 'PostgreSQL (SQL) Database Management System (DBMS)' },
  { name: 'MongoDB', imgSrc: mongodb, altText: 'MongoDB DBMS' },
];

const frameworksAndLibraries = [
  { name: 'TensorFlow', imgSrc: TensorFlow, altText: 'TensorFlow' },
  { name: 'PyTorch', imgSrc: PyTorch, altText: 'PyTorch' },
  { name: 'Keras [CHANGE LOGO]', imgSrc: Agile, altText: 'Keras' },
  { name: 'Scikit-learn [CHANGE LOGO]', imgSrc: MS365, altText: 'Scikit-learn' },
  { name: 'NumPy [CHANGE LOGO]', imgSrc: MS365, altText: 'NumPy' },
  { name: 'Pandas [CHANGE LOGO]', imgSrc: MS365, altText: 'Pandas' },
];

const fullStackToolsAndPlatforms = [
  { name: 'ReactJS', imgSrc: ReactJS, altText: 'ReactJS/React.JS' },
  { name: 'NodeJS', imgSrc: NodeJS, altText: 'NodeJS/Node.JS' },
  { name: 'Bootstrap', imgSrc: Bootstrap, altText: 'React Bootstrap' },
  { name: 'TailwindCSS', imgSrc: TailwindCSS, altText: 'TailwindCSS' },
  { name: 'Figma', imgSrc: Figma, altText: 'Figma (No Code Web Development)' },
  { name: 'Postman [CHANGE LOGO]', imgSrc: Git, altText: 'Postman' },
  { name: 'Docker [CHANGE LOGO]', imgSrc: Git, altText: 'Docker' },
  { name: 'Git', imgSrc: Git, altText: 'Git (GitHub and GitLab)' },
];

const conceptsAndPractices = [
  { name: 'ML/AI', imgSrc: nlp, altText: 'ML/AI' },
  { name: 'Computer Vision [CHANGE LOGO]', imgSrc: TensorFlow, altText: 'Computer Vision' },
  { name: 'Agile Development', imgSrc: Agile, altText: 'Agile Development (Project Management, Product Management)' },
  { name: 'CI/CD [CHANGE LOGO]', imgSrc: Git, altText: 'CI/CD' },
  { name: 'Cloud Computing [CHANGE LOGO]', imgSrc: Git, altText: 'Cloud Computing' },
];

const dataSkills = [
  { name: 'Data Analysis [CHANGE LOGO]', imgSrc: Git, altText: 'Data Analysis' },
  { name: 'Business Analytics [CHANGE LOGO]', imgSrc: Git, altText: 'Business Analysis' },
  { name: 'Tableau [CHANGE LOGO]', imgSrc: Git, altText: 'Tableau' },
  { name: 'PowerBI [CHANGE LOGO]', imgSrc: Git, altText: 'Power BI' },
  { name: 'Advanced MS Excel', imgSrc: excel, altText: 'MS Excel Logo' },
];

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 style={{ marginTop: "-60px", textAlign: "center" }}>SKILLS</h2>
            <p style={{ marginTop: "10px", textAlign: "center" }}>
              Over the years, I have developed a <span>unique skillset</span>, which I have mentioned in categories below.
            </p>

            <div className="accordion">

              <div className="accordion-content programming-languages-and-databases">
                <div className="accordion-title programming-languages-and-databases">
                  <h4 style={{ textAlign: "center" }}>Programming Languages</h4>
                </div>
                <SkillsCarousel skills={programminglanguagesanddatabases} />
              </div>

              <br />

              <div className="accordion-content frameworks-and-libraries">
                <div className="accordion-title frameworks-and-libraries">
                  <h4 style={{ textAlign: "center" }}>Frameworks and Libraries</h4>
                </div>
                <SkillsCarousel skills={frameworksAndLibraries} />
              </div>

              <br />

              <div className="accordion-content full-stack-tools-and-platforms">
                <div className="accordion-title full-stack-tools-and-platforms">
                  <h4 style={{ textAlign: "center" }}>Full Stack Tools and Platforms</h4>
                </div>
                <SkillsCarousel skills={fullStackToolsAndPlatforms} />
              </div>

              <br />

              <div className="accordion-content concepts-and-practices">
                <div className="accordion-title concepts-and-practices">
                  <h4 style={{ textAlign: "center" }}>Concepts and Practices</h4>
                </div>
                <SkillsCarousel skills={conceptsAndPractices} />
              </div>

              <br />

              <div className="accordion-content data-skills">
                <div className="accordion-title data-skills">
                  <h4 style={{ textAlign: "center" }}>Data Skills</h4>
                </div>
                <SkillsCarousel skills={dataSkills} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;