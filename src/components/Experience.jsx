 import React from 'react';
import ResCard from './subcomponents/ResCard';
import frontend from '../images/front.jpeg';
import ui from '../images/ui.jpeg';
import projects from '../images/porject.jpeg';

const Experience = () => {
  return (
    <div className="py-5 px-4">
      {/* Responsive Cards Wrapper */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-center">
        
        <ResCard 
          img={frontend}
          heading="Frontend Development Experience – Self Projects"
          date="2024 – Present"
          ins="React.js, Tailwind CSS, Many HTML, CSS Templates, Fetch APIs"
          desc="Built multiple frontend projects through self-learning, including weather apps, CRUD systems, shopping cart clones, and portfolio websites. Focused on mastering React fundamentals, responsive UI with Tailwind CSS, and using public APIs to simulate real-world use cases."
        />

        <ResCard 
          img={projects}
          heading="React Practice Projects"
          date="2024"
          ins="Portfolio, Weather App, Eduisty, Gotto, StreamLabs, Fastfood_Web"
          desc="Completed multiple hands-on projects to strengthen frontend development skills. These projects include real-life scenarios such as user authentication, state management, responsive layouts, and API consumption."
        />

        <ResCard 
          img={ui}
          heading="UI/UX Experience with Tailwind CSS"
          date="2024"
          ins="Tailwind, Responsive Design, Animated"
          desc="Focused on building attractive and responsive UIs using Tailwind CSS. Created dark/light toggles, reusable components, animations, and grid/flex-based layouts for multiple apps and websites."
        />

      </div>
    </div>
  );
};

export default Experience;
