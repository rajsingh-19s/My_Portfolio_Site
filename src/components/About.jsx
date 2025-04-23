
import React from 'react';
import AboutPic from "../assets/AboutPic.jpg";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function About() {
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: imageTextRef, inView: imageTextInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div id='about' className='text-gray-300 py-10'>
            <div className='container mx-auto px-4 text-center'>

                {/* Title */}
                <motion.h2
                    ref={titleRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'
                >
                    About-Me
                </motion.h2>

                {/* Description */}
                <motion.p
                    ref={textRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={textInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center text-xl md:text-2xl'
                >
                   🎨 ⚡ Elevating User Experience with Innovative Designs and Seamless Performance.
                </motion.p>

                {/* Image and Text */}
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        ref={imageTextRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={imageTextInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='mb-8 md:mb-0 md:mr-8 flex justify-center'
                    >
                    <div className="p-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full animate-slow-blink">
                   
                            <img
                                src={AboutPic}
                                alt="About"
                                className='w-50 sm:w-50 md:w-80 rounded-full object-cover border-4 border-gray-900'
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    <motion.p
  initial={{ opacity: 0, x: 100 }}
  animate={imageTextInView ? { opacity: 1, x: 0 } : {}}
  transition={{ delay: 0.6, duration: 0.5 }}
  className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl leading-relaxed space-y-4"
>
  <span className="block">
    <strong>As a passionate and detail-oriented front-end web developer</strong>, I specialize in building
    <strong> visually stunning</strong> and <strong>highly functional websites</strong> using
    <strong> React</strong>, <strong>Tailwind CSS</strong>, and <strong>Bootstrap</strong>.
  </span>

  <span className="block">
    With a solid foundation in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>,
    I craft <strong>seamless user experiences</strong> with modern, responsive designs that
    <strong> engage and convert</strong>.
  </span>

  <span className="block">
    My expertise includes optimizing performance, ensuring <strong>cross-browser compatibility</strong>,
    and leveraging <strong>Tailwind’s utility-first approach</strong> alongside
    <strong> Bootstrap’s powerful components</strong> for efficient styling.
  </span>

  <span className="block">
    While my primary focus is front-end development, I also have hands-on experience with
    <strong> Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>MySQL</strong>—giving
    me the confidence to handle back-end tasks when needed and collaborate effectively across the entire stack.
  </span>

  <span className="block">
    I’m always learning and growing with the latest tech like <strong>Framer Motion</strong> for animations and
    <strong> Material UI (MUI)</strong> for modern UI components. I also use <strong>Figma</strong> and
    <strong> Canva</strong> to create sleek, functional designs that elevate my projects.
  </span>

  <span className="block">
    Whether collaborating with designers or working independently, I’m committed to delivering
    <strong> clean code</strong>, <strong>creative solutions</strong>, and <strong>top-tier digital experiences</strong>.
  </span>

  <span className="block">
    <strong>Let’s build something amazing together! 🚀</strong>
  </span>
</motion.p>


                </div>

                {/* Stats Section */}
                <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
    {[
        { number: "15+", label: "Modern Projects Completed", delay: 0.5 },
        { number: "10+", label: "Frontend & Full-Stack Technologies Mastered", delay: 0.7 },
        { number: "100%", label: "Commitment to Clean & Scalable Code", delay: 0.9 },
    ].map((stat, index) => (
        <motion.div
            key={index}
            ref={statsRef}
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ delay: stat.delay, duration: 0.3 }}
            className='text-center'
        >
            <h3 className='text-5xl md:text-8xl font-bold md:my-6 text-purple-700'>{stat.number}</h3>
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: stat.delay + 0.5, duration: 0.3 }}
                className='text-sm sm:text-base text-gray-400 mt-4'
            >
                {stat.label}
            </motion.p>
        </motion.div>
    ))}
</div>

            </div>
        </div>
    );
}

export default About;
