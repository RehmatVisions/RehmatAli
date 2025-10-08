import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './subcomponents/FeatureCard';

// React Icons
import {
  FaMobileAlt,
  FaLaptopCode,
  FaReact,
  FaPaintBrush,
  FaBolt,
  FaSyncAlt,
  FaMagic,
  FaLink,
  FaGlobe
} from "react-icons/fa";

const Feautures = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, rotateY: -8 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className='mt-10 px-8  text-gray-900'
      >
        <div className='ml-7'>
          <h3 className='text-[#ff014f] text-2xl'>FEATURES</h3>
          
          {/* Gradient applied below */}
          <h1 className='text-6xl font-bold py-7 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>
            WHAT I OFFER
          </h1>
        </div>

        <div className='All-cards'>
          <motion.div
            className='flex items-center justify-center lg:justify-around py-3 flex-wrap gap-6 transform-gpu'
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          >
            <FeatureCard 
              icon={<FaMobileAlt className="text-[#34d399]" />}
              heading="Responsive Web Design"
              desc="Fully mobile-friendly layouts that look great on all devices."
            />
            <FeatureCard
              icon={<FaLaptopCode className="text-[#60a5fa]" />}
              heading="Clean & Maintainable Code"
              desc="Code that’s well-organized, readable, and easy to update."
            />
            <FeatureCard
              icon={<FaReact className="text-[#61dafb]" />}
              heading="React.js Frontend Development"
              desc="SPAs using powerful React features like hooks, router, and components."
            />
            <FeatureCard
              icon={<FaPaintBrush className="text-[#f472b6]" />}
              heading="Tailwind CSS Styling"
              desc="Pixel-perfect, utility-first design with full customization power."
            />
            <FeatureCard
              icon={<FaBolt className="text-yellow-400" />}
              heading="Fast Performance"
              desc="Optimized sites for speed, smooth loading, and better SEO."
            />
            <FeatureCard
              icon={<FaSyncAlt className="text-purple-400" />}
              heading="Reusable Components"
              desc="Modular React components for scalability and maintenance."
            />
            <FeatureCard
              icon={<FaMagic className="text-pink-500" />}
              heading="Modern UI/UX"
              desc="User-focused design with animation and interaction using Framer Motion, Swiper.js, etc."
            />
            <FeatureCard
              icon={<FaLink className="text-teal-400" />}
              heading="API Integration"
              desc="Fetching and displaying dynamic content using Axios and REST APIs."
            />
            <FeatureCard
              icon={<FaGlobe className="text-indigo-400" />}
              heading="Cross-Browser Compatibility"
              desc="Your site will work perfectly in all major browsers."
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Feautures;
