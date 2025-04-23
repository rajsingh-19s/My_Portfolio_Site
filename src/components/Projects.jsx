import React, { useState, useEffect } from 'react';
import { FaAppStore } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden"; // Disable scrolling when popup is open
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling when popup is closed
        }
        return () => {
            document.body.style.overflow = "auto"; // Cleanup on unmount
        };
    }, [selectedProject]);

    const projectsData = [
        {
            title: "🌍💱 Currency Converter",
        description: "A real-time currency converter using live exchange rates.",
        fullDescription: (
            <>
                <p className="mb-4">
                    A real-time currency converter built with <strong>React, JavaScript, HTML, and TailwindCSS</strong>. It provides seamless currency conversion using live exchange rates.
                </p>
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🚀 Features:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>✅ Convert currencies instantly</li>
                    <li>✅ Real-time exchange rate updates via API integration</li>
                    <li>✅ User-friendly and intuitive interface</li>
                    <li>✅ Fully responsive design for all devices</li>
                </ul>

                <h4 className="text-lg text-purple-500 font-semibold mb-2">🛠 Tech Stack:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>⚡ <strong>Frontend:</strong> React, HTML, TailwindCSS</li>
                    <li>⚡ <strong>Logic & API Handling:</strong> JavaScript</li>
                </ul>

                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    <a href="https://currencyuniversalexchange.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">View Live</motion.button>
                    </a>
                    <a href="https://github.com/rajsingh-19s/React_Series/tree/5c280bebb0eb6170d9ac74e48e511565d2013ecb/06currencyConverter" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                        
                        
                        className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">GitHub Repo</motion.button>
                    </a>
                </div>
            </>
        ),
    },
    {
        title: "✅📝 Todo Creater",
        description: "A simple and efficient task management web app to organize tasks effortlessly.",
        fullDescription: (
            <>
                <p className="mb-4">
                    A simple and efficient task management web app built with <strong>React, JavaScript, HTML, and TailwindCSS</strong>. It helps users organize their tasks effortlessly.
                </p>
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🚀 Features:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>✅ Add, edit, and delete tasks with ease</li>
                    <li>✅ Data persistence using local storage</li>
                    <li>✅ Clean and user-friendly interface</li>
                    <li>✅ Fully responsive design for mobile and desktop</li>
                </ul>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🛠 Tech Stack:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>⚡ <strong>Frontend:</strong> React, HTML, TailwindCSS</li>
                    <li>⚡ <strong>Logic & Storage:</strong> JavaScript, Local Storage</li>
                </ul>
    
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    <a href="https://todocreater.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                        
                        className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">View Live</motion.button>
                    </a>
                    <a href="https://github.com/rajsingh-19s/React_Series/tree/5c280bebb0eb6170d9ac74e48e511565d2013ecb/10todoContextLocalStorage" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">GitHub Repo</motion.button>
                    </a>
                </div>
            </>
        ),
    },
    {
        title: "📚🎓 EdVenture TailwindCSS Template",
        description: "A sleek and modern HTML template for online courses and e-learning platforms.",
        fullDescription: (
            <>
                <p className="mb-4">
                    A modern and lightweight <strong>HTML template</strong> designed for online courses, schools, and e-learning platforms. Built with <strong>Tailwind CSS</strong>, it offers a sleek and professional user experience.
                </p>
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🚀 Features:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>✅ Clean and modern UI</li>
                    <li>✅ Course listings for easy navigation</li>
                    <li>✅ Instructor profile sections</li>
                    <li>✅ Optimized for laptops and desktops</li>
                </ul>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🛠 Tech Stack:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>⚡ <strong>Frontend:</strong> HTML, TailwindCSS</li>
                </ul>
    
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    <a href="https://edventure-tailwindcss-template.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">View Live</motion.button>
                    </a>
                    <a href="https://github.com/rajsingh-19s/EdVenture_template-site.git" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">GitHub Repo</motion.button>
                    </a>
                </div>
            </>
        ),
    },{
        title: "🔑🛡️ Password Creater",
        description: "A responsive password generator with customizable options.",
        fullDescription: (
            <>
                <p className="mb-4">
                    A responsive password generator built with <strong>React, TailwindCSS, HTML, and JavaScript</strong>. Users can create strong, customizable passwords effortlessly.
                </p>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🚀 Features:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>✅ Set password length</li>
                    <li>✅ Include/exclude uppercase, lowercase, numbers & symbols</li>
                    <li>✅ One-click copy feature</li>
                    <li>✅ Fully responsive design</li>
                </ul>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🛠 Tech Stack:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>⚡ <strong>Frontend:</strong> React, TailwindCSS</li>
                    <li>⚡ <strong>Logic:</strong> JavaScript</li>
                </ul>
    
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    <a href="https://passwordmkr.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">View Live</motion.button>
                    </a>
                    <a href="https://github.com/rajsingh-19s/EdVenture_template-site.git" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">GitHub Repo</motion.button>
                    </a>
                </div>
            </>
        ),
    },

    {
        title: "🌐📌 React Router & Tailwind Template",
        description: "A responsive template with React Router for multi-page navigation.",
        fullDescription: (
            <>
                <p className="mb-4">
                    A sleek and responsive website template built with <strong>React Router, Tailwind CSS, HTML, and JavaScript</strong>. It provides a structured foundation for multi-page apps with smooth routing and a clean layout.
                </p>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🚀 Features:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>✅ Multi-page navigation with React Router</li>
                    <li>✅ Modern and responsive UI with Tailwind CSS</li>
                    <li>✅ Scalable and fast-loading architecture</li>
                    <li>✅ Clean and structured code for easy customization</li>
                </ul>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🛠 Tech Stack:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>⚡ <strong>Frontend:</strong> React, HTML, Tailwind CSS</li>
                    <li>⚡ <strong>Routing:</strong> React Router</li>
                    <li>⚡ <strong>Styling:</strong> Tailwind CSS</li>
                </ul>
    
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    <a href="https://yourlogo-router.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}n className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">View Live</motion.button>
                    </a>
                    <a href="https://github.com/rajsingh-19s/React_Series/tree/5c280bebb0eb6170d9ac74e48e511565d2013ecb/07reactRouter" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">GitHub Repo</motion.button>
                    </a>
                </div>
            </>
        ),
    },

    {
        title: "🌈🔄 Bg Changer",
        description: "A fun background color switcher with React and Tailwind.",
        fullDescription: (
            <>
                <p className="mb-4">
                    A simple yet interactive <strong>background color changer</strong> built with <strong>React, Tailwind CSS, HTML, and JavaScript</strong>. It uses <strong>React’s useState</strong> hook to change background colors dynamically with a click.
                </p>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🚀 Features:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>✅ Instantly change background color with a click</li>
                    <li>✅ Built using <strong>React’s useState hook</strong> for state management</li>
                    <li>✅ Modern and responsive UI with <strong>Tailwind CSS</strong></li>
                    <li>✅ Lightweight and fast performance</li>
                </ul>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🛠 Tech Stack:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>⚡ <strong>Frontend:</strong> React, HTML, Tailwind CSS</li>
                    <li>⚡ <strong>State Management:</strong> React useState Hook</li>
                    <li>⚡ <strong>Logic:</strong> JavaScript</li>
                </ul>
    
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    <a href="https://bgswitch.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">View Live</motion.button>
                    </a>
                    <a href="https://github.com/rajsingh-19s/React_Series/tree/5c280bebb0eb6170d9ac74e48e511565d2013ecb/07reactRouter" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">GitHub Repo</motion.button>
                    </a>
                </div>
            </>
        ),
    },

    {
        title: "🌗🔄 Theme Switcher",
        description: "A sleek dark/light theme toggler with state persistence.",
        fullDescription: (
            <>
                <p className="mb-4">
                    A dynamic theme switcher built with <strong>React, Tailwind CSS, HTML, and JavaScript</strong>. It allows users to toggle between light and dark themes using React’s <strong>useState</strong> and <strong>useEffect</strong> hooks.
                </p>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">✨ Features:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>🌙🌞 Toggle between dark and light themes</li>
                    <li>🔄 State persistence using <strong>useEffect</strong></li>
                    <li>⚡ Smooth transitions for a better user experience</li>
                    <li>📱 Fully responsive design</li>
                </ul>
    
                <h4 className="text-lg text-purple-500 font-semibold mb-2">🛠 Tech Stack:</h4>
                <ul className="list-disc list-inside mb-4 text-left ml-4">
                    <li>⚡ <strong>Frontend:</strong> React, Tailwind CSS, HTML</li>
                    <li>⚡ <strong>State Management:</strong> React useState & useEffect</li>
                    <li>⚡ <strong>Logic:</strong> JavaScript</li>
                </ul>
    
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    <a href="https://theme-changer-react.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">View Live</motion.button>
                    </a>
                    <a href="https://github.com/rajsingh-19s/React_Series/tree/5c280bebb0eb6170d9ac74e48e511565d2013ecb/09themeSwitcher" target="_blank" rel="noopener noreferrer">
                        <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }} className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer">GitHub Repo</motion.button>
                    </a>
                </div>
            </>
        ),
    },
    
    
    
    ];

    return (
        <div id='projects' className='text-gray-300 py-10 relative' ref={containerRef}>
            <div className='container mx-auto px-4 text-center'>
                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'
                >
                    Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                    className='mb-12 text-gray-400 text-xl md:text-2xl text-center'
                >
                   Dive into the projects I've crafted — blending design and functionality using React, Tailwind, and modern web tools.
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto scrollbar-thin scrollbar-thumb-purple'>
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 * index, duration: 0.6, ease: "easeOut" }}
                            className='bg-[#1c1a2b] rounded-lg p-6 text-center 
                                       hover:shadow-xl hover:shadow-purple-700 
                                       transition-shadow duration-500 cursor-pointer'
                            onClick={() => setSelectedProject(project)}
                        >
                            <FaAppStore className='text-purple-700 text-4xl sm:text-5xl mb-4 mx-auto' />
                            <h3 className='text-xl sm:text-xl lg:text-2xl font-semibold mb-2'>{project.title}</h3>
                            <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{project.description}</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='mt-4 px-4 py-2 bg-transparent border border-purple-500 text-purple-500 rounded-lg transition-all hover:bg-purple-500 hover:text-white cursor-pointer'
                            >
                                Read More
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className='fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-black/40 z-50'
                    onClick={() => setSelectedProject(null)} // Clicking anywhere outside closes the popup
                >
                   <motion.div
                     initial={{ scale: 0.8, opacity: 0, y: 30 }}
                     animate={{ scale: 1, opacity: 1, y: 0 }}
                     exit={{ scale: 0.8, opacity: 0, y: 30 }}
                     transition={{ duration: 0.5, ease: "easeOut" }}
                     className='
                w-full max-w-4xl md:w-[70%] p-6 md:p-8 rounded-2xl 
                backdrop-blur-xl bg-[#1c1a2bb3] border border-purple-500/20 
                shadow-[0_0_30px_rgba(168,85,247,0.3)] text-gray-300 
                overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-purple'
                     onClick={(e) => e.stopPropagation()}
                    >

                        <h2 className='text-2xl font-bold text-purple-700 mb-4'>{selectedProject.title}</h2>
                        <p className='text-lg text-gray-400'>{selectedProject.fullDescription}</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedProject(null)}
                            className='mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all cursor-pointer' 
                        >
                            Close
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

export default Projects;
