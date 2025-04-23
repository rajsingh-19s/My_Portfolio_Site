
import React, { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { id: 1, text: "About Me", to: "about" },
    { id: 2, text: "Projects", to: "projects" },
    { id: 3, text: "Skills", to: "skills" },
    { id: 4, text: "Blogs", to: "blogs" },
    { id: 5, text: "Contact Me", to: "contact" },
  ];

  return (
    <div className="relative">
      {/* 🖥 Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-3 flex justify-between items-center transition-all duration-300 ${
          sticky ? "bg-black/50 backdrop-blur-md shadow-lg py-2" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="text-lg lg:text-2xl font-bold flex items-center gap-2 tracking-wide">
          <span className="text-fuchsia-100">CODE</span>
          <span className="text-purple-500">HORIZON</span>
        </div>

        {/* 💻 Desktop Menu */}
        <ul className="hidden text-xl lg:text-2xl md:flex items-center space-x-6 text-gray-400">
          {items.map(({ id, text, to }) => (
            <li
              key={id}
              className="hover:text-purple-500 text-2xl cursor-pointer relative transition-all duration-500 
                         transform hover:translate-y-1 hover:scale-110 
                         before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 
                         before:w-0 before:h-1 before:bg-purple-700 before:rounded-full 
                         hover:before:w-full before:transition-all before:duration-300"
            >
              <Link to={to} smooth={true} duration={700} offset={-50}>
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <motion.a
          href='https://drive.google.com/file/d/1q0Y5feZxOZmpistETk8EWSepGZdFaEzb/view?usp=sharing'
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block font-medium text-lg bg-purple-500 hover:bg-purple-700 transition-colors cursor-grab duration-300 text-black px-5 py-2 rounded-full shadow-md"
        >
          Download CV
        </motion.a>

        {/* ☰ Mobile Menu Icon */}
        <div onClick={() => setMenu(!menu)} className="md:hidden text-gray-300 cursor-pointer">
          {menu ? <IoClose size={34} /> : <TiThMenu size={28} />}
        </div>
      </motion.div>

      {/* 📱 Mobile Slide Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menu ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-2/5 sm:w-1/2 h-screen bg-black/90 text-gray-300 flex flex-col items-center justify-center space-y-8 z-40 shadow-lg"
      >
        <ul className="text-center space-y-6 text-lg">
          {items.map(({ id, text, to }) => (
            <li
              key={id}
              className="relative text-gray-300 font-semibold cursor-pointer 
                         transform hover:translate-y-1 hover:scale-110 transition-all duration-300 
                         before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-purple-500 
                         before:blur-md before:opacity-50 before:transition-all before:duration-300 
                         hover:before:opacity-100"
              onClick={() => setMenu(false)}
            >
              <Link to={to} smooth={true} duration={700} offset={-50}>
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <motion.a
           href='https://drive.google.com/file/d/1q0Y5feZxOZmpistETk8EWSepGZdFaEzb/view?usp=sharing'
           target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-black px-4 py-2 rounded-full shadow-md"
        >
          Download CV
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Navbar;
