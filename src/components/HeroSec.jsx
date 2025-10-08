import React from 'react';
import { FiLinkedin, FiFacebook } from 'react-icons/fi';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiUpwork } from 'react-icons/si';
import { RiTailwindCssLine } from 'react-icons/ri';
import { PiFigmaLogoBold } from 'react-icons/pi';
import hero from '../images/rehmat.jpeg';
import logo from '../images/wp2712180.webp';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';


const HeroSec = () => {

  const cardStyle =
  'px-4 py-3 rounded-lg bg-white text-gray-800 flex items-center justify-center text-lg font-semibold transition-all duration-500 cursor-pointer border border-transparent \
  shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] \
  hover:translate-y-2 focus:translate-y-2 \
  hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] \
  focus:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] \
  hover:border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.1)] \
  hover:scale-105 focus:scale-105 ';

  return (
    <>
    <motion.div
      initial={{ opacity: 0, rotateY: -8 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="h-screen mt-0 pt-0 overflow-hidden bg-white text-gray-800 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 pb-8 md:pb-12 transform-gpu [will-change:transform]"
    >
      
      {/* Left Section */}
      <div className="w-full mt-15 md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-4">
          {/* <img className="h-12 w-12 object-cover" src={logo} alt="Logo" /> */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className="font-bold text-2xl sm:text-3xl animate-pulse text-red-500"
          >
            ____REHMET ✕<span className="text-[#9333EA]">Studio.</span>
          </motion.h1>
        </div>

        <motion.h4
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="  text-2xl sm:text-xl md:text-2xl tracking-wide mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
        >
          WELCOME TO MY WORLD
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          <span className="text-red-400">Hi I’m </span>
          <span className="bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text hover:brightness-125 focus:brightness-125 transition-all">
            REHMAT.ALI
          </span>
        </motion.h1>

        <h3 className="text-2xl sm:text-2xl md:text-3xl font-medium tracking-wide mb-6 bg-gradient-to-r from-fuchsia-700 to-indigo-500 text-transparent bg-clip-text">
         <Typewriter
        options={{
          strings: ['React Developer', 'Backend Developer', 'MernStack Developer'],
          autoStart: true,
          loop: true,
          delay: 65,
          deleteSpeed: 30,
        }}
      />
      
        </h3>

        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-md">
          Frontend developer crafting fast, modern UIs with React, Tailwind & JavaScript — focused on
          design, UX, and performance.
        </p>

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div>
            <h3 className="text-sm sm:text-md font-medium tracking-wide text-[#6B21A8] mb-3">
              Find with me
            </h3>
            <div className="flex items-center gap-4">
              <div className={cardStyle} tabIndex={0}>
                {/* <FiLinkedin className="text-[#0077B5] text-3xl sm:text-4xl" /> */}
                               <a href="https://www.linkedin.com/in/rehmat-ali-01a443350  "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <FiLinkedin  className="text-[#2d83f3] text-3xl sm:text-4xl" />  
                   </a>
              </div>
              <div className={cardStyle} tabIndex={0}>
                  <a href="https://www.facebook.com/share/1QqhR8Wsis/ "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> < FiFacebook className="text-[#3f92ff] text-3xl sm:text-4xl" /> </a>
              </div>
              <div className={cardStyle} tabIndex={0}>
                   <a href=" https://www.upwork.com/freelancers/~0177583e5d01fec6f0?mp_source=share  "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <SiUpwork className="text-[#6FDA44] text-3xl sm:text-4xl" /> </a>
                {/*  */}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-md font-medium tracking-wide text-[#6B21A8] mb-3">
              Best skills on
            </h3>
            <div className="flex items-center gap-4">
              <div className={cardStyle} tabIndex={0}>
                {/*  */}
                 <a href="https://vite.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <TbBrandReactNative className="text-[#61DAFB] text-3xl sm:text-4xl" /></a>
                
              </div>
              <div className={cardStyle} tabIndex={0}>
                 <a href="https://tailwindcss.com/docs/installation/using-vite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <RiTailwindCssLine className="text-[#38BDF8] text-3xl sm:text-4xl" /> </a>
                {/* <RiTailwindCssLine className="text-[#38BDF8] text-3xl sm:text-4xl" /> */}
              </div>
              <div className={cardStyle} tabIndex={0}>
                {/* <a className='' href=""> <PiFigmaLogoBold className="text-[#F24E1E] text-3xl sm:text-4xl" /></a> */}
                <a href="https://www.figma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <PiFigmaLogoBold className="text-[#F24E1E] text-3xl sm:text-4xl" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2  flex justify-center  md:mt-0">
        <div
          className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-90 md:h-90 lg:w-99 lg:h-99 rounded-full bg-white p-2 transition-all duration-300 hover:brightness-110 focus:brightness-110 hover:scale-[1.03] focus:scale-[1.03]"
          tabIndex={0}  // ✅ Added for keyboard focus
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full  h-full object-cover rounded-full hover:shadow-[#9A48D0]/70 focus:shadow-[#9A48D0]/70  border-4 border-[#9A48D0] shadow-[4px_4px_12px_#d1d5db,-4px_-4px_12px_#f3f4f6] transform-gpu [will-change:transform]"
            src={hero}
            alt="Rehmat Ali"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

    </motion.div>
   
   
    </>
  );
};

export default HeroSec;
