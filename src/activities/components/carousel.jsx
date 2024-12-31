import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      title: "Slide 1 Title",
      description: "This is a description for slide 1.",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      title: "Slide 2 Title",
      description: "This is a description for slide 2.",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      title: "Slide 3 Title",
      description: "This is a description for slide 3.",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
      title: "Slide 4 Title",
      description: "This is a description for slide 4.",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img src={slide.src} alt={slide.title} />
            <div className="caption">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="next" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
