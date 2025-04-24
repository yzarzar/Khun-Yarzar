import React from "react";
import { FaCode, FaLightbulb, FaRocket, FaBook, FaBriefcase, FaReact, FaJs, FaPhp, FaDatabase, FaJava, FaServer, FaGlobe } from "react-icons/fa";
import { SiLaravel, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";
import image from "../assets/photo.jpeg";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const techStack = [
    { icon: FaReact, name: "React" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaJava, name: "Java" },
    { icon: SiSpringboot, name: "Spring Boot" },
    { icon: FaPhp, name: "PHP" },
    { icon: SiLaravel, name: "Laravel" },
    { icon: FaDatabase, name: "Database" },
  ];

  const achievements = [
    { title: "Projects Completed", count: "50+" },
    { title: "Happy Clients", count: "30+" },
    { title: "Years of Experience", count: "5+" },
    { title: "Open Source Contributions", count: "20+" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Remove any top padding or wave effect here */}
      
      {/* Technology-related background graphics */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute left-0 top-0 w-1/3 h-1/3 text-blue-500 opacity-10 animate-float" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-1/4 h-1/4 text-green-500 opacity-10 animate-pulse" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3,3H21V21H3V3M5,5V19H19V5H5Z M11,7H13V9H11V7M7,7H9V9H7V7M15,7H17V9H15V7M7,11H9V13H7V11M11,11H13V13H11V11M15,11H17V13H15V11M7,15H9V17H7V15M11,15H13V17H11V15M15,15H17V17H15V15Z" />
        </svg>
        <div className="absolute left-1/4 top-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute right-1/4 bottom-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-xl"></div>

      {/* Large abstract shape */}
      <svg className="absolute top-0 right-0 w-64 h-64 text-blue-500 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.6,75.6,43.9C67.4,57.1,55.4,68.3,41.6,76.3C27.9,84.3,13.9,89.1,-0.7,90.3C-15.3,91.5,-30.6,89,-44.5,82.1C-58.3,75.2,-70.7,63.9,-79.1,50C-87.5,36.1,-91.9,18.1,-91.2,0.4C-90.5,-17.3,-84.6,-34.6,-74.6,-49C-64.6,-63.4,-50.5,-74.9,-35.7,-81.7C-20.9,-88.5,-5.2,-90.6,9.2,-86.6C23.6,-82.6,47.2,-72.5,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-6"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-2xl text-blue-400 mb-12 text-center"
          variants={itemVariants}
        >
          Transforming ideas into elegant, efficient code
        </motion.p>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <motion.div className="lg:w-3/5 lg:pr-12 mb-8 lg:mb-0" variants={itemVariants}>
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg mb-8 border-l-4 border-blue-500"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Hello, I'm Khun Yarzar</h3>
              <p className="text-gray-300 leading-relaxed">
                A passionate, self-taught Full Stack Developer with 5+ years of experience crafting robust and scalable web applications. My journey in the tech world has been one of continuous learning and innovation, driven by a deep-seated curiosity and love for problem-solving. I believe in the power of hands-on experience and relentless pursuit of knowledge to stay at the forefront of web development.
              </p>
            </motion.div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              As a self-taught developer with 5+ years of experience, I've forged my own path in the tech world. My journey is fueled by a passion for problem-solving and a relentless pursuit of knowledge. I believe in the power of hands-on experience and continuous learning to stay at the forefront of web development.
            </p>
            <motion.blockquote 
              className="text-gray-400 italic border-l-4 border-blue-500 pl-4 my-8"
              variants={itemVariants}
            >
              "True education is a self-driven journey of discovery, not confined by classroom walls."
            </motion.blockquote>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" variants={containerVariants}>
              <motion.div className="bg-gray-800 p-6 rounded-lg" variants={itemVariants}>
                <FaBook className="text-blue-400 text-3xl mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Self-Directed Learning</h3>
                <p className="text-gray-400">Mastering new technologies through online resources, documentation, and practical application</p>
              </motion.div>
              <motion.div className="bg-gray-800 p-6 rounded-lg" variants={itemVariants}>
                <FaBriefcase className="text-blue-400 text-3xl mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Real-World Experience</h3>
                <p className="text-gray-400">Crafting diverse, impactful projects across the full stack, from e-commerce platforms to data-driven applications</p>
              </motion.div>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" variants={containerVariants}>
              {[
                { icon: FaCode, title: "Clean Code", desc: "Crafting maintainable and efficient solutions" },
                { icon: FaLightbulb, title: "Innovative Thinking", desc: "Creating unique solutions to complex challenges" },
                { icon: FaRocket, title: "Rapid Adaptation", desc: "Quickly mastering new technologies and methodologies" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
                  variants={itemVariants}
                >
                  <item.icon className="text-blue-400 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="mt-12" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-6">My Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <FaServer className="text-blue-400 text-3xl mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Backend Mastery</h4>
                  <p className="text-gray-400">Architecting robust server-side solutions with a focus on performance and scalability.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <FaGlobe className="text-blue-400 text-3xl mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Frontend Finesse</h4>
                  <p className="text-gray-400">Crafting intuitive and responsive user interfaces that deliver exceptional user experiences.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="mt-12" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-6">Achievements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center bg-gray-800 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400">{achievement.count}</div>
                    <div className="text-gray-300">{achievement.title}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="lg:w-2/5 bg-gray-800 bg-opacity-50 p-6 rounded-lg" variants={itemVariants}>
            <div className="overflow-hidden rounded-lg shadow-xl mb-8">
              <img
                src={image}
                alt="Khun Yarzar"
                className="w-full max-w-md mx-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center bg-gray-700 p-4 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <tech.icon className="text-4xl text-blue-400 mb-2" />
                    <span className="text-gray-300 text-sm text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-6">Current Focus</h3>
              <p className="text-gray-300">
                I'm currently diving deep into serverless architectures and exploring the potential of AI in web applications. Always excited to discuss these cutting-edge technologies and their practical applications in solving real-world problems.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-6">Fun Facts</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li className="mb-2">I can solve a Rubik's cube in under 2 minutes</li>
                <li>I'm an avid hiker and have climbed 3 of the world's tallest peaks</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
