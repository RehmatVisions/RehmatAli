import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FiDownload } from 'react-icons/fi';
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
      status: "Completed",
      downloadName: "CodeCelix-Certificate-2024.jpg"
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
      status: "Completed",
      downloadName: "DevelopersHub-Certificate-2024.jpg"
    }
  ];

  // Download all certificates function
  const downloadAllCertificates = async () => {
    try {
      toast.info('🚀 Starting download of all certificates...', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      for (let i = 0; i < experienceCertificates.length; i++) {
        const cert = experienceCertificates[i];
        
        // Add delay between downloads
        if (i > 0) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        const link = document.createElement('a');
        link.href = cert.img;
        link.download = cert.downloadName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success(`✅ ${cert.company} certificate downloaded!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      toast.success('🎉 All certificates downloaded successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error('❌ Error downloading certificates. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="relative py-8 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-6">
          My professional journey through internships and work experience with certificates
        </p>
        
        {/* Download All Button */}
        <motion.button
          onClick={downloadAllCertificates}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <FiDownload className="w-4 h-4" />
          <span>Download All Certificates</span>
        </motion.button>
      </div>

      {/* Experience Certificates */}
      <div className="space-y-6 sm:space-y-8 max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto px-2 sm:px-0 relative z-10">
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
          >
            <ExperienceCertificateCard {...cert} />
          </motion.div>
        ))}
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"
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
      </div>
    </div>
  );
};

export default Experience;