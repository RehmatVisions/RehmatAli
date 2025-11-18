import { motion } from 'framer-motion';
import CodeCelix from '../images/codecelix_logo.jpg';
import fiverr from '../images/fiverr.jpg';
import Developershub from '../images/developershub.jpg';

const Experience = () => {
  const experiences = [
    {
      img: CodeCelix,
      heading: "Intern Web Developer (Full_Stack)",
      date: "MONGODB ,  EXPRESSJS  ,  REACTJS ,  NODEJS",
      ins: "CodeCelix OCT_2025 Current",
      desc: "Built multiple frontend projects through self-learning, including weather apps, CRUD systems, shopping cart clones, and portfolio websites. Focused on mastering React fundamentals, responsive UI with Tailwind CSS, and using public APIs to simulate real-world use cases."
    },
    {
      img: Developershub,
      heading: "Intern FullStack Developer",
      date: "MONGODB ,  EXPRESSJS  ,  REACTJS ,  NODEJS",
      ins: "DevelopersHub Corporation© Nov_2025 Current",
      desc: "Completed multiple hands-on projects to strengthen frontend development skills. These projects include real-life scenarios such as user authentication, state management, responsive layouts, and API consumption."
    },
    {
      img: fiverr,
      heading: "FreeLance Web Developer",
      date: "Tailwind, Responsive Design, Animated",
      ins: "Fiverr_2025",
      desc: "Focused on building attractive and responsive UIs using Tailwind CSS. Created dark/light toggles, reusable components, animations, and grid/flex-based layouts for multiple apps and websites."
    }
  ];

  return (
    <div className="py-5 px-4">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-center">
        {experiences.map((exp, index) => (
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
                src={exp.img}
                alt="Profile"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200 transition-all duration-300
                           group-hover:border-white group-focus:border-white group-active:border-white"
              />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">{exp.heading}</h2>
                <h4 className="text-sm sm:text-base font-medium opacity-70">{exp.ins}</h4>
              </div>
            </div>

            <span className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-800 font-semibold transition-all duration-300
                              hover:bg-white hover:text-blue-500
                              focus:bg-white focus:text-blue-500
                              active:bg-white active:text-blue-500">
              {exp.date}
            </span>

            <p className="text-sm sm:text-base leading-relaxed">{exp.desc}</p>

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
    </div>
  );
};

export default Experience;
