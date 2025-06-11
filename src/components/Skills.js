import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
// Images of the Skills
import java from "../assets/logos/java-logo.svg";
import python from "../assets/logos/python-logo.svg";
import postgresql from "../assets/logos/postgresql.svg";
import mongodb from "../assets/logos/mongodb-icon.svg";
import WebDev from "../assets/logos/web-dev.svg";
import C from "../assets/logos/c.svg";
import CPlusPlus from "../assets/logos/c++.svg";
import JavaScript from "../assets/logos/logo-javascript.svg";
import Angular from "../assets/logos/angular-logo.svg";
import HTML from "../assets/logos/html-5.svg";
import CSS from "../assets/logos/css-3.svg";
import TailwindCSS from "../assets/logos/tailwind-css-2.svg";
import TypeScript from "../assets/logos/typescript.svg";
import ReactJS from "../assets/logos/react-2.svg";
import NodeJS from "../assets/logos/nodejs-icon.svg";
import Bootstrap from "../assets/logos/bootstrap-4-logo.svg";
// import APIs from "../assets/logos/apis.svg";
import PyTorch from "../assets/logos/pytorch-icon.svg";
import TensorFlow from "../assets/logos/tensorflow-2.svg";
import Git from "../assets/logos/git-icon.svg";
import WordPress from "../assets/logos/wordpress-icon.svg";
import Figma from "../assets/logos/figma.svg";
import Scratch from "../assets/logos/scratch-cat.svg";
import Haskell from "../assets/logos/haskell.svg";
import Agile from "../assets/logos/agile.svg";
import MS365 from "../assets/logos/microsoft-5.svg";
import nlp from "../assets/logos/NLP-icon.svg";
import excel from "../assets/logos/microsoft-excel-icon.svg";


import { Type } from 'react-bootstrap-icons';
import '../css-components/Skills.css';

const programminglanguagesanddatabases = [
  {
    name: 'Java',
    imgSrc: java,
    altText: 'Java Logo'
  },
  {
    name: 'Python',
    imgSrc: python,
    altText: 'Python Logo'
  },
  {
    name: 'TypeScript',
    imgSrc: TypeScript,
    altText: 'TypeScript'
  },
  {
    name: 'JavaScript',
    imgSrc: JavaScript,
    altText: 'JavaScript'
  },
  {
    name: 'PostgreSQL',
    imgSrc: postgresql,
    altText: 'PostgreSQL (SQL) Database Management System (DBMS)'
  },
  {
    name: 'MongoDB',
    imgSrc: mongodb,
    altText: 'MongoDB DBMS'
  },
  // {
  //   name: 'C',
  //   imgSrc: C,
  //   altText: 'C (Programming Language)'
  // },
  // {
  //   name: 'C++',
  //   imgSrc: CPlusPlus,
  //   altText: 'C++ (Programming Language)'
  // },
  // {
  //   name: 'Haskell',
  //   imgSrc: Haskell,
  //   altText: 'Haskell (Programming Language)'
  // },
];

const frameworksAndLibraries = [
  {
    name: 'TensorFlow',
    imgSrc: TensorFlow,
    altText: 'TensorFlow'
  },
  {
    name: 'PyTorch',
    imgSrc: PyTorch,
    altText: 'PyTorch'
  },
  {
    name: 'Keras [CHANGE LOGO]',
    imgSrc: Agile,
    altText: 'Keras'
  },
  {
    name: 'Scikit-learn [CHANGE LOGO]',
    imgSrc: MS365,
    altText: 'Scikit-learn'
  },
  {
    name: 'NumPy [CHANGE LOGO]',
    imgSrc: MS365,
    altText: 'NumPy'
  },
  {
    name: 'Pandas [CHANGE LOGO]',
    imgSrc: MS365,
    altText: 'Pandas'
  },
];

