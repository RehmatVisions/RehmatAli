import { motion } from 'framer-motion';
import zeff from '../images/zeff.jpeg';
import navttac from '../images/nsis.png';
import CertificateCard from './subcomponents/CertificateCard';

const Certification = () => {
  const certifications = [
    {
      img: zeff,
      heading: "(Zaff Institute – Arfah Kareem Technologies)",
      date: "2025",
      ins: "(Certificate in Progress – Completion Expected Soon)",
      desc: "A skill-based MERN Stack program focused on practical web development using MongoDB, Express, React, and Node.js. It includes hands-on projects, frontend/backend integration, and professional workflow training."
    },
    {
      img: navttac,
      heading: "(NAVTTC Pakistan)",
      date: "2025",
      ins: "(Certificate in Progress – Completion Expected Soon)",
      desc: "A government-recognized training program focused on MERN stack technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. It includes hands-on projects, frontend/backend integration, and professional workflow training."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -8, y: 10 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 px-4"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            tabIndex={0}
            className="relative max-w-md mx-auto bg-white rounded-2xl overflow-hidden
                       shadow-md transition-all duration-300
                       cursor-pointer 
                       hover:shadow-2xl focus:shadow-2xl active:shadow-2xl
                       hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                       focus:bg-gradient-to-r focus:from-blue-500 focus:to-purple-500
                       active:bg-gradient-to-r active:from-blue-500 active:to-purple-500
                       hover:text-white focus:text-white active:text-white
                       p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={cert.img}
                alt="Profile"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200 transition-all duration-300
                           group-hover:border-white group-focus:border-white group-active:border-white"
              />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">{cert.heading}</h2>
                <h4 className="text-sm sm:text-base font-medium opacity-70">{cert.ins}</h4>
              </div>
            </div>

            <span className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-800 font-semibold transition-all duration-300
                              hover:bg-white hover:text-blue-500
                              focus:bg-white focus:text-blue-500
                              active:bg-white active:text-blue-500">
              {cert.date}
            </span>

            <p className="text-sm sm:text-base leading-relaxed">{cert.desc}</p>

            <motion.div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
              whileFocus={{ opacity: 0.1 }}
              whileTap={{ opacity: 0.1 }}
              style={{ background: "linear-gradient(120deg, white, transparent)" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
      <div className='flex flex-wrap justify-around'>
        <CertificateCard imageSrc={'/certificate.png'} downloadName={'certificate.jpg'} title={'Zaff_Certificate'} />
        <CertificateCard imageSrc={'/comingsoon.jpg'} downloadName={'certificate.jpg'} title={'NAVTTC_Certificate'} />
      </div>
    </motion.div>
  );
};

export default Certification;
