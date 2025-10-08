import React from 'react';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';

const ProjectCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      tabIndex={0}
      className="
        cursor-pointer group w-80 h-96 rounded-xl bg-white text-gray-800
        border border-transparent outline-none
        shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)]
        transition-all duration-300 ease-in-out
        hover:brightness-110 focus:brightness-110
        hover:translate-y-2 focus:translate-y-2
        hover:scale-[1.03] focus:scale-[1.03]
        hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),0_0_15px_#9333EA]
        focus:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),0_0_15px_#9333EA]
        hover:border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.1)]
        overflow-hidden
      "
    >
      {/* Project Image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          className="h-48 w-full object-cover transform-gpu [will-change:transform] transition-transform duration-500 ease-in-out group-hover:scale-110 group-focus:scale-110"
          src={props.img}
          alt="Project Screenshot"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Project Info */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-[#ff014f]">{props.title}</h4>
          <h5 className="text-pink-500 text-md font-medium">
            {props.no} <span className="animate-pulse">&#9829;</span>
          </h5>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">{props.desc}</p>

        <button className="flex items-center justify-start text-gray-700 font-medium transition-all duration-300 hover:text-purple-600 focus:text-purple-600 cursor-pointer">
          LIVE PREVIEW <FaEye className="text-xl ml-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
