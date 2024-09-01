import React, { useState } from 'react';
import schoolImage from '../Img/school.jpg';

const SchoolInfo = () => {
  const [dis,setdis] = useState(false)
  const show =()=>{
    setdis(!dis)
  }
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-gray-50 shadow-lg rounded-lg overflow-hidden">
        
        <div className="p-6 md:w-1/2">
          <h3 className="text-xl font-semibold text-yellow-600 uppercase">GOVT HR SEC AJGAIVA JUNGLE</h3>
          <h2 className="text-3xl font-bold text-blue-900 mt-2 mb-4">Our School</h2>
          <p className="text-gray-700 mb-4">
            GOVT HR SEC AJGAIVA JUNGLE was established in 2012 and is managed by the Department of Education. Located in the SALTOVA GOPALPUR block of BASTI district, Uttar Pradesh, the school is situated in a rural area. The school caters to Grades 9 and 10 and is co-educational. 
          </p>
         {dis ? <> <p className="text-gray-700 mb-4 ">
            The school does not have an attached pre-primary section and operates a single shift. Hindi is the medium of instruction, and the school is accessible by an all-weather road. The academic session starts in April.
          </p>
          <p className="text-gray-700 mb-4">
            The school has a government building with 4 classrooms, all in good condition, and 2 additional rooms for non-teaching activities. 
          </p></>:""}
          <button onClick={show} className="bg-blue-700 text-white font-semibold px-6 py-2 mt-4 rounded-lg hover:bg-blue-800">
           {dis ? "Show less":" Read More"}
          </button>
        </div>

        <div className="md:w-1/2">
          <img 
            src={schoolImage} 
            alt="GOVT HR SEC AJGAIVA JUNGLE" 
            className="object-cover w-full h-full"
          />
        </div>
        
      </div>
    </section>
  );
};

export default SchoolInfo;
