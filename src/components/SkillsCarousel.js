import React, { useEffect, useRef, useState } from 'react';
import '../css-components/SkillsCarousel.css';

const SkillsCarousel = ({ skills }) => {
  const carouselRef = useRef(null);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        setItemsToShow(3);
      } else if (width <= 1024) {
        setItemsToShow(4);
      } else {
        setItemsToShow(6);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  useEffect(() => {
    // Compute scroll amount per step (based on item width)
    if (carouselRef.current) {
      const item = carouselRef.current.querySelector('.skill-item');
      if (item) {
        const itemWidth = item.offsetWidth + parseFloat(getComputedStyle(item).marginRight);
        setScrollAmount(itemWidth * (itemsToShow - 1));
      }
    }
  }, [itemsToShow, skills]);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behaviour: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behaviour: 'smooth',
      });
    }
  };

  return (
    <div className="skills-carousel-container">
      <div className="skills-carousel-wrapper" ref={carouselRef}>
        <div className="skills-carousel">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.imgSrc} alt={skill.altText} />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-carousel-buttons">
        <button onClick={handlePrev} className="skills-carousel-button">
          &#8592;
        </button>
        <button onClick={handleNext} className="skills-carousel-button">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default SkillsCarousel;
