 import React from 'react';
import { motion } from 'framer-motion';
import ResCard from './subcomponents/ResCard';
import leads from '../images/leads.jpeg';
import zaff from '../images/zaff.jpeg';
import nts from '../images/navttc.png';
import apna from '../images/apna.jpeg';

const ResumeEducation = () => {
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-10 py-10">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 max-w-6xl mx-auto transform-gpu"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
      >
        
        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}>
          <ResCard  
            heading="Bachelor of Science in Computer Science"
            img={leads}
            ins="Lahore Leads University"
            date="Expected Graduation: 2028"
            desc="Currently enrolled in the BSCS program, learning core programming, web development (HTML, CSS, JavaScript), databases, and software design. Gaining strong problem-solving and real-world project skills."
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}>
          <ResCard
            heading="MERN Stack Web Development"
            img={zaff}
            ins="(ZAFF Institute, Arfa Kareem Tower)"
            date="Ongoing Course"
            desc="Completed MERN Stack Web Development course from ZAFF Institute at Arfa Kareem Tower. Learned to build full-stack applications using MongoDB, Express.js, React.js, and Node.js with hands-on practice on real-world projects."
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}>
          <ResCard
            heading="— NAVTTC Full Stack Course:"
            img={nts}
            ins="National Vocational & Technical Training Commission"
            date="Ongoing Course"
            desc="Completed Full Stack Web Development course under the NAVTTC program, a government initiative by the Government of Pakistan. Learned both frontend and backend technologies including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, with hands-on training and real-world project experience."
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}>
          <ResCard
            heading="Online Programming Courses"
            img={apna}
            ins="YouTube Based (Self learning)"
            date="Completed"
            desc="Learned programming and web development from APNA COLLEGE and CODEWITH HARRY, along with self-learning through practice and online resources. Gained skills in JavaScript, React.js, and basic programming through consistent hands-on learning."
          />
        </motion.div>


      </motion.div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
  <a href='/Rehmat_Ali_Resume.pdf' download className="py-3 px-6 sm:px-10 text-sm sm:text-base font-semibold text-pink-600 
                     bg-gradient-to-br from-purple-300 via-purple-200 to-pink-200 
                     rounded-lg shadow-md transition hover:scale-105 cursor-pointer flex items-center justify-around">
    DOWNLOAD CV   <svg
    className="h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
  </svg>
  </a>
{/* 
  <button className="py-3 px-6 sm:px-10 text-sm sm:text-base font-semibold text-pink-600 
                     bg-gradient-to-br from-purple-400 via-purple-200 to-pink-200 
                     rounded-lg shadow-md transition hover:scale-105 cursor-pointer">
    DOWNLOAD CERTIFICATES
  </button> */}
</div>

                     
    </div>
  );
};

export default ResumeEducation;