const fullStackToolsAndPlatforms = [
  {
    name: 'ReactJS',
    imgSrc: ReactJS,
    altText: 'ReactJS/React.JS'
  },
  {
    name: 'NodeJS',
    imgSrc: NodeJS,
    altText: 'NodeJS/Node.JS'
  },
  {
    name: 'Bootstrap',
    imgSrc: Bootstrap,
    altText: 'React Bootstrap'
  },
  {
    name: 'TailwindCSS',
    imgSrc: TailwindCSS,
    altText: 'TailwindCSS'
  },
  {
    name: 'Figma',
    imgSrc: Figma,
    altText: 'Figma (No Code Web Development)'
  },
  {
    name: 'Postman [CHANGE LOGO]',
    imgSrc: Git,
    altText: 'Postman'
  },
  {
    name: 'Docker [CHANGE LOGO]',
    imgSrc: Git,
    altText: 'Docker'
  },
  {
    name: 'Git',
    imgSrc: Git,
    altText: 'Git (GitHub an GitLab)'
  },

  // {
  //   name: 'APIs',
  //   imgSrc: APIs,
  //   altText: 'APIs for Web Development'
  // },
  // {
  //   name: 'HTML',
  //   imgSrc: HTML,
  //   altText: 'HTML'
  // },
  // {
  //   name: 'CSS',
  //   imgSrc: CSS,
  //   altText: 'CSS'
  // },
  // {
  //   name: 'JavaScript',
  //   imgSrc: JavaScript,
  //   altText: 'JavaScript'
  // },
  // {
  //   name: 'AngularJS',
  //   imgSrc: Angular,
  //   altText: 'AngularJS/Angular.JS'
  // },
  // {
  //   name: 'WordPress',
  //   imgSrc: WordPress,
  //   altText: 'Wordpress (No Code Web Development)'
  // },
];

const conceptsAndPractices = [
  {
    name: 'Machine Learning/Artificial Intelligence',
    imgSrc: nlp,
    altText: 'Machine Learning/AI'
  },
  {
    name: 'Computer Vision [CHANGE LOGO]',
    imgSrc: TensorFlow,
    altText: 'Computer Vision'
  },
  {
    name: 'Agile Development',
    imgSrc: Agile,
    altText: 'Agile Development (Project Management, Product Management)'
  },
  {
    name: 'CI/CD [CHANGE LOGO]',
    imgSrc: Git,
    altText: 'CI/CD'
  },
  {
    name: 'Cloud Computing [CHANGE LOGO]',
    imgSrc: Git,
    altText: 'Clound Computing'
  },
];

const dataSkills = [
  {
    name: 'Data Analysis [CHANGE LOGO]',
    imgSrc: Git,
    altText: 'Data Analysis'
  },
  {
    name: 'Business Analytics [CHANGE LOGO]',
    imgSrc: Git,
    altText: 'Business Analytics'
  },
  {
    name: 'Tableau [CHANGE LOGO]',
    imgSrc: Git,
    altText: 'Tableau'
  },
  {
    name: 'PowerBI [CHANGE LOGO]',
    imgSrc: Git,
    altText: 'Power BI'
  },
  {
    name: 'Advanced MS Excel',
    imgSrc: excel,
    altText: 'MS Excel Logo'
  },
];

