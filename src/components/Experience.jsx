 import React from 'react';
import ResCard from './subcomponents/ResCard';
import CodeCelix from '../images/codecelix_logo.jpg';
import fiverr from '../images/fiverr.jpg';
import Developershub from '../images/developershub.jpg';

const Experience = () => {
  return (
    <div className="py-5 px-4">
      {/* Responsive Cards Wrapper */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-center">
        
        <ResCard 
          img={CodeCelix}
          heading="Intern Web Developer (Full_Stack)"
          date="MONGODB ,  EXPRESSJS  ,  REACTJS ,  NODEJS"
          ins="CodeCelix OCT_2025 Current"
          desc="Built multiple frontend projects through self-learning, including weather apps, CRUD systems, shopping cart clones, and portfolio websites. Focused on mastering React fundamentals, responsive UI with Tailwind CSS, and using public APIs to simulate real-world use cases."
        />

        <ResCard 
          img={Developershub}
          heading="Intern FullStack Developer"
          date="MONGODB ,  EXPRESSJS  ,  REACTJS ,  NODEJS"
          ins="DevelopersHub Corporation© Nov_2025 Current"
          desc="Completed multiple hands-on projects to strengthen frontend development skills. These projects include real-life scenarios such as user authentication, state management, responsive layouts, and API consumption."
        />

       <ResCard 
  img={fiverr}                          // Project ya skill ka image
  heading="FreeLance Web Developer" // Role/Title
  date="Tailwind, Responsive Design, Animated"                        // Year
  ins="Fiverr_2025" // Skills/Tools used
  desc="Focused on building attractive and responsive UIs using Tailwind CSS. Created dark/light toggles, reusable components, animations, and grid/flex-based layouts for multiple apps and websites."
/>

      </div>
    </div>
  );
};

export default Experience;
