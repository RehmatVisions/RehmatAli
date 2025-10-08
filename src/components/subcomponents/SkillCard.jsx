 import React from 'react';
 import { motion } from 'framer-motion';

const SkillCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.25 }}
      tabIndex={0} // Keyboard focus ke liye zaroori
      className="bg-white text-gray-800 font-medium w-52 h-60 p-6 rounded-2xl 
                 shadow-[4px_4px_12px_#d1d5db,-4px_-4px_12px_#f3f4f6] 
                 flex flex-col items-center justify-center
                 transition-all duration-300 ease-in-out 
                 hover:shadow-[inset_4px_4px_12px_#d1d5db,inset_-4px_-4px_12px_#f3f4f6] 
                 focus:shadow-[inset_4px_4px_12px_#d1d5db,inset_-4px_-4px_12px_#f3f4f6] 
                 hover:text-red-500 focus:text-red-500 
                 hover:ro-rotate-360
                  
                 hover:scale-105 focus:scale-105 outline-none"
    >
      <img className="h-30 w-30  rounded-full mb-4" src={props.img} alt="Skill" loading="lazy" decoding="async" />

      <h2 className="text-xl sm:text-2xl font-semibold text-center">
        {props.skill}
      </h2>
    </motion.div>
  );
};

export default SkillCard;
