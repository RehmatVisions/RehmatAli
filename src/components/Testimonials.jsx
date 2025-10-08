import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Heading from './subcomponents/Heading';
import zeff from '../images/zeff.jpeg';
import nts from '../images/nts.jpeg';
import leads from '../images/leads.jpeg';

const testimonials = [
  {
    name: 'ABC',
    feedback: 'This portfolio is amazing! Very clean and responsive.',
    img: zeff,
  },
  {
    name: 'Abc',
    feedback: 'The work is excellent, and the skills are top-notch.',
    img: nts,
  },
  {
    name: 'Abc',
    feedback: 'Great design and smooth animations. Highly recommend!',
    img: leads,
  },
];

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -8 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto py-2 px-4 sm:px-6 md:px-10 mt-20 bg-white text-gray-800"
    >
      {/* Heading */}
      <div className="mb-16 text-center">
        <Heading sub="What Instructors Say" title="Testimonials" />
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-12 px-4">
              {/* Institute Info Card */}
              <div
                tabIndex={0}
                className="h-90 w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-center transition-all duration-300 outline-none
                hover:shadow-[inset_4px_4px_10px_#e0e7ff,inset_-4px_-4px_10px_#f3e8ff]
                focus:shadow-[inset_4px_4px_10px_#e0e7ff,inset_-4px_-4px_10px_#f3e8ff]
                hover:-translate-y-[2px] focus:-translate-y-[2px]"
              >
                <h3 className="text-xl font-semibold text-center py-14 text-red-500 mt-7">Institutes</h3>
                <p>
                  These institutes have greatly contributed to my MERN Stack learning journey by
                  providing structured guidance and practical knowledge.
                </p>
                <ul className="space-y-4 text-sm text-gray-600 py-14 list-disc list-inside pl-4">
                  <li>Lahore Leads University</li>
                  <li>Zaff Institute of Arfa Kareem Technology</li>
                  <li>NAVTTC – Govt Certified</li>
                </ul>
              </div>

              {/* Testimonial Card */}
              <div
                tabIndex={0}
                className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-2xl shadow-[2px_2px_10px_#d8b4fe,-2px_-2px_10px_#f5d0fe] 
                hover:shadow-[inset_4px_4px_10px_#e0e7ff,inset_-4px_-4px_10px_#f3e8ff] 
                focus:shadow-[inset_4px_4px_10px_#e0e7ff,inset_-4px_-4px_10px_#f3e8ff]
                transition-all duration-300 text-center 
                hover:-translate-y-[2px] focus:-translate-y-[2px] outline-none"
              >
                <img
                  src={item.img}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-5 border-4 border-gray-300"
                  alt={item.name}
                />
                <p className="text-base italic mb-4 leading-relaxed bg-gradient-to-r from-fuchsia-600 to-indigo-500 text-transparent bg-clip-text">
                  "{item.feedback}"
                </p>
                <h3 className="text-lg font-bold text-gray-700">{item.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Testimonials;
