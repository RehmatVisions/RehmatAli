import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16, y: 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full sm:w-[300px] flex justify-center py-3"
    >
      <div
        tabIndex={0}
        className="
          h-76 w-full rounded-lg bg-white text-gray-800
          shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)]
          border border-transparent
          transition-all duration-300 ease-in-out
          hover:brightness-110 focus:brightness-110
          hover:translate-y-2 focus:translate-y-2
          hover:scale-[1.02] focus:scale-[1.02]
          hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),0_0_15px_#9333EA]
          focus:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),0_0_15px_#9333EA]
          hover:border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.1)]
          outline-none
        "
      >
        <div className="py-16">
          <h1 className="flex items-center justify-center text-4xl text-[#14b8a6]">
            {props.icon}
          </h1>

          <h1 className="text-center text-2xl font-bold py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            {props.heading}
          </h1>

          <p className="text-gray-600 text-center px-6">{props.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
