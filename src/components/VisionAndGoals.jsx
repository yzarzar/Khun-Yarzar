import React from "react";
import { FaRocket, FaGlobe, FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const VisionAndGoals = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="vision"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Graphic elements */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 text-blue-500 opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.6,75.6,43.9C67.4,57.1,55.4,68.3,41.6,76.3C27.9,84.3,13.9,89.1,-0.7,90.3C-15.3,91.5,-30.6,89,-44.5,82.1C-58.3,75.2,-70.7,63.9,-79.1,50C-87.5,36.1,-91.9,18.1,-91.2,0.4C-90.5,-17.3,-84.6,-34.6,-74.6,-49C-64.6,-63.4,-50.5,-74.9,-35.7,-81.7C-20.9,-88.5,-5.2,-90.6,9.2,-86.6C23.6,-82.6,47.2,-72.5,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-xl"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          variants={itemVariants}
        >
          Vision & Future Goals
        </motion.h2>
        <motion.p
          className="text-xl text-blue-400 mb-12 text-center"
          variants={itemVariants}
        >
          Shaping the future through innovative technology
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <FaRocket className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Tech Startup Dream
            </h3>
            <p className="text-gray-300">
              My ultimate goal is to establish a modern tech company that pushes
              the boundaries of innovation. This startup will focus on creating
              cutting-edge solutions that address global challenges and improve
              lives worldwide.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <FaGlobe className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Global Impact
            </h3>
            <p className="text-gray-300">
              I envision developing technologies that have a far-reaching,
              positive impact on society. From enhancing business efficiency to
              solving critical issues in healthcare and education, my aim is to
              contribute to global progress.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <FaHandsHelping className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Empowering Communities
            </h3>
            <p className="text-gray-300">
              A key focus will be on developing solutions that empower
              underserved communities. By bridging technological gaps, we can
              create opportunities and drive economic growth in developing
              regions.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <FaLightbulb className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Innovative Solutions
            </h3>
            <p className="text-gray-300">
              I'm committed to exploring emerging technologies like AI,
              blockchain, and IoT to create innovative solutions. These
              technologies have the potential to revolutionize industries and
              create new paradigms in how we live and work.
            </p>
          </motion.div>
        </div>
        
        <motion.p
          className="text-xl text-gray-300 mt-12 text-center"
          variants={itemVariants}
        >
          Join me on this exciting journey as we work towards a future where
          technology serves as a powerful force for positive change, driving
          progress and improving lives on a global scale.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default VisionAndGoals;