import React, { useState, useEffect } from 'react';
import school1 from './School.jpg';
import school2 from './School1jpg.jpg';
import school3 from './School2.jpg';
import school4 from './School3.jpg';

const Index = () => {
  const images = [school1, school2, school3, school4];
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const nextImage = () => {
    setFadeTransition(false);
    setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setFadeTransition(true);
    }, 500);
  };

  const prevImage = () => {
    setFadeTransition(false);
    setTimeout(() => {
      setCurrentImage((prevImage) =>
        prevImage === 0 ? images.length - 1 : prevImage - 1
      );
      setFadeTransition(true);
    }, 500);
  };

  const handleIndicatorClick = (index) => {
    setFadeTransition(false);
    setTimeout(() => {
      setCurrentImage(index);
      setFadeTransition(true);
    }, 500);
  };

  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gray-900 py-20 shadow-2xl">
      {/* Background Image */}
      <img
        src={images[currentImage]}
        loading="lazy"
        alt="School"
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out transform ${
          fadeTransition ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
        }`}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>

      {/* Cascading Images */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl z-20 space-y-4">
        <div className="relative">
          <img
            src={school2}
            loading="lazy"
            alt="School"
            className="absolute left-10 top-8 h-36 w-36 blur-sm object-cover shadow-xl transform rotate-3 transition-transform duration-500 hover:scale-105"
          />
          <img
            src={school3}
            loading="lazy"
            alt="School"
            className="absolute left-20 top-14 h-36 w-36 blur-sm object-cover shadow-xl transform rotate-6 transition-transform duration-500 hover:scale-105"
          />
          <img
            src={school4}
            loading="lazy"
            alt="School"
            className="absolute left-32 top-20 h-36 w-36 blur-sm object-cover shadow-xl transform rotate-9 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-30 text-center text-white transition-opacity duration-700 ease-in-out">
        <p className="mb-4 text-lg font-light tracking-widest uppercase">
          Proudly Presenting
        </p>
        <h1 className="text-4xl font-bold uppercase tracking-wide sm:text-5xl md:text-6xl">
          Govt. Hr. Sec. School Ajgaiva Jungle, Basti
        </h1>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 p-2 text-white bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 p-2 text-white bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 flex space-x-2 z-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentImage
                ? 'bg-white'
                : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Index;
