import { motion } from 'framer-motion';
import ExperienceCertificateCard from './subcomponents/ExperienceCertificateCard';

const Experience = () => {
  // Professional Experience Certificates
  const experienceCertificates = [
    {
      img: "/codecelixs.jpg",
      company: "CodeCelix",
      position: "Full Stack Web Developer",
      duration: "OCT 2024 - DEC 2024",
      technologies: "MONGODB, EXPRESSJS, REACTJS, NODEJS",
      description: "Successfully completed 3-month internship focusing on full-stack web development. Built multiple frontend projects including weather apps, CRUD systems, shopping cart clones, and portfolio websites. Mastered React fundamentals, responsive UI with Tailwind CSS, and API integration.",
      certificateCode: "CC2024",
      type: "Internship Completed",
      status: "Completed"
    },
    {
      img: "/devhub.jpg",
      company: "DevelopersHub Corporation©",
      position: "FullStack Developer",
      duration: "SEP 2024 - NOV 2024",
      technologies: "MONGODB, EXPRESSJS, REACTJS, NODEJS",
      description: "Successfully completed 3-month comprehensive hands-on projects to strengthen full-stack development skills. Worked on real-life scenarios including user authentication, state management, responsive layouts, and API consumption.",
      certificateCode: "DH2024",
      type: "Professional Internship Completed",
      status: "Completed"
    }
  ];

  return (
    <div className="relative py-8 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div 
        className="text-center mb-8 sm:mb-12 relative z-10"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
        data-aos-offset="100"
      >
        <h2 
          className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800"
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Professional Experience
        </h2>
        <div 
          className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-once="true"
          data-aos-easing="ease-out-back"
        ></div>
        <p 
          className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-easing="ease-out-quart"
        >
          My professional journey through internships and work experience with certificates
        </p>
      </div>

      {/* Experience Certificates */}
      <div 
        className="space-y-6 sm:space-y-8 max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto px-2 sm:px-0 relative z-10"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        data-aos-once="true"
      >
        {experienceCertificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              y: 0,
              transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 0.8,
                delay: index * 0.3
              }
            }}
            whileHover={{ 
              scale: 1.02,
              y: -10,
              transition: { 
                type: "spring", 
                stiffness: 300,
                damping: 20
              }
            }}
            viewport={{ once: true, amount: 0.2 }}
            data-aos={index % 2 === 0 ? "slide-right" : "slide-left"}
            data-aos-duration="1400"
            data-aos-delay={600 + (index * 400)}
            data-aos-easing="ease-out-back"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
            data-aos-offset="50"
          >
            <ExperienceCertificateCard {...cert} />
          </motion.div>
        ))}
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="800"
          data-aos-once="true"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-green-400 rounded-full opacity-15"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="1000"
          data-aos-once="true"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-25"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="1200"
          data-aos-once="true"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-60 right-10 w-2 h-2 bg-yellow-400 rounded-full opacity-30"
          data-aos="bounce-in"
          data-aos-duration="800"
          data-aos-delay="1400"
          data-aos-once="true"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        <motion.div
          className="absolute bottom-40 right-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-20"
          data-aos="slide-up"
          data-aos-duration="1000"
          data-aos-delay="1600"
          data-aos-once="true"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>
    </div>
  );
};

export default Experience;