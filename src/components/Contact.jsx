
// import React from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
// import handshakeImage from '../assets/contact-me/contact.jpg';

// function Contact() {
//     const ref = React.useRef(null);
//     const isInView = useInView(ref, { once: true, margin: '-100px' });

//     return (
//         <div id="contact" ref={ref} className="py-10 px-4 text-gray-300 bg-[#0e0c1e]">
//             <div className="max-w-6xl mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 100 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.2, duration: 0.5 }}
//                     className="text-4xl font-bold text-center mb-8 underline"
//                 >
//                     Contact Me
//                 </motion.h2>

//                 <div className="grid md:grid-cols-2 gap-12 items-center">
//                     {/* Left Card */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -100 }}
//                         animate={isInView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ delay: 0.3, duration: 0.6 }}
//                         className="bg-[#1c1a2b] p-6 rounded-xl shadow-lg hover:shadow-purple-700 transition-shadow space-y-4 max-w-md mx-auto"
//                     >
//                         <div className="overflow-hidden rounded-lg">
//                             <img
//                                 src={handshakeImage}
//                                 alt="Handshake"
//                                 className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
//                             />
//                         </div>
//                         <h3 className="text-2xl font-bold text-purple-500">Get In Touch!</h3>
//                         <p className="text-gray-400">
//                             I am available for Frontend roles in software development. Feel free to reach out!
//                         </p>
//                         <div className="space-y-3 text-sm text-gray-300">
//                             <div className="flex items-center gap-3"><Phone className="text-purple-500" size={16} /> +91 9696184833</div>
//                             <div className="flex items-center gap-3"><Mail className="text-purple-500" size={16} /> rajsingh1920sk@gmail.com</div>
//                             <div className="flex items-center gap-3"><MapPin className="text-purple-500" size={16} /> Palia Kalan, Uttar Pradesh, India</div>
//                         </div>
//                         <motion.a
//                             href="mailto:rajsingh1920sk@gmail.com"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="block w-full text-center mt-4 px-6 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-600 hover:text-white transition-all"
//                         >
//                             Mail <Send className="inline ml-2" size={16} />
//                         </motion.a>
//                     </motion.div>

//                     {/* Right Form */}
//                     <motion.form
//                         action="https://formsubmit.co/rajsingh1920sk@gmail.com"
//                         method="POST"
//                         initial={{ opacity: 0, x: 100 }}
//                         animate={isInView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ delay: 0.4, duration: 0.6 }}
//                         className="bg-[#1c1a2b] p-6 rounded-xl shadow-lg hover:shadow-purple-700 transition-shadow space-y-6 max-w-md mx-auto"
//                     >
//                         <input type="hidden" name="_captcha" value="false" />
//                         <input type="hidden" name="_template" value="table" />
//                         <input type="hidden" name="_next" value="https://your-portfolio-site.com/thankyou" />

//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Your Name"
//                             required
//                             className="w-full p-3 rounded-lg bg-[#2a2939] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Your Email"
//                             required
//                             className="w-full p-3 rounded-lg bg-[#2a2939] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         />
//                         <textarea
//                             name="message"
//                             rows="5"
//                             placeholder="Your Message"
//                             required
//                             className="w-full p-3 rounded-lg bg-[#2a2939] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         ></textarea>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             type="submit"
//                             className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all cursor-pointer"
//                         >
//                             Send Message
//                         </motion.button>
//                     </motion.form>
//                 </div>
//             </div>

//             {/* Footer */}
//             <footer className="mt-12 border-t border-purple-600 pt-5 text-sm text-gray-400">
//                 <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
//                     <div className="text-center md:text-left w-full md:w-auto text-xl">
//                         © {new Date().getFullYear()} All Rights Reserved
//                     </div>
                  

//                     <div className="text-lg lg:text-xl font-bold  items-center flex gap-2 ">
//                       <span className="text-fuchsia-100">CODE</span>
//                       <span className="text-purple-500">HORIZON</span>
//                     </div>


//                     <div className="flex gap-4 justify-center md:justify-end w-full md:w-auto text-white text-xl">
//                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><Facebook size={25} /></a>
//                         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><Twitter size={25} /></a>
//                         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><Linkedin size={25} /></a>
//                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><Instagram size={25} /></a>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default Contact;


import React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Github,
  Linkedin,
  Instagram,
  Send,
} from 'lucide-react';
import handshakeImage from '../assets/contact-me/contact.jpg';

function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div id="contact" ref={ref} className="py-10 px-4 text-gray-300 bg-[#0e0c1e]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 underline"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-[#1c1a2b] p-6 rounded-xl shadow-lg hover:shadow-purple-700 transition-shadow space-y-4 max-w-md mx-auto"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={handshakeImage}
                alt="Handshake"
                className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-purple-500">Get In Touch!</h3>
            <p className="text-gray-400">
              I am available for Frontend roles in software development. Feel free to reach out!
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="text-purple-500" size={16} /> +91 9696184833
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-purple-500" size={16} /> rajsingh1920sk@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-500" size={16} /> Palia Kalan, Uttar Pradesh, India
              </div>
            </div>
            <motion.a
              href="mailto:rajsingh1920sk@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full text-center mt-4 px-6 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-600 hover:text-white transition-all"
            >
              Mail <Send className="inline ml-2" size={16} />
            </motion.a>
          </motion.div>

          {/* Right Form */}
          <motion.form
            action="https://formsubmit.co/rajsingh1920sk@gmail.com"
            method="POST"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#1c1a2b] p-6 rounded-xl shadow-lg hover:shadow-purple-700 transition-shadow space-y-6 max-w-md mx-auto"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://your-portfolio-site.com/thankyou" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#2a2939] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#2a2939] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-[#2a2939] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all cursor-pointer"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-5 text-sm text-gray-400">
        {/* Gradient Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-600 to-transparent mb-5" />

        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-4 sm:flex-row sm:justify-between items-center text-center sm:text-left">
        <div className="text-center md:text-left w-full md:w-auto text-xl">
                         © {new Date().getFullYear()} All Rights Reserved
                     </div>
                  

                     <div className="text-lg lg:text-xl font-bold  items-center flex gap-2 ">
                       <span className="text-fuchsia-100">CODE</span>
                       <span className="text-purple-500">HORIZON</span>
                     </div>

          <div className="flex gap-4 justify-center text-white text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <Facebook size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <Linkedin size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
