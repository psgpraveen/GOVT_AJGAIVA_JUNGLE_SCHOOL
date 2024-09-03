import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Dynamically require all images in the 'img' directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const SchoolGallery = () => {
  const [visibleImages, setVisibleImages] = useState(4); // Start with 4 images

  // Function to show more images
  const showMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 4); 
    console.log('imag>>>',images);
  };

  // Function to show fewer images
  const showLessImages = () => { 
    
    setVisibleImages((prevVisibleImages) => (prevVisibleImages > 4 ? prevVisibleImages - 4 : 4)); }

  return (
    <div className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">SCHOOL GALLERY</h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
      >
        {images.slice(0, visibleImages).map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8 flex justify-center gap-4">
        {visibleImages < images.length && (
          <button
            onClick={showMoreImages}
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Show More
          </button>
        )}
        {visibleImages > 4 && (
          <button
            onClick={showLessImages}
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default SchoolGallery;
