import React, { useState, useEffect } from 'react';
import './carousel.scss'; 

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const images = [
    'https://picsum.photos/id/1015/400/800',
    'https://picsum.photos/id/1016/400/800',
    'https://picsum.photos/id/1018/400/800',
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel__slides">
        {images.map((src, i) => (
          <div 
            className={`carousel__slide ${i === index ? 'active' : ''}`} 
            key={i}
            style={{ 
              opacity: i === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            <img src={src} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>

      <div className="carousel__dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel__dot ${i === index ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
