
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import js from '../assets/skills/js.png';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import react from '../assets/skills/react.png';
import tailwind from '../assets/skills/tailwind.png';
import bootstrap from '../assets/skills/bootstrap.png';
import mongodb from '../assets/skills/mongodb.png';
import sql from '../assets/skills/sql.png';
import node from '../assets/skills/node.png';
import express from '../assets/skills/express.png';
import figma from '../assets/skills/figma.png';
import git from '../assets/skills/git.png';
import canva from '../assets/skills/canva.jpg';
import framerMotion from '../assets/skills/framerMotion.png';
import mui from '../assets/skills/mui.png';
import chatgptAI from '../assets/skills/chatgptAI.png';

const categories = [
  {
    title: "Frontend Development",
    skills: [js, html, css, react, tailwind , framerMotion, bootstrap],
  },
  {
    title: "Database",
    skills: [mongodb, sql],
  },
  {
    title: "Backend Development",
    skills: [node, express],
  },
  {
    title:"Others Tools",
    skills: [figma , canva ,  git,  mui, chatgptAI ],
  }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    document.body.style.overflow = selectedCategory ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [selectedCategory]);

  return (
    <div id='skills' ref={sectionRef} className="py-16 px-6 bg-[#0e0c1e] text-gray-300">
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 underline"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * index, duration: 0.3, ease: "easeOut" }}
            onClick={() => setSelectedCategory(category)}
            className="bg-[#1c1a2b] cursor-pointer hover:shadow-purple-600 hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden shadow-md"
          >
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              <p className="text-gray-400 mt-2">Click to explore</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCategory && (
        <Modal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
      )}
    </div>
  );
};

const Modal = ({ category, onClose }) => {
  const modalRef = useRef(null);
  const isInView = useInView(modalRef, { once: true });
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 bg-black/60 backdrop-blur-[6px] z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1c1a2b] w-[90%] md:w-[70%] max-w-4xl p-10 rounded-2xl shadow-xl relative"
      >
        <h3 className="text-3xl text-purple-500 font-bold mb-6 text-center">{category.title}</h3>

        <div className="flex flex-wrap justify-center gap-6">
          {category.skills.map((skill, index) => {
            const skillName = skill.split('/').pop().split('.')[0];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.4, ease: "easeOut" }}
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                className="group relative w-20 h-20 bg-[#2b283d] p-3 rounded-xl shadow-md hover:shadow-purple-500 transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <img src={skill} alt="Skill" className="w-full h-full object-contain" />
                <div
                  className={`
                    absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                    bg-gray-300 text-black text-xs font-semibold px-2 py-1 rounded shadow
                    whitespace-nowrap z-10
                    hidden group-hover:block
                    ${activeIndex === index ? 'block' : ''}
                    md:group-hover:block
                  `}
                >
                  {skillName.charAt(0).toUpperCase() + skillName.slice(1)}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="mt-8 px-6 py-2 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-all block mx-auto"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
