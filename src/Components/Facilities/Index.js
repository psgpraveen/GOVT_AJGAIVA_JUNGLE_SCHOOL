import React from 'react';
import { motion } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    {
      icon: '🎥', // Replace with an actual icon if needed
      title: 'Class rooms equipped with Audio Visual Aids',
      description: 'Each classroom from nursery to senior secondary is provided with audio visual aids. Teachers, as per the requirement of curriculum and syllabus prepare digital lesson plans and use the same through this.',
    },
    {
      icon: '🔬', // Replace with an actual icon if needed
      title: 'Fully Fledged Science Laboratories',
      description: 'We have spacious and sufficient number of physics, chemistry and biology laboratories with all the required apparatus and other necessary requirements to cater to the needs of students.',
    },
    {
      icon: '💻', // Replace with an actual icon if needed
      title: 'Computer Lab for Different Sections',
      description: 'School has different computer labs for different sections so that all students can make use of the computer lab. The school makes sure that every individual student gets the facility to practice on a computer.',
    },
    {
      icon: '📚', // Replace with an actual icon if needed
      title: 'Library',
      description: 'School library is renovated according to the need. It is replenished every year with additional supply of books on different subjects and themes. Library has a spacious reading room where students can study.',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">FACILITIES PROVIDED</h2>
        <p className="mt-4 text-lg text-gray-600">
          The scenario of education is being changed at a rapid pace. Modern education system is committed to make use of
          the advancement in technology and innovative methods to make the teaching learning process easy to the children.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
      >
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-4xl mb-4">{facility.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
            <p className="text-gray-600">{facility.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Facilities;
