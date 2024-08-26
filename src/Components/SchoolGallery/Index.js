import React from 'react';
import { motion } from 'framer-motion';
import imgs from '../Img/school.jpg'
const SchoolGallery = () => {
  const images = [
    { src:imgs , alt: 'Image 1' },
    { src:imgs , alt: 'Image 2' },
    { src:imgs , alt: 'Image 3' },
    { src:imgs , alt: 'Image 4' },
    // Add more images as needed
  ];

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
        {images.map((image, index) => (
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
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default SchoolGallery;
