import React, { useState, useEffect } from 'react';
import school1 from './School.jpg';
import school2 from './School1jpg.jpg';
import school3 from '../Img/school.jpg';
import school4 from './School1jpg.jpg';

const Index = () => {
  const images = [school1, school2, school3, school4];
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeTransition(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFadeTransition(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="relative h-48 flex flex-1 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
        {/* Background Image */}
        <img
          src={images[currentImage]}
          loading="lazy"
          alt="School"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ease-in-out ${
            fadeTransition ? 'opacity-100' : 'opacity-50'
          }`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>

        {/* Cascading Images */}
        <div className="relative flex flex-col items-center p-4 sm:max-w-xl z-20">
          <div className="relative">
            <img
              src={school2}
              loading="lazy"
              alt="School"
              className="absolute left-8 top-8 h-48 w-48 object-cover shadow-lg transform rotate-2"
            />
            <img
              src={school3}
              loading="lazy"
              alt="School"
              className="absolute left-14 top-14 h-48 w-48 object-cover shadow-lg transform rotate-4"
            />
            <img
              src={school4}
              loading="lazy"
              alt="School"
              className="absolute left-20 top-20 h-48 w-48 object-cover shadow-lg transform rotate-6"
            />
          </div>
        </div>

        {/* Text Overlay */}
        <div className="relative z-30 text-center text-white transition-opacity duration-500 ease-in-out">
          <p className="mb-4 text-lg sm:text-xl md:mb-8">Very proud to introduce</p>
          <h1 className="mb-8 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            GOVT. HR. SEC. SCHOOL AJGAIVA JUNGLE, BASTI
          </h1>
        </div>
      </section>
    </>
  );
};

export default Index;
