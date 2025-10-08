import React from 'react';
import { motion } from 'framer-motion';

const CertificateCard = ({ imageSrc = '/certificate.png', downloadName = 'certificate.jpg', title = 'Certificate' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.015 }}
      className="max-w-sm w-full rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 shadow-[2px_2px_12px_#e9d5ff33,-2px_-2px_12px_#f5d0fe33] overflow-hidden"
    >
      <div className="p-4 sm:p-6">
        <div className="rounded-2xl overflow-hidden shadow-[inset_2px_2px_8px_#ffffff26,inset_-2px_-2px_8px_#00000014]">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-56 sm:h-64 object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            {title}
          </h3>
          <a
            href={imageSrc}
            download={downloadName}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-md transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none cursor-pointer"
          >
            Download
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;


