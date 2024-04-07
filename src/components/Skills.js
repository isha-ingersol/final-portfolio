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

import { Type } from 'react-bootstrap-icons';
import '../css-components/Skills.css';

const programminglanguages = [
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
    name: 'C',
    imgSrc: C,
    altText: 'C (Programming Language)'
  },
  {
    name: 'C++',
    imgSrc: CPlusPlus,
    altText: 'C++ (Programming Language)'
  },
  {
    name: 'PostgreSQL',
    imgSrc: postgresql,
    altText: 'PostgreSQL (SQL) Database Management System (DBMS)'
  },
  {
    name: 'Haskell',
    imgSrc: Haskell,
    altText: 'Haskell (Programming Language)'
  },
];

const webdevelopment = [
  {
    name: 'HTML',
    imgSrc: HTML,
    altText: 'HTML'
  },
  {
    name: 'CSS',
    imgSrc: CSS,
    altText: 'CSS'
  },
  {
    name: 'JavaScript',
    imgSrc: JavaScript,
    altText: 'JavaScript'
  },
  {
    name: 'AngularJS',
    imgSrc: Angular,
    altText: 'AngularJS/Angular.JS'
  },
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
    name: 'TypeScript',
    imgSrc: TypeScript,
    altText: 'TypeScript'
  },
  {
    name: 'TailwindCSS',
    imgSrc: TailwindCSS,
    altText: 'TailwindCSS'
  },
  {
    name: 'Bootstrap',
    imgSrc: Bootstrap,
    altText: 'React Bootstrap'
  },
  {
    name: 'MongoDB',
    imgSrc: mongodb,
    altText: 'MongoDB DBMS'
  },
//   {
//     name: 'APIs',
//     imgSrc: APIs,
//     altText: 'APIs for Web Development'
//   },
  {
    name: 'WordPress',
    imgSrc: WordPress,
    altText: 'Wordpress (No Code Web Development)'
  },
  {
    name: 'Figma',
    imgSrc: Figma,
    altText: 'Figma (No Code Web Development)'
  },
];

const aiml = [
  {
    name: 'PyTorch',
    imgSrc: PyTorch,
    altText: 'PyTorch'
  },
  {
    name: 'TensorFlow',
    imgSrc: TensorFlow,
    altText: 'TensorFlow'
  },
];

const othertechnicalskills = [
  {
    name: 'Git',
    imgSrc: Git,
    altText: 'Git (GitHub an GitLab)'
  },
  {
    name: 'Scratch',
    imgSrc: Scratch,
    altText: 'Scratch (by MIT)'
  },
  {
    name: 'Agile Development',
    imgSrc: Agile,
    altText: 'Agile Development (Project Management, Product Management)'
  },
  {
    name: 'Microsoft 365',
    imgSrc: MS365,
    altText: 'Microsoft Office, Microsoft Word, Microsoft PowerPoint, Microsoft Excel'
  },
];

const datascience = [
  {
    name: 'Git',
    imgSrc: Git,
    altText: 'Git (GitHub an GitLab)'
  },
  {
    name: 'Scratch',
    imgSrc: Scratch,
    altText: 'Scratch (by MIT)'
  },
];

const Skills = () => {

  const programminglanguagessettings = { itemsPerRow: 6, }
  const webdevelopmentsettings = { itemsPerRow: 6, }
  const aimlsettings = { itemsPerRow: 6, }
  const othertechnicalskillssettings = { itemsPerRow: 6, }
  const datasciencesettings = { itemsPerRow: 6, }

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
                <div class="box1">
                  <div class="accordion-title programming-languages"><h4 style={{textAlign: "center"}}>Programming Languages</h4></div>
                  <div class="accordion-content programming-languages" {...programminglanguagessettings}>
                    {createRows(programminglanguages, programminglanguagessettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / programminglanguagessettings.itemsPerRow}`}>
                            <div className="item" style={{ marginBottom: "25px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
                              <img src={skill.imgSrc} alt={skill.name} style={{ maxWidth: "150px", padding: "10px" }} />
                              <div className="skill-name" style={{display: "grid", alignContent:"center", justifyContent:"center", marginTop:"0%"}}>{skill.name}</div>
                            </div>
                          </div>
                        ))}
                      </div> 
                    ))}
                  </div>
                </div>
                
                <br></br>

                <div class="box2">
                  {/* <div class="accordion-title data-science"><span>Data Science Skills</span></div> */}
                  <div class="accordion-title data-science"><h4 style={{textAlign: "center"}}>Data Science Skills</h4></div>
                  <div class="accordion-content data-science" {...datasciencesettings}>
                    {createRows(datascience, datasciencesettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / datasciencesettings.itemsPerRow}`}>
                            <div className="item" style={{ marginBottom: "50px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
                              <img src={skill.imgSrc} alt={skill.name} style={{ maxWidth: "150px", padding: "10px" }} />
                              <div className="skill-name" style={{display: "grid", alignContent:"center", justifyContent:"center", marginTop:"1%"}}>{skill.name}</div>
                            </div>
                          </div>
                        ))}
                      </div> 
                    ))}
                  </div>
                </div>
                  
                <br></br>

                <div class="box3">
                  <div class="accordion-title"><h4 style={{textAlign: "center"}}>Web Development Skills</h4></div>
                  <div class="accordion-content web-development" {...webdevelopmentsettings}>
                    {createRows(webdevelopment, webdevelopmentsettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / webdevelopmentsettings.itemsPerRow}`}>
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

                <br></br>

                <div class="box4">
                  <div class="accordion-title"><h4 style={{textAlign: "center"}}>AI/ML Skills</h4></div>
                  <div class="accordion-content ai-ml" {...aimlsettings}>
                    {createRows(aiml, aimlsettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / aimlsettings.itemsPerRow}`}>
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

                <br></br>

                <div class="box5">
                  <div class="accordion-title"><h4 style={{textAlign: "center"}}>Other Technical Skills</h4></div>
                  <div class="accordion-content other-technical-skills" {...othertechnicalskillssettings}>
                    {createRows(othertechnicalskills, othertechnicalskillssettings).map((row, rowIndex) => (
                      <div key={rowIndex} className="row">
                        {row.map((skill, itemIndex) => (
                          <div key={itemIndex} className={`col-md-${12 / othertechnicalskillssettings.itemsPerRow}`}>
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
      </div>
    </section>
  );
};

export default Skills;