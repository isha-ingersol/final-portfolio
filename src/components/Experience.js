import React, { useState, useMemo } from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Degree from "../assets/files/IshaIngersolAwardCertificate.pdf";
import TeachingReport from "../assets/files/TCSiSFinalReportwithImages.pdf";
import "../css-components/Experience.css";

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  // Sample data - replace with your actual experiences
  const experiences = [
    {
      id: 1,
      title: "Software Engineering Intern (Backend)",
      company: "blackNgreen",
      location: "Remote",
      startDate: "2023-12",
      endDate: "2024-02",
      type: "internship",
      description: [
        "- Formulated and developed 20+ AI avatars using generative models, enhancing UI and boosting user engagement by 10%. ",
        "- Leveraged multimodal image search with embeddings and vector databases, improving data retrieval efficiency by 15%. ",
        "- Mastered GPT and LLMs, including development and 3 optimisation strategies: fine-tuning, RAG, and hybrid approaches.",
      ],
      skills: ["Python", "GPT", "LLM", "RAG", "Generative Models"],
      link: "https://www.blackngreen.com/",
    },
    {
      id: 2,
      title: "Software Engineering Intern (Frontend)",
      company: "blackNgreen",
      location: "Remote",
      startDate: "2023-07",
      endDate: "2023-09",
      type: "internship",
      description: [
        "- Integrated 3+ core features for an AI assistant using JavaScript XML, TypeScript, and Material UI.",
        "- Improved UX by implementing microphone and file upload features, increasing user interaction and engagement by 25%.",
      ],
      skills: ["Python", "GPT", "LLM", "RAG", "Generative Models"],
      link: "https://www.blackngreen.com/",
    },
    {
      id: 3,
      title: "MEng in Computer Science and Software Engineering",
      company: "University of Birmingham",
      location: "Birmingham, United Kingdom",
      startDate: "2021-09",
      endDate: "2025-06",
      type: "education",
      description: [
        "Graduated with First Class Honours in an Integrated Master’s (MEng) in Computer Science and Software Engineering",
        "Relevant coursework: Data Structures and Algorithms, Data Science, Software Engineering, Machine Learning, Database Systems, Full-Stack Application Development, Web Development.",
      ],
      skills: [
        "Java",
        "Python",
        "C++",
        "Data Structures",
        "Algorithms",
        "Database Design",
      ],
      link: Degree,
    },
    {
      id: 4,
      title: "Partnership Lead for the Entrepreneurship World Cup 2022",
      company: "Startupscale360",
      location: "Dubai, United Arab Emirates",
      startDate: "2022-07",
      endDate: "2022-10",
      type: "internship",
      description: [
        "- Streamlined sponsorship management by engaging with 50+ potential sponsors, securing the success of the competition.",
        "- Identified and vetted 25+ promising startups through social media, improving the event's overall competitiveness.",
        "- Delivered 5 strategic presentations to the Steering Committee, reducing meeting time by 25%.",
      ],
      skills: ["React", "JavaScript", "CSS", "HTML", "Git", "Figma"],
      link: "https://startupscale360.com/",
    },
    {
      id: 5,
      title: "Computing and Media Teacher",
      company: "The Blue Coat School",
      location: "Birmingham, United Kingdom",
      startDate: "2025-02",
      endDate: "2025-03",
      type: "volunteer",
      description: [
        "- Co-led 8 creative coding workshops to Years 1–6 using Scratch and game-based learning (PacMan, Pong, Whack-a-Mole, Space Invaders), enabling student-led teaching by final session.",
        "- Supported classroom activities in podcasting, animation, and digital quizzes, reducing project timelines by 33%.",
        "- Built strong rapport with students and staff, leading to increased participation, peer learning, and positive feedback.",
      ],
      skills: ["React", "Firebase", "JavaScript", "Material-UI"],
      link: TeachingReport,
    },
    // {
    //   id: 6,
    //   title: "Teaching Assistant",
    //   company: "University Name",
    //   location: "City, State",
    //   startDate: "2024-01",
    //   endDate: "2024-05",
    //   type: "work",
    //   description:
    //     "Assisted professor in CS101 course. Conducted lab sessions and helped students with programming assignments. Mentored over 50 students and improved average class performance.",
    //   skills: ["Python", "Teaching", "Problem Solving", "Communication"],
    //   link: null,
    // },
  ];

  // Sort experiences by start date (most recent first)
  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      const dateA = new Date(a.startDate + "-01");
      const dateB = new Date(b.startDate + "-01");
      return dateB - dateA;
    });
  }, [experiences]);

  const formatDate = (dateString) => {
    const [year, month] = dateString.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const getTypeColor = (type) => {
    const colors = {
      education: "education-tag",
      internship: "internship-tag",
      work: "work-tag",
      volunteer: "volunteer-tag",
    };
    return colors[type] || "default-tag";
  };

  const getTypeIcon = (type) => {
    const icons = {
      education: "🎓",
      internship: "💼",
      work: "👔",
      volunteer: "🤝",
    };
    return icons[type] || "📝";
  };

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const isOngoing = (endDate) => {
    const today = new Date();
    const end = new Date(endDate + "-01");
    return end > today;
  };

  return (
    <div className="experience" id="experience">
      <div className="experience-container" id="experience">
        <div className="experience-header">
          <h2>EXPERIENCE</h2>
            <p> A timeline of my education, work experiences, and projects. Each of which has shaped my skills and passion for technology.</p>
        </div>

        <div className="timeline-wrapper">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {sortedExperiences.map((experience, index) => (
            <div key={experience.id} className="timeline-item">
              {/* Timeline dot */}
              <div className="timeline-dot"></div>

              {/* Content card */}
              <div className="experience-card">
                <div className="card-content">
                  {/* Header */}
                  <div className="card-header">
                    <div className="header-main">
                      <div className="type-info">
                        <span className="type-icon">
                          {getTypeIcon(experience.type)}
                        </span>
                        <span
                          className={`type-tag ${getTypeColor(
                            experience.type
                          )}`}
                        >
                          {experience.type.charAt(0).toUpperCase() +
                            experience.type.slice(1)}
                        </span>
                      </div>
                      <h3 className="position-title">{experience.title}</h3>
                      <h4 className="company-name">{experience.company}</h4>
                    </div>

                    <div className="date-location">
                      <div className="date-info">
                        <Calendar className="icon" />
                        <span>
                          {formatDate(experience.startDate)} -{" "}
                          {isOngoing(experience.endDate) ? (
                            <span className="ongoing">Present</span>
                          ) : (
                            formatDate(experience.endDate)
                          )}
                        </span>
                      </div>
                      <div className="location-info">
                        <MapPin className="icon" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="skills-container">
                    {experience.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Description preview */}
                  <div className="description">
                    {Array.isArray(experience.description) ? (
                      expandedItems.has(experience.id) ? (
                        experience.description.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))
                      ) : (
                        <p>{experience.description[0]}</p>
                      ) // Only show first bullet when collapsed
                    ) : (
                      <p>
                        {expandedItems.has(experience.id)
                          ? experience.description
                          : `${experience.description.substring(0, 120)}${
                              experience.description.length > 120 ? "..." : ""
                            }`}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="card-actions">
                    <div className="action-buttons">
                      {(Array.isArray(experience.description) ||
                        experience.description.length > 120) && (
                        <button
                          onClick={() => toggleExpanded(experience.id)}
                          className="action-button"
                        >
                          {expandedItems.has(experience.id) ? (
                            <>
                              <ChevronUp className="icon" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="icon" />
                              Read More
                            </>
                          )}
                        </button>
                      )}

                      {experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button link-button"
                        >
                          <ExternalLink className="icon" />
                          Learn More
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        {/* <div className="stats-section">
        <h2 className="stats-title">Experience Summary</h2>
        <div className="stats-grid">
          {Object.entries(
            sortedExperiences.reduce((acc, exp) => {
              acc[exp.type] = (acc[exp.type] || 0) + 1;
              return acc;
            }, {})
          ).map(([type, count]) => (
            <div key={type} className="stat-item">
              <div className="stat-icon">{getTypeIcon(type)}</div>
              <div className="stat-count">{count}</div>
              <div className="stat-label">{type}</div>
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Experience;
