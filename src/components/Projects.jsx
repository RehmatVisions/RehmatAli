import { FaEye, FaGithub } from 'react-icons/fa';
import eduisty from '../images/eduisty.jpeg';
import streamlabs from '../images/streamlabs.jpeg';
import Gotto from '../images/gotto.jpeg';
import weather from '../images/weather.png';
import koad from '../images/koad.png';
import portfolio from '../images/Screenshot 2025-07-14 230310.png';
import Heading from './subcomponents/Heading';
import Medtracker from '../images/MedTracker.jpg';
import graphic from '../images/Graphic.png';
import asia from '../images/asia.png';
import interview from '../images/interview.png';
const projectsData = [
  {
    id: 1,
    img: eduisty,
    title: "Eduisty React",
    company: "Eduisty Inc.",
    desc: "Built a responsive frontend clone of the Eduisty website using React, focusing on clean UI and modern design.",
    no: "57K",
    url: "https://comfy-cendol-b1f477.netlify.app/",
    github: "https://github.com/yourusername/eduisty"
  },
  {
    id: 2,
    img: Gotto,
    title: "Gotto Website",
    company: "Gotto Business",
    desc: "A fully responsive business platform built in React. Styled with passion. Delivered as Gotto.",
    no: "73M",
    url: "https://profound-bavarois-7ff36a.netlify.app/",
    github: "https://github.com/yourusername/gotto"
  },
  {
    id: 3,
    img: streamlabs,
    title: "Streamlabs Website Clone",
    company: "Streamlabs",
    desc: "A fully responsive Streamlabs-inspired ReactJS project with modern UI, smooth animations, and dynamic component structure.",
    no: "13B",
    url: "https://sprightly-kashata-a0ade8.netlify.app/",
    github: "https://github.com/yourusername/streamlabs"
  },
  {
    id: 4,
    img: weather,
    title: "Weather App",
    company: "Personal Project",
    desc: "A sleek and responsive weather app built with React and Tailwind CSS that fetches real-time weather data using WeatherAPI.",
    no: "879K",
    url: "https://rehmatvisions.github.io/weather_app/",
    github: "https://github.com/rehmatvisions/weather_app"
  },
  {
    id: 5,
    img: koad,
    title: "Koad Web",
    company: "Koad Restaurant",
    desc: "A responsive React.js fast food website with modern UI, fast performance, and smooth UX — designed for real-world food ordering apps...View",
    no: "",
    url: "https://superlative-quokka-75b99c.netlify.app/",
    github: "https://github.com/yourusername/koad"
  },
  {
    id: 6,
    img: portfolio,
    title: "REACT_PORTFOLIO",
    company: "CodeAlpha",
    desc: "Crafted with React.js & Tailwind CSS, this portfolio highlights my frontend skills, live projects, and passion for clean design and performance.",
    no: "213M",
    url: "https://rehmatvisions.github.io/codealpha_tasks-portfolio/",
    github: "https://github.com/rehmatvisions/codealpha_tasks-portfolio"
  },
 ,
  {
    id: 9,
    img: asia,
    title: "VIBE CODING E-COMMERCE",
    company: "Client Project(Asia Electronics)",
    desc: "Built a fully functional e-commerce frontend with product listing, cart, search, and checkout features using React.js & Tailwind CSS.",
    no: "",
    url: "https://asia-electronics.vercel.app/",
    github: "https://github.com/rehmatvisions/vibecoding-ecommerce-frontend"
  },
  {
    id: 10,
    img: graphic,
    title: "CLIENT PORTFOLIO",
    company: "VibeCoding",
    desc: "Designed and implemented a client-specific portfolio focusing on graphics and UI using HTML, CSS, JS.",
    no: "",
    url: "https://tahirasani.vercel.app/",
    github: "https://github.com/rehmatvisions/client-portfolio-design"
  },
  {
    id: 11,
    img: interview,
    title: "INTERVIEW QUESTIONS APP",
    company: "Personal Project(Qvault)",
    desc: "Built an Interview Questions App using Next.js to save and categorize MERN interview questions for learning.",
    no: "",
    url: "https://rehmatvisions.github.io/interview-questions-nextjs/",
    github: "https://github.com/rehmatvisions/interview-questions-nextjs"
  },
   {
    id: 7,
    img: Medtracker,
    title: "MEDICATION REMINDER APP",
    company: "CodeCelix Internship",
    desc: "Implemented backend with CRUD operations for medications and history tracking using Node.js, Express, and MongoDB.",
    no: "",
    url: "#",
    github: "https://github.com/rehmatvisions/medication-reminder-backend"
  },
  {
    id: 8,
    
    title: "MEDLINK HEALTH CENTER",
    company: "CodeCleix Internship",
    desc: "Developed backend APIs for Doctors, Patients & Admins modules with JWT authentication and role-based access control.",
    no: "",
    url: "#",
    github: "https://github.com/rehmatvisions/medlink-health-backend"
  }
];

const Projects = () => {
  return (
    <div className='my-10 bg-white text-gray-900'>
      <div className='py-8 mb-12'>
        <Heading sub="Visit my project and keep your feedback" title="My.Projects" />
      </div>

      <div className='flex flex-wrap justify-center gap-8 px-4 pb-10'>
        {projectsData.map((project) => (
          <div
            key={project.id}
            tabIndex={0}
            className="relative w-full max-w-sm bg-white rounded-2xl overflow-hidden
                       shadow-md transition-all duration-300
                       cursor-pointer 
                       hover:shadow-2xl focus:shadow-2xl active:shadow-2xl
                       hover:scale-[1.02] focus:scale-[1.02]"
          >
            {/* Full Width Image */}
            <div className="w-full h-48 overflow-hidden bg-gray-100">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 
                           hover:scale-110 focus:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3 bg-white 
                            hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                            focus:bg-gradient-to-r focus:from-blue-500 focus:to-purple-500
                            hover:text-white focus:text-white
                            transition-all duration-300">
              
              <div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm opacity-70 font-medium">{project.company}</p>
              </div>

              {project.no && (
                <span className="inline-block text-xs px-3 py-1 rounded-full 
                                 bg-gray-200 text-gray-800 font-semibold w-fit
                                 transition-all duration-300
                                 hover:bg-white hover:text-blue-500">
                  {project.no} <span className="animate-pulse">♥</span>
                </span>
              )}

              <p className="text-sm leading-relaxed">{project.desc}</p>

              <div className="flex gap-3 mt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full 
                             bg-gray-200 text-gray-800 font-semibold text-sm
                             transition-all duration-300
                             hover:bg-white hover:text-blue-500"
                >
                  <FaEye /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full 
                             bg-gray-200 text-gray-800 font-semibold text-sm
                             transition-all duration-300
                             hover:bg-white hover:text-blue-500"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