const Skills = () => {

  const programmingLanguagesAndDatabasesSettings = { itemsPerRow: 6, }
  const frameworksAndLibrariesSettings = { itemsPerRow: 6, }
  const fullStackToolsAndPlatformsSettings = { itemsPerRow: 6, }
  const conceptsAndPracticesSettings = { itemsPerRow: 6, }
  const dataSkillsSettings = { itemsPerRow: 6, }

  // Define the createRows function
function createRows(items, settings) {
  const rows = [];
  for (let i = 0; i < items.length; i += settings.itemsPerRow) {
    rows.push(items.slice(i, i + settings.itemsPerRow));
  }
  return rows;
}

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <h2 style={{ marginTop: "10px", textAlign: "center",  marginTop: "-60px"}}>SKILLS</h2>
              <p style={{ marginTop: "10px", textAlign: "center"}}>Over the years, I have developed a <span>unique skillset</span>, which I have mentioned in categories below.</p>
              
              <div class="accordion">
                  <div class="accordion-content programming-languages-and-databases" {...programmingLanguagesAndDatabasesSettings}>
                  <div class="accordion-title programming-languages-and-databases"><h4 style={{textAlign: "center"}}>Programming Languages</h4></div>
                    {createRows(programminglanguagesanddatabases, programmingLanguagesAndDatabasesSettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / programmingLanguagesAndDatabasesSettings.itemsPerRow}`}>
                            <div className="item" style={{ marginBottom: "25px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
                              <img src={skill.imgSrc} alt={skill.name} style={{ maxWidth: "150px", padding: "10px" }} />
                              <div className="skill-name" style={{display: "grid", alignContent:"center", justifyContent:"center", marginTop:"0%"}}>{skill.name}</div>
                            </div>
                          </div>
                        ))}
                      </div> 
                    ))}
                  </div>
                
                <br></br>

                <div class="accordion-content frameworks-and-libraries" {...frameworksAndLibrariesSettings}>
                <div class="accordion-title frameworks-and-libraries"><h4 style={{textAlign: "center"}}>Frameworks and Libraries</h4></div>
                    {createRows(frameworksAndLibraries, frameworksAndLibrariesSettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / frameworksAndLibrariesSettings.itemsPerRow}`}>
                            <div className="item" style={{ marginBottom: "50px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
                              <img src={skill.imgSrc} alt={skill.name} style={{ maxWidth: "150px", padding: "10px" }} />
                              <div className="skill-name" style={{display: "grid", alignContent:"center", justifyContent:"center", marginTop:"1%"}}>{skill.name}</div>
                            </div>
                          </div>
                        ))}
                      </div> 
                    ))}
                </div>
                  
                <br></br>

                <div class="accordion-content full-stack-tools-and-platforms" {...fullStackToolsAndPlatformsSettings}>
                <div class="accordion-title full-stack-tools-and-platforms"><h4 style={{textAlign: "center"}}>Full Stack Tools and Platforms</h4></div>
                    {createRows(fullStackToolsAndPlatforms, fullStackToolsAndPlatformsSettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / fullStackToolsAndPlatformsSettings.itemsPerRow}`}>
                            <div className="item" style={{ marginBottom: "50px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
                              <img src={skill.imgSrc} alt={skill.name} style={{ maxWidth: "150px", padding: "10px" }} />
                              <div className="skill-name">{skill.name}</div>
                            </div>
                          </div>
                        ))}
                      </div> 
                    ))}
                </div>

                <br></br>

                <div class="accordion-content concepts-and-practices" {...conceptsAndPracticesSettings}>
                <div class="accordion-title concepts-and-practices"><h4 style={{textAlign: "center"}}>Concepts and Practices</h4></div>
                    {createRows(conceptsAndPractices, conceptsAndPracticesSettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / conceptsAndPracticesSettings.itemsPerRow}`}>
                            <div className="item" style={{ marginBottom: "50px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
                              <img src={skill.imgSrc} alt={skill.name} style={{ maxWidth: "150px", padding: "10px" }} />
                              <div className="skill-name">{skill.name}</div>
                            </div>
                          </div>
                        ))}
                      </div> 
                    ))}
                </div>

                <br></br>

                <div class="accordion-content data-skills" {...dataSkillsSettings}>
                <div class="accordion-title data-skills"><h4 style={{textAlign: "center"}}>Data Skills</h4></div>
                    {createRows(dataSkills, dataSkillsSettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / dataSkillsSettings.itemsPerRow}`}>
                            <div className="item" style={{ marginBottom: "50px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
                              <img src={skill.imgSrc} alt={skill.name} style={{ maxWidth: "150px", padding: "10px" }} />
                              <div className="skill-name">{skill.name}</div>
                            </div>
                          </div>
                        ))}
                      </div> 
                    ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;