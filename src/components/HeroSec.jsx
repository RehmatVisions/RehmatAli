import { FiLinkedin, FiFacebook } from 'react-icons/fi';
import { SiVercel, SiMongodb, SiExpress, SiNodedotjs, SiGithub, SiUpwork, SiFiverr } from "react-icons/si";
import { TbBrandReactNative } from 'react-icons/tb';
import { RiTailwindCssLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import hero from '../images/dp.jpg';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HeroSec = () => {

  const cardStyle =
    'px-4 py-3 rounded-lg bg-white text-gray-800 flex items-center justify-center text-lg font-semibold transition-all duration-500 cursor-pointer border border-transparent \
    shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] \
    hover:translate-y-2 focus:translate-y-2 \
    hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] \
    focus:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] \
    hover:border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.1)] \
    hover:scale-105 focus:scale-105';

  const socialLinks = [
    { icon: <FiLinkedin className="text-[#2d83f3] text-3xl sm:text-4xl" />, url: "https://www.linkedin.com/in/rehmat-ali-01a443350" },
    { icon: <FiFacebook className="text-[#3f92ff] text-3xl sm:text-4xl" />, url: "https://www.facebook.com/RehmatVisions/" },
    { icon: <SiFiverr className="text-green-500 text-3xl sm:text-4xl" />, url: "https://www.fiverr.com/s/XLKlbgZ" },
    { icon: <SiUpwork className="text-[#6FDA44] text-3xl sm:text-4xl" />, url: "https://www.upwork.com/freelancers/~0177583e5d01fec6f0?mp_source=share" },
    { icon: <SiGithub className="text-black text-3xl sm:text-4xl" />, url: "https://github.com/RehmatAli02" },
    { icon: <FaWhatsapp className="text-[#25D366] text-3xl sm:text-4xl" />, url: "https://wa.me/923244646260" },
  ];

  const skills = [
    { icon: <TbBrandReactNative className="text-[#61DAFB] text-3xl sm:text-4xl" />, url: "https://vite.dev/" },
    { icon: <RiTailwindCssLine className="text-[#38BDF8] text-3xl sm:text-4xl" />, url: "https://tailwindcss.com/docs/installation/using-vite" },
    { icon: <SiMongodb className="text-[#47A248] text-3xl sm:text-4xl" />, url: "https://mongodb.com/" },
    { icon: <SiExpress className="text-gray-700 text-3xl sm:text-4xl" />, url: "https://expressjs.com/" },
    { icon: <SiNodedotjs className="text-green-600 text-3xl sm:text-4xl" />, url: "https://nodejs.org/" },
    { icon: <SiVercel className="text-black text-3xl sm:text-4xl" />, url: "https://vercel.com/" },
  ];

  return (
    <div className="min-h-screen mt-0 pt-0 bg-white text-gray-800 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 pb-8 md:pb-12 overflow-hidden">
      
      {/* Left Section */}
      <div className="w-full mt-10 md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
        <h1
          data-aos="slide-right"
          data-aos-duration="800"
          className="font-bold text-2xl sm:text-3xl animate-pulse text-red-500"
        >
          ____REHMET ✕<span className="text-[#9333EA]">Studio.</span>
        </h1>

        <h4
          data-aos="slide-right"
          data-aos-duration="900"
          data-aos-delay="100"
          className="text-2xl tracking-wide mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
        >
          WELCOME TO MY WORLD
        </h4>

        <h1
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          <span className="text-red-400">Hi I'm </span>
          <span className="bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text">
            REHMAT.ALI
          </span>
        </h1>

        <h3 
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="text-2xl md:text-3xl font-medium tracking-wide mb-6 bg-gradient-to-r from-fuchsia-700 to-indigo-500 text-transparent bg-clip-text">
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

        <p 
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="text-base sm:text-lg text-gray-700 mb-8 max-w-md">
          Full-stack MERN developer building fast, modern web applications — specializing in React, Node.js, Express, MongoDB, Tailwind, and JavaScript with a strong focus on design, UX, and performance.
        </p>

        {/* Social & Skills */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div data-aos="slide-right" data-aos-duration="1000" data-aos-delay="500">
            <h3 className="text-sm sm:text-md font-medium tracking-wide text-[#6B21A8] mb-3">
              Find with me
            </h3>
            <div className="flex items-center gap-4 flex-wrap">
              {socialLinks.map((item, index) => (
                <div 
                  className={cardStyle} 
                  key={index} 
                  tabIndex={0}
                  data-aos="flip-left"
                  data-aos-duration="800"
                  data-aos-delay={600 + (index * 100)}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="slide-left" data-aos-duration="1000" data-aos-delay="500">
            <h3 className="text-sm sm:text-md font-medium tracking-wide text-[#6B21A8] mb-3">
              Best skills on
            </h3>
            <div className="flex items-center gap-4 flex-wrap">
              {skills.map((item, index) => (
                <div 
                  className={cardStyle} 
                  key={index} 
                  tabIndex={0}
                  data-aos="flip-right"
                  data-aos-duration="800"
                  data-aos-delay={600 + (index * 100)}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 px-4">
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="300"
          className="relative w-56 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] aspect-square rounded-full bg-white p-2 transition-all duration-300 hover:brightness-110 hover:scale-[1.05]"
          tabIndex={0}
        >
          <motion.div
            className="relative w-full h-full mb-34 cursor-pointer"
            whileHover={{ scale: 1.08 }}
          >
            <motion.img
              src={hero}
              alt="Rehmat Ali"
              loading="eager"
              className="w-full h-full object-cover rounded-full border-4  border-[#9A48D0] shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
              animate={{
                rotateX: [0, 2, -2, 0],
                rotateY: [0, 2, -2, 0],
                y: [0, -12, 0],
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 10px 25px rgba(0,0,0,0.2)",
                  "0 15px 30px rgba(0,0,0,0.3)",
                  "0 10px 25px rgba(0,0,0,0.2)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
