'use client';
import React, { useState, useEffect } from 'react';

const images: string[] = [
  '/cycling gloves.png',
  '/driving gloves.png',
  '/Machenical gloves.png',
  '/motorcycle gloves.png',
  '/Skiing gloves.png',
  '/Wieght Lifting gloves.png',
  '/working gloves.png',
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const length: number = images.length;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = (): void => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = (): void => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative h-[35rem] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {index === current && (
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSlider;
