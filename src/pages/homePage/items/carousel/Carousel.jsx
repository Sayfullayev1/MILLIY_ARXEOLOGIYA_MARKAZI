import React, { useState, useEffect } from 'react';
import './carousel.scss'; 

export default function Carousel() {
  const [index, setIndex] = useState(0);
  // const images = [
  //   'https://picsum.photos/id/1015/400/800',
  //   'https://picsum.photos/id/1016/400/800',
  //   'https://picsum.photos/id/1018/400/800',
  // ];

  const images = [
    'https://botany.uz/wp-content/uploads/2021/08/Eremurus_aitchisonii.jpg',
    'https://botany.uz/wp-content/uploads/2021/08/Acantholimon_litvinovii.jpg',
    'https://botany.uz/wp-content/uploads/2021/08/Acantholimon_litvinovii.jpg',
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page__carousel">
      <div className="home-page__carousel__slides">
        {images.map((src, i) => (
          <div 
            className={`home-page__carousel__slide ${i === index ? 'home-page__carousel__slide__active' : ''}`} 
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

      <div className="home-page__carousel__dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`home-page__carousel__dot ${i === index ? 'home-page__carousel__dot-active' : ''}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
