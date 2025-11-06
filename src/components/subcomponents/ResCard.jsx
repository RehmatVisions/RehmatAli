// import React from 'react';
// import { motion } from 'framer-motion';

// const ResCard = (props) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, rotateX: -8, y: 10 }}
//       whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       viewport={{ once: true, amount: 0.2 }}
//       tabIndex={0}  // ✅ This enables focus effect
//       className="bg-white hover:-translate-y-1 active:-translate-y-1 focus:-translate-y-1
//                  my-2 text-gray-800 font-medium 
//                  max-w-sm w-full mx-auto p-4 sm:p-6 rounded-lg 
//                  shadow-[2px_2px_8px_#d1d5db,-2px_-2px_8px_#f3f4f6] 
//                  transition-all duration-300 ease-in-out 
//                  hover:shadow-[inset_2px_2px_8px_#d1d5db,inset_-2px_-2px_8px_#f3f4f6] 
//                  focus:shadow-[inset_2px_2px_8px_#d1d5db,inset_-2px_-2px_8px_#f3f4f6] 
//                  active:shadow-[inset_2px_2px_8px_#d1d5db,inset_-2px_-2px_8px_#f3f4f6] 
//                  hover:text-red-500 focus:text-red-500 active:text-red-500"
//     >
//       {/* Heading */}
//       <h2 className="text-lg sm:text-xl font-semibold mb-3 text-center">
//         {props.heading}
//       </h2>

//       {/* Institute & Date */}
//       <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-4 mb-3">
//         <h4 className="text-xs text-gray-500 text-center sm:text-left">{props.ins}</h4>
//         <button className="text-xs py-1.5 px-3 rounded-md bg-white cursor-pointer 
//                            shadow-[inset_2px_2px_8px_#d1d5db,inset_-2px_-2px_8px_#f3f4f6] 
//                            transition duration-300">
//           {props.date}
//         </button>
//       </div>

//       {/* Description */}
//       <p className="text-xs leading-relaxed text-gray-600">{props.desc}</p>

//       {/* Image */}
//       <div className="flex justify-center sm:justify-end mt-6">
//         <img
//           className="w-12 h-12 transition ease-in sm:w-16 sm:h-16 rounded-full object-cover hover:scale-105 focus:scale-105 active:scale-105"
//           src={props.img}
//           alt=""
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default ResCard;

 
import React from "react";
import { motion } from "framer-motion";

const ResCard = ({ heading, ins, date, desc, img }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative max-w-md mx-auto bg-white rounded-2xl overflow-hidden
                 shadow-md hover:shadow-2xl transition-all duration-300
                 cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                 hover:text-white p-6 flex flex-col gap-4"
    >
      {/* Top: Image + Heading */}
      <div className="flex items-center gap-4">
        <img
          src={img}
          alt="Profile"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200 transition-all duration-300"
        />
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">{heading}</h2>
          <h4 className="text-sm sm:text-base font-medium opacity-70">{ins}</h4>
        </div>
      </div>

      {/* Date badge */}
      <span className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-800 font-semibold transition-all duration-300 hover:bg-white hover:text-blue-500">
        {date}
      </span>

      {/* Description */}
      <p className="text-sm sm:text-base leading-relaxed">{desc}</p>

      {/* Optional: small hover icon or effect */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
        style={{ background: "linear-gradient(120deg, white, transparent)" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ResCard;
