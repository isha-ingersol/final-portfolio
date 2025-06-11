import React, { useRef, useState, useEffect } from "react";
import "../css-components/ProjectCarousel.css";

const ProjectsCarousel = ({ projects }) => {
  const carouselRef = useRef(null);
  const cardRef = useRef(null); // ref for measuring card width

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollAmount, setScrollAmount] = useState(300); // default fallback

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
        behaviour: "smooth"
      });
    }
  };

  useEffect(() => {
    updateScrollAmount();
    updateScrollButtons();

    const container = carouselRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollAmount); // recalc on resize

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollAmount);
      };
    }
  }, []);

  return (
    <section className="carousel-wrapper">
      <div className="carousel-container">
        <div className="carousel-track" ref={carouselRef}>
          {projects.map((card, index) => (
            <div
              className="carousel-card"
              key={index}
              ref={index === 0 ? cardRef : null} // measure only first card width
            >
              <div className="carousel-card-content">
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  style={{
                    width: card.imgWidth,
                    height: card.imgHeight,
                    objectFit: "contain",
                    marginBottom: "1rem"
                  }}
                />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              {card.buttonText && (
                <button className="carousel-card-button">
                  {card.buttonText}
                </button>
              )}
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
    </section>
  );
};

export default ProjectsCarousel;
