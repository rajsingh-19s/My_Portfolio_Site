
import React from 'react';
import avatar from "../assets/HomePic.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-gray-100 min-h-screen h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden max-w-screen overflow-x-hidden">
      
      {/* Avatar Image */}
      {avatar && (
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          src={avatar}
          alt="avatar"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150";
          }}
          className="mx-auto w-2/3 md:w-1/3 lg:w-1/4 mb-6 rounded-full shadow-lg"
        />
      )}

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 leading-snug"
        >
          Hi! 👋 I'm
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-purple-700 block mt-2"
          >
            Rajkumar Singh
            <span className="text-gray-400"> aka <span className="text-purple-700">Raj</span></span>
          </motion.span>
        </motion.h1>

        {/* Typewriter Text */}
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="text-gray-400 text-xl md:text-2xl mt-10 mb-10 px-2 min-h-[60px]"
        >
          <Typewriter
            words={[
              "Frontend dev blending creativity with code 💡",
              "React, Tailwind, MUI & Framer Motion ⚛️✨",
              "AI-powered builds for speed & scale ⚙️🤖",
              "Design-to-code with Figma & Canva 🎨",
              "Backend with Node & Express.js 🚀",
              "Data flows with MongoDB & SQL 📊"
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center flex-wrap gap-4">

          {/* Hire Me button */}
          <motion.a
            href="mailto:rajsingh1920sk@gmail.com?subject=Exciting%20Opportunity%20to%20Collaborate&body=Dear%20Raj%2C%0A%0AI%20recently%20came%20across%20your%20portfolio%20and%20was%20truly%20impressed%20by%20your%20skills%20and%20projects.%0A%0AWe%20are%20currently%20looking%20for%20creative%20and%20skilled%20developers%20like%20you%20to%20join%20our%20team.%20Your%20experience%20with%20frontend%20technologies%20and%20modern%20UI%2FUX%20practices%20is%20particularly%20aligned%20with%20what%20we%20need.%0A%0AI'd%20love%20to%20schedule%20a%20quick%20call%20to%20discuss%20how%20we%20can%20work%20together.%20Please%20let%20me%20know%20a%20suitable%20time.%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20Regards%2C%0A[Your%20Name]%0A[Your%20Company]%0A[Your%20Designation]"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#9333ea",
              boxShadow: "0 10px 30px rgba(147, 51, 234, 0.5)",
              y: -6,
            }}
            whileTap={{
              scale: 0.92,
              boxShadow: "0 0 0 rgba(0,0,0,0)",
              transition: { duration: 0.005 },
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300 cursor-pointer text-center"
          >
            Hire Me
          </motion.a>

          {/* My Story button scrolls to About */}
          <motion.button
            onClick={scrollToAbout}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
              y: -6,
            }}
            whileTap={{
              scale: 0.92,
              boxShadow: "0 0 0 rgba(0,0,0,0)",
              transition: { duration: 0.005 },
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="border border-gray-300 text-white px-6 py-3 rounded-full transition-colors duration-300 cursor-pointer hover:bg-white hover:text-black shadow-lg"
          >
            My Story
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
