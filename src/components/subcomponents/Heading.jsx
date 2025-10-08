 import React from 'react';

const Heading = (props) => {
  return (
    <div className="text-center space-y-3 px-4">

      {/* Subheading */}
      <h4 className="text-[#ff014f] text-base md:text-lg tracking-widest animate-pulse">
        {props.sub}
      </h4>

      {/* Main Heading with Gradient Text */}
      <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#7e22ce] to-[#ec4899] text-transparent bg-clip-text">
        <span className="text-red-500">.</span>
        {props.title}
        <span className="text-red-500 animate-ping">...</span>
      </h1>
    </div>
  );
};

export default Heading;
