import React from 'react';
import { motion } from 'framer-motion';
import VivekImage from './teacherImages/ABHIMANYU_KUMAR_MISHRA.jpeg';
import VinodImage from './teacherImages/HARI_OM_SHARAN_GIRI.jpeg';
import LalYogendraImage from './teacherImages/LAL.jpg';
import SureshImage from './teacherImages/Suresh.jpg';
import  HariOmImage from './teacherImages/VINOD_KUMAR_YADAV.jpeg';
import  AbhimanyuImage from './teacherImages/VIVEK_MISHRA.jpeg';
import defaultImage from '../Img/school.jpg'; // Placeholder image if teacher image is not available

const teachersData = [
  {
    name: 'SURESH CHANDRA VERMA',
    gender: 'Male',
    mobile: '9450564451',
    dob: '30/07/1965',
    doj: '07/07/1997',
    subject: 'Chemistry',
    qualification: 'M.Sc, B.Ed',
    experience: '25 Years 11 Months',
    post: 'Principal',
    image: SureshImage,
  },{
    name: 'VINOD KUMAR YADAV',
    gender: 'Male',
    mobile: '9918218427',
    dob: '28/12/1987',
    doj: '26/10/2020',
    subject: 'Physical Education',
    qualification: 'M.A, Other',
    experience: '2 Years 8 Months',
    post: 'Assistant Teacher',
    image: VinodImage,
  }, {
    name: 'VIVEK MISHRA',
    gender: 'Male',
    mobile: '8299036073',
    dob: '05/07/1984',
    doj: '03/11/2020',
    subject: 'Science',
    qualification: 'M.Sc, B.Ed',
    experience: '2 Years 7 Months',
    post: 'Assistant Teacher',
    image: VivekImage,
  },{
    name: 'HARI OM SHARAN GIRI',
    gender: 'Male',
    mobile: '9839300120',
    dob: '10/08/1982',
    doj: '13/08/2021',
    subject: 'Social Science',
    qualification: 'M.A, B.Ed',
    experience: '1 Year 10 Months',
    post: 'Assistant Teacher',
    image: HariOmImage,
  },
  {
    name: 'LAL YOGENDRA',
    gender: 'Male',
    mobile: '9452601664',
    dob: '12/07/1990',
    doj: '14/08/2021',
    subject: 'Hindi',
    qualification: 'M.A, B.Ed',
    experience: '1 Year 10 Months',
    post: 'Assistant Teacher',
    image: LalYogendraImage,
  },
  {
    name: 'ABHIMANYU KUMAR MISHRA',
    gender: 'Male',
    mobile: '8299049437',
    dob: '20/06/1976',
    doj: '24/09/2015',
    subject: 'Social Science',
    qualification: 'M.A, B.Ed',
    experience: '7 Years 9 Months',
    post: 'Assistant Teacher',
    image: AbhimanyuImage,
  },
];

const Teachers = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-blue-900 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Teachers
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {teachersData.map((teacher, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 p-6 shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mx-auto w-[70%] md:p-[10rem] sm:p-[10rem] lg:p-40 h-[16rem] overflow-hidden rounded-t-lg mb-4">
                <img 
                  src={teacher.image || defaultImage} 
                  alt={teacher.name ? `Photo of ${teacher.name}` : 'Teacher'} 
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-yellow-600">{teacher.name}</h3>
              <p className="text-gray-700"><strong>Gender:</strong> {teacher.gender}</p>
              <p className="text-gray-700"><strong>Mobile:</strong> {teacher.mobile}</p>
              <p className="text-gray-700"><strong>Date of Birth:</strong> {teacher.dob}</p>
              <p className="text-gray-700"><strong>Date of Joining:</strong> {teacher.doj}</p>
              <p className="text-gray-700"><strong>Subject:</strong> {teacher.subject}</p>
              <p className="text-gray-700"><strong>Qualification:</strong> {teacher.qualification}</p>
              <p className="text-gray-700"><strong>Experience:</strong> {teacher.experience}</p>
              <p className="text-gray-700"><strong>Post:</strong> {teacher.post}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Teachers;
