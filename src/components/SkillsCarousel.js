import React, { useState, useRef, useEffect } from 'react';
import '../css-components/SkillsCarousel.css';

const SkillsCarousel = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 6;
  const scrollRef = useRef(null);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const itemWidth = containerWidth / itemsToShow;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(currentIndex - 5, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 5, skills.length - itemsToShow);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="skills-carousel-container">
      <div className="skills-carousel" ref={scrollRef}>
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.imgSrc} alt={skill.altText} />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="skills-carousel-buttons">
        <button
          onClick={handlePrev}
          className="skills-carousel-button"
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="skills-carousel-button"
          disabled={currentIndex >= skills.length - itemsToShow}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default SkillsCarousel;
