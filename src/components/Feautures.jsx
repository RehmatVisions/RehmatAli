import { motion } from 'framer-motion';
import { useEffect } from 'react';
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
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const features = [
    {
      icon: <FaMobileAlt className="text-[#34d399]" />,
      heading: "Responsive Web Design",
      desc: "Fully mobile-friendly layouts that look great on all devices."
    },
    {
      icon: <FaLaptopCode className="text-[#60a5fa]" />,
      heading: "Clean & Maintainable Code",
      desc: "Code that's well-organized, readable, and easy to update."
    },
    {
      icon: <FaReact className="text-[#61dafb]" />,
      heading: "React.js Frontend Development",
      desc: "SPAs using powerful React features like hooks, router, and components."
    },
    {
      icon: <FaPaintBrush className="text-[#f472b6]" />,
      heading: "Tailwind CSS Styling",
      desc: "Pixel-perfect, utility-first design with full customization power."
    },
    {
      icon: <FaBolt className="text-yellow-400" />,
      heading: "Fast Performance",
      desc: "Optimized sites for speed, smooth loading, and better SEO."
    },
    {
      icon: <FaSyncAlt className="text-purple-400" />,
      heading: "Reusable Components",
      desc: "Modular React components for scalability and maintenance."
    },
    {
      icon: <FaMagic className="text-pink-500" />,
      heading: "Modern UI/UX",
      desc: "User-focused design with animation and interaction using Framer Motion, Swiper.js, etc."
    },
    {
      icon: <FaLink className="text-teal-400" />,
      heading: "API Integration",
      desc: "Fetching and displaying dynamic content using Axios and REST APIs."
    },
    {
      icon: <FaGlobe className="text-indigo-400" />,
      heading: "Cross-Browser Compatibility",
      desc: "Your site will work perfectly in all major browsers."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className='mt-10 px-4 sm:px-6 lg:px-8 py-12 text-gray-900'
    >
      {/* Enhanced Heading Section */}
      <div className='text-center mb-16' data-aos="zoom-in" data-aos-duration="800">
        <div className='inline-block'>
          <span className='text-sm sm:text-base font-bold tracking-[0.3em] uppercase 
                          bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text
                          relative font-["Poppins",sans-serif]
                          after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                          after:bg-gradient-to-r after:from-purple-600 after:to-pink-500'>
            FEATURES
          </span>
        </div>
        
        <h1 
          data-aos="zoom-in-up" 
          data-aos-duration="1000" 
          data-aos-delay="200"
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mt-6 mb-6
                     bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 
                     text-transparent bg-clip-text
                     drop-shadow-[0_2px_10px_rgba(147,51,234,0.3)]
                     font-["Montserrat",sans-serif] tracking-tight'>
          What I Offer
        </h1>

        <p
          data-aos="zoom-in" 
          data-aos-duration="800" 
          data-aos-delay="400"
          className='text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-["Inter",sans-serif] leading-relaxed'>
          Delivering modern, scalable, and high-performance web solutions
        </p>
      </div>

      {/* Cards Section */}
      <div className='All-cards'>
        <div className='flex items-center justify-center py-6 flex-wrap gap-8 sm:gap-10 lg:gap-12'>
          {features.map((feature, index) => {
            const aosAnimations = [
              'zoom-in',
              'flip-up',
              'fade-up',
              'fade-down',
              'flip-left',
              'flip-right',
              'zoom-in-up',
              'zoom-in-down',
              'slide-up'
            ];
            const aosAnimation = aosAnimations[index % aosAnimations.length];
            
            return (
            <motion.div
              key={index}
              data-aos={aosAnimation}
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="group relative"
            >
              <div
                tabIndex={0}
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 
                           rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100
                           flex flex-col items-center justify-center p-4 sm:p-6
                           shadow-[0_8px_30px_rgba(147,51,234,0.3)]
                           border-4 border-white
                           transition-all duration-500 ease-out
                           hover:shadow-[0_15px_50px_rgba(147,51,234,0.5),0_0_30px_rgba(236,72,153,0.4)]
                           focus:shadow-[0_15px_50px_rgba(147,51,234,0.5),0_0_30px_rgba(236,72,153,0.4)]
                           hover:border-purple-300 focus:border-purple-300
                           outline-none cursor-pointer
                           before:absolute before:inset-0 before:rounded-full
                           before:bg-gradient-to-br before:from-purple-500/10 before:via-pink-500/10 before:to-blue-500/10
                           before:opacity-0 before:transition-opacity before:duration-500
                           hover:before:opacity-100 focus:before:opacity-100"
              >
                {/* Animated Background Circles */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite]"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-pink-400/30 to-transparent rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite_1s]"></div>
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-3 sm:mb-4 text-4xl sm:text-5xl lg:text-6xl 
                                transition-all duration-500 ease-out
                                group-hover:scale-125 group-hover:rotate-12 
                                group-focus:scale-125 group-focus:rotate-12
                                drop-shadow-[0_4px_10px_rgba(147,51,234,0.3)]">
                  {feature.icon}
                </div>

                {/* Heading */}
                <h2 className="relative z-10 text-center text-base sm:text-lg lg:text-xl font-extrabold mb-2 
                               bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 
                               text-transparent bg-clip-text
                               transition-all duration-300
                               group-hover:from-purple-700 group-hover:via-pink-600 group-hover:to-blue-700
                               group-focus:from-purple-700 group-focus:via-pink-600 group-focus:to-blue-700
                               px-2 font-['Poppins',sans-serif] tracking-tight">
                  {feature.heading}
                </h2>

                {/* Description */}
                <p className="relative z-10 text-center text-xs sm:text-sm text-gray-600 leading-relaxed
                              transition-all duration-300
                              group-hover:text-gray-800 group-focus:text-gray-800
                              px-2 font-['Inter',sans-serif]">
                  {feature.desc}
                </p>

                {/* Rotating Border Effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400 animate-[spin_8s_linear_infinite]"></div>
                </div>
              </div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Feautures;
