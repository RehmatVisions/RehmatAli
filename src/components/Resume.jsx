import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Heading from './subcomponents/Heading';
import ResumeEducation from './ResumeEducation';
import ResumeSkills from './ResumeSkills';
import Experience from './Experience';
import Certification from './Certification';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  // Button Style Generator
  const getButtonStyle = (tab) =>
    `h-14 min-w-[200px] m-2 px-4 py-2 font-medium text-sm sm:text-base 
     flex items-center justify-center rounded-xl outline-none cursor-pointer transition-all duration-300 ease-in-out
     ${
       activeTab === tab
         ? 'bg-white text-pink-600 bg-gradient-to-br from-purple-300 via-purple-200 to-pink-200'

         : 'bg-white text-gray-800 hover:text-fuchsia-600 focus:text-fuchsia-600 hover:shadow-[inset_4px_4px_12px_#e0e7ff,inset_-4px_-4px_12px_#f3e8ff] focus:shadow-[inset_4px_4px_12px_#e0e7ff,inset_-4px_-4px_12px_#f3e8ff]'
     }`;

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -8 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white text-gray-800 py-4 px-4 sm:px-8"
    >
      {/* Heading */}
      <Heading sub="As a MernStack Developer" title="My Resume" />

      {/* Tabs */}
      <div className="flex flex-wrap  justify-center py-10">
        <button onClick={() => setActiveTab('education')} className={getButtonStyle('education')}>
          EDUCATION
        </button>

        <button onClick={() => setActiveTab('skills')} className={getButtonStyle('skills')}>
          PROFESSIONAL SKILLS
        </button>
        <button onClick={() => setActiveTab('experience')} className={getButtonStyle('experience')}>
          EXPERIENCE
        </button>
        <button onClick={() => setActiveTab('certifications')} className={getButtonStyle('certifications')}>
          CERTIFICATIONS
        </button>
        
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'education' && <ResumeEducation />}
        {activeTab === 'skills' && <ResumeSkills />}
        {activeTab === 'certifications' && <Certification />}
        {activeTab === 'experience' && <Experience />}
      </div>
      
    </motion.div>
  );
};

export default Resume;
