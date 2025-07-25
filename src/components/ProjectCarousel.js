import React, { useRef, useState, useEffect } from "react";
import "../css-components/ProjectCarousel.css";

const ProjectsCarousel = ({ projects }) => {
  const carouselRef = useRef(null);
  const cardRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollAmount, setScrollAmount] = useState(300);

  // Calculate how many cards fully fit and update scrollAmount accordingly
  const updateScrollAmount = () => {
    if (carouselRef.current && cardRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      const cardWidth = cardRef.current.offsetWidth;
      const visibleCount = Math.floor(containerWidth / cardWidth) || 1;
      setScrollAmount(visibleCount * cardWidth);
    }
  };

  // Update scroll buttons' enabled state
  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  // Handle external link clicks
  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    updateScrollAmount();
    updateScrollButtons();

    const container = carouselRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollAmount);

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollAmount);
      };
    }
  }, []);

  return (
      <div className="carousel-container">
        <div className="carousel-track" ref={carouselRef}>
          {projects.map((project, index) => (
            <div
              className="carousel-card"
              key={project.id}
              ref={index === 0 ? cardRef : null}
            >
              <div className="carousel-card-header">
                <div className="project-date">{formatDate(project.date)}</div>
                <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </div>
              </div>

              <div className="carousel-card-content">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  style={{
                    width: project.imgWidth,
                    height: project.imgHeight,
                    objectFit: "contain",
                    marginBottom: "1rem"
                  }}
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Category Tags */}
                <div className="project-tags-section">
                  <div className="tag-group">
                    <span className="tag-label">Category:</span>
                    <div className="tags-container">
                      {project.categories?.map((category, idx) => (
                        <span key={idx} className="tag category-tag">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="tag-group">
                    <span className="tag-label">Technologies:</span>
                    <div className="tags-container">
                      {project.technologies?.map((tech, idx) => (
                        <span key={idx} className="tag technology-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="carousel-card-actions">
                {project.link && (
                  <button 
                    className="carousel-card-button primary"
                    onClick={() => handleLinkClick(project.link)}
                  >
                    View Code
                  </button>
                )}
                {project.demoLink && (
                  <button 
                    className="carousel-card-button secondary"
                    onClick={() => handleLinkClick(project.demoLink)}
                  >
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button
            className="carousel-button prev"
            onClick={() => handleScroll("prev")}
            disabled={!canScrollLeft}
          >
            ←
          </button>
          <button
            className="carousel-button next"
            onClick={() => handleScroll("next")}
            disabled={!canScrollRight}
          >
            →
          </button>
        </div>
      </div>
  );
};

export default ProjectsCarousel;