 import React from 'react';
 import { motion } from 'framer-motion';
import SkillCard from './subcomponents/SkillCard';

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
  return (
    <>
      <motion.div
        initial={{ opacity: 0, rotateY: -8 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4"
      >
        <motion.div
          className="flex flex-wrap justify-center gap-9 transform-gpu"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}><SkillCard img={htmlImg} skill="HTML" /></motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}><SkillCard img={cssImg} skill="CSS" /></motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}><SkillCard img={jsImg} skill="JavaScript" /></motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}><SkillCard img={tailwindImg} skill="Tailwind CSS" /></motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}><SkillCard img={reactImg} skill="ReactJS" /></motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}><SkillCard img={nodeImg} skill="Node.js" /></motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}><SkillCard img={expressImg} skill="Express.js" /></motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}><SkillCard img={mongoImg} skill="MongoDB" /></motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}><SkillCard img={githubImg} skill="GitHub" /></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ResumeSkills;
