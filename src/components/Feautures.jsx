import { motion } from 'framer-motion';
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
      initial={{ opacity: 0, rotateY: -8 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className='mt-10 px-8 text-gray-900'
    >
      <div className='ml-7'>
        <h3 className='text-[#ff014f] text-2xl'>FEATURES</h3>
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full sm:w-[300px] flex justify-center py-3 group"
            >
              <div
                tabIndex={0}
                className="
                  relative overflow-hidden
                  h-76 w-full rounded-lg bg-white text-gray-800
                  shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)]
                  border border-transparent
                  transition-all duration-500 ease-out
                  hover:brightness-110 focus:brightness-110
                  hover:-translate-y-2 focus:-translate-y-2
                  hover:scale-105 focus:scale-105
                  hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),0_0_20px_rgba(147,51,234,0.4),0_0_40px_rgba(236,72,153,0.2)]
                  focus:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),0_0_20px_rgba(147,51,234,0.4),0_0_40px_rgba(236,72,153,0.2)]
                  hover:border-purple-200 focus:border-purple-200
                  outline-none
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-500/5 before:via-transparent before:to-pink-500/5
                  before:opacity-0 before:transition-opacity before:duration-500
                  hover:before:opacity-100 focus:before:opacity-100
                "
              >
                <div className="py-16 relative z-10">
                  <h1 className="flex items-center justify-center text-4xl text-[#14b8a6] 
                    transition-all duration-500 ease-out
                    group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]
                    group-focus:scale-110 group-focus:rotate-6 group-focus:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]">
                    {feature.icon}
                  </h1>

                  <h1 className="text-center text-2xl font-bold py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text
                    transition-all duration-300
                    group-hover:from-purple-700 group-hover:to-pink-600
                    group-focus:from-purple-700 group-focus:to-pink-600">
                    {feature.heading}
                  </h1>

                  <p className="text-gray-600 text-center px-6 
                    transition-all duration-300
                    group-hover:text-gray-800 group-focus:text-gray-800">
                    {feature.desc}
                  </p>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl 
                    animate-[pulse_3s_ease-in-out_infinite]"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-400/20 to-transparent rounded-full blur-xl 
                    animate-[pulse_3s_ease-in-out_infinite_0.5s]"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Feautures;
