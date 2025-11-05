 import React, { useState } from 'react';
import rehmat from '../images/RRR.jpg';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NAV = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cardStyle = `
    px-10 py-1 rounded-lg text-white cursor-pointer text-gray-800 
    flex items-center justify-center text-lg font-semibold 
    transition-all duration-300 
    hover:-translate-y-1 active:-translate-y-1 
    hover:shadow-[4px_4px_10px_#6B21A8,-4px_-4px_10px_#9333EA] 
    hover:brightness-110 active:brightness-110 
    hover:scale-105 active:scale-105
  `;

  return (
    <div  className="max-w-[100vw] overflow-x-hidden">
      {/* Mobile Button */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src={rehmat}
            alt="Menu"
            className="h-14 w-14 z-50 rounded-full border-2 border-[#9A48D0] 
              hover:border-[#67f567] transition-all duration-300 
              shadow-lg hover:shadow-[#67f567]/50"
          />
        </button>
      </div>

      {/* Sidebar */}
      <nav 
        onClick={() => setMenuOpen(false)}
        className={`
          fixed top-0 left-0 h-full z-40 text-white font-sans
          transition-all duration-500 ease-in-out border-r border-white/20 
          backdrop-blur-xl shadow-xl overflow-hidden
          ${menuOpen ? 'w-[75vw] px-6 py-10' : 'w-0 px-0 py-0'}
          sm:w-[20vw] sm:px-6 sm:py-10 sm:block
          bg-gradient-to-br from-[#6B21A8] via-[#9333EA] to-[#C4B5FD]
        `}
      >
        <div className="flex flex-col items-start gap-3 w-full h-full">
          {/* Close Button - only on mobile */}
          <div className="w-full flex justify-between items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-red-400 text-2xl hover:text-red-300"
            >
              <div>.</div>
            </button>
          </div>

          {/* Profile Section */}
          <img
            src={rehmat}
            alt="Profile"
            className="h-24 w-24 rounded-full border-4 ml-5 border-[#67f567] 
              shadow-lg hover:shadow-[#67f567]/50 transition-all duration-300 
              mx-auto sm:block hidden"
          />
          <h1 className="text-xl font-bold mt-2 text-center text-white">
            REHMET✕
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              Studio.
            </span>
          </h1>
          <p className="text-sm text-white/90">
            Building Clean, Fast & Interactive Frontend Applictions.
          </p>

          {/* Nav Links */}
          <div className="flex flex-col text-md font-medium">
            <Link to="/" className={cardStyle}>Home</Link>
            <Link to="/skills" className={cardStyle}>Skills</Link>
            <Link to="/resume" className={cardStyle}>Resume</Link>
            <Link to="/testimonials" className={cardStyle}>Testimonials</Link>
            <Link to="/features" className={cardStyle}>Features</Link>
            <Link to="/projects" className={cardStyle}>Projects</Link>
            <Link to="/contact" className={cardStyle}>Contact</Link>
          </div>

          {/* WhatsApp Button */}
          <div className="ml-6 sm:ml-9 mt-auto">
            <div className={cardStyle}>
              <a
                href="https://wa.me/923244646260"
                target="_blank"
                rel="noopener noreferrer"
              className="no-underline text-purple-600 hover:text-pink-500 transition duration-300"
              >
                <BsWhatsapp className="text-green-300 text-3xl sm:text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NAV;
