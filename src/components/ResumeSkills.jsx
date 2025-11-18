import { motion } from 'framer-motion';
import htmlImg from '../images/html.jpeg';
import cssImg from '../images/css.png';
import jsImg from '../images/JS.jpeg';
import tailwindImg from '../images/tailwind.png';
import reactImg from '../images/react.png';
import nodeImg from '../images/nodejs.png';
import expressImg from '../images/express.png';
import mongoImg from '../images/mongo.png';
import githubImg from '../images/download.png';

const ResumeSkills = () => {
  const skills = [
    { img: htmlImg, skill: "HTML" },
    { img: cssImg, skill: "CSS" },
    { img: jsImg, skill: "JavaScript" },
    { img: tailwindImg, skill: "Tailwind CSS" },
    { img: reactImg, skill: "ReactJS" },
    { img: nodeImg, skill: "Node.js" },
    { img: expressImg, skill: "Express.js" },
    { img: mongoImg, skill: "MongoDB" },
    { img: githubImg, skill: "GitHub" }
  ];

  return (
    <div className="py-16 px-4">
      <div className="flex flex-wrap justify-center gap-9">
        {skills.map((skillData, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay={index * 100}
          >
            <div
              tabIndex={0}
              className="bg-white text-gray-800 font-medium w-52 h-60 p-6 rounded-2xl 
                         shadow-[4px_4px_12px_#d1d5db,-4px_-4px_12px_#f3f4f6] 
                         flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out 
                         hover:shadow-[inset_4px_4px_12px_#d1d5db,inset_-4px_-4px_12px_#f3f4f6] 
                         focus:shadow-[inset_4px_4px_12px_#d1d5db,inset_-4px_-4px_12px_#f3f4f6] 
                         hover:text-red-500 focus:text-red-500 
                         hover:scale-105 focus:scale-105 outline-none"
            >
              <img className="h-30 w-30 rounded-full mb-4" src={skillData.img} alt="Skill" loading="lazy" decoding="async" />
              <h2 className="text-xl sm:text-2xl font-semibold text-center">
                {skillData.skill}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSkills;
