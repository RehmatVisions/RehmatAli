import HeroSec from './HeroSec'
import Feautures from './Feautures'
import Projects from './Projects'
import Resume from './Resume'
import Testimonials from './Testimonials'
import Contacts from './Contacts'
import Footer from './Footer'
import Chatbot from './Chatbot'
 
import { Link } from 'react-router-dom'
 

const Home = () => {
  return (
        <div>   
          
          <HeroSec />
             <Resume />
             <Projects /> 
           <Feautures /> 
       
              
                 {/* <ResumeSkills />  */}
              <Testimonials /> 
               
                 <Contacts /> 
                         <Chatbot/>
                      
                 <Footer/>
     <Link
        to="/chatbot"
      className="fixed 
           bottom-22 right-4
           sm:bottom-26 sm:right-5
           md:bottom-24 md:right-6
           lg:bottom-28 lg:right-8
           group outline-none
           z-[9997]
           transition-transform duration-200 active:scale-95
           focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-xl"
      >
       <button
      className="group relative outline-0
        [--sz-btn:56px] sm:[--sz-btn:60px] md:[--sz-btn:64px] lg:[--sz-btn:68px]
        [--space:calc(var(--sz-btn)/5.5)] [--gen-sz:calc(var(--space)*2)]
        [--sz-text:calc(var(--sz-btn)-var(--gen-sz))]
        h-[var(--sz-btn)] w-[var(--sz-btn)] border border-solid border-transparent
        rounded-xl flex items-center justify-center aspect-square cursor-pointer
        transition-transform duration-200 active:scale-[0.95]
        bg-[linear-gradient(45deg,#efad21,#ffd60f)]
        hover:bg-[linear-gradient(45deg,#ffd60f,#efad21)]
        [box-shadow:#3c40434d_0_1px_2px_0,#3c404326_0_2px_6px_2,#0000004d_0_30px_60px_-30px,#34343459_0_-2px_6px_0_inset]
        hover:shadow-[#3c40434d_0_2px_4px_0,#3c404326_0_4px_8px_2,#0000004d_0_40px_70px_-30px,#34343459_0_-2px_6px_0_inset]"
    >
      <svg
        className="animate-pulse absolute z-10 overflow-visible transition-all duration-300
          text-[#ffea50] group-hover:text-white
          top-[calc(var(--sz-text)/7)] left-[calc(var(--sz-text)/7)]
          h-[var(--gen-sz)] w-[var(--gen-sz)]
          group-hover:h-[var(--sz-text)] group-hover:w-[var(--sz-text)]
          group-hover:left-[calc(var(--sz-text)/4)] group-hover:top-[calc(calc(var(--gen-sz))/2)]"
        stroke="none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
        ></path>
      </svg>
      <span className="font-extrabold text-xs sm:text-sm leading-none text-white transition-all duration-200
        group-hover:opacity-0"
      >
        GEMINI
      </span>
    </button>
      </Link>





                 
         
                 
           
               
    </div>
  )
}

export default Home
