import React, { useState, useEffect } from "react";
import profileImage from "../assets/profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDownload,
  FaEnvelope,
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaViber,
  FaPhone,
} from "react-icons/fa";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from 'react-router-dom';

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span>{`${words[index].substring(0, subIndex)}${
      subIndex === words[index].length ? "|" : ""
    }`}</span>
  );
};

const SkillBar = ({ skill, percentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const animationDuration = 1500; // 1.5 seconds
    const frameDuration = 1000 / 60; // 60 fps
    const totalFrames = Math.round(animationDuration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCurrentPercentage(Math.round(percentage * progress));

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-base font-medium text-blue-300">{skill}</span>
        <span className="text-sm font-medium text-blue-300">
          {currentPercentage}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 relative">
        <div
          className="bg-blue-400 h-2.5 rounded-full"
          style={{
            width: `${currentPercentage}%`,
            transition: "width 0.1s linear",
          }}
        ></div>
        <div
          className="absolute top-1/2 -mt-1.5 w-3 h-3 rounded-full border-2 border-blue-400 bg-gray-900"
          style={{
            left: `calc(${currentPercentage}% - 6px)`,
            transition: "left 0.1s linear",
          }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
      {({ isVisible }) => (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Top Skills
          </h3>
          {isVisible && (
            <>
              <SkillBar skill="JavaScript" percentage={90} />
              <SkillBar skill="React" percentage={85} />
              <SkillBar skill="Php" percentage={70} />
            </>
          )}
        </div>
      )}
    </VisibilitySensor>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setIsVisible(true), 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden py-16">
      {/* Technology-related background graphics */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute left-0 top-0 w-1/3 h-1/3 text-blue-500 opacity-10 animate-float"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"
          />
        </svg>
        <svg
          className="absolute right-0 bottom-0 w-1/4 h-1/4 text-green-500 opacity-10 animate-pulse"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3,3H21V21H3V3M5,5V19H19V5H5Z M11,7H13V9H11V7M7,7H9V9H7V7M15,7H17V9H15V7M7,11H9V13H7V11M11,11H13V13H11V11M15,11H17V13H15V11M7,15H9V17H7V15M11,15H13V17H11V15M15,15H17V17H15V15Z"
          />
        </svg>
        <div className="absolute left-1/4 top-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute right-1/4 bottom-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
      </div>

      <div
        className={`container mx-auto px-4 z-10 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/5 mb-8 lg:mb-0 animate-fade-in-right">
            <div
              className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              {/* Outer rotating border */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-75 animate-spin-slow"></div>

              {/* Inner pulsing border */}
              <div className="absolute inset-2 rounded-full border-4 border-white opacity-50 animate-pulse"></div>

              {/* Profile image */}
              <img
                src={profileImage}
                alt="Khun Yarzar"
                className="absolute inset-3 rounded-full object-cover w-[calc(100%-24px)] h-[calc(100%-24px)]"
              />

              {/* Decorative elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
            
            {/* Further increased spacing for social icons and phone numbers */}
            <div className="mt-20">
              <div className="flex justify-center space-x-4 mb-8 animate-fade-in-up animation-delay-1500">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaTelegramPlane size={24} />
                </a>
                <a href="https://wa.me/959123456789" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaWhatsapp size={24} />
                </a>
                <a href="viber://chat?number=+959987654321" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaViber size={24} />
                </a>
              </div>
              <div className="flex justify-center space-x-4 text-gray-300 animate-fade-in-up animation-delay-1800">
                <div className="flex items-center">
                  <FaPhone className="mr-2" />
                  <span>+95 9 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2" />
                  <span>+95 9 987 654 321</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Khun Yarzar
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-blue-400 mb-4 animate-fade-in-up animation-delay-300">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-300 mb-6 animate-fade-in-up animation-delay-600">
              Passionate about{" "}
              <TypeWriter
                words={[
                  "creating innovative solutions",
                  "building scalable applications",
                  "learning new technologies",
                ]}
              />
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6 animate-fade-in-up animation-delay-900">
              <div className="glass-card flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <FaCode className="text-blue-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 font-semibold text-lg">Frontend</span>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Building intuitive UIs</p>
              </div>
              <div className="glass-card flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <FaServer className="text-green-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 font-semibold text-lg">Backend</span>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Powering robust systems</p>
              </div>
              <div className="glass-card flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <FaMobileAlt className="text-yellow-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 font-semibold text-lg">Mobile</span>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Creating seamless apps</p>
              </div>
            </div>
            <SkillsSection />
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-1800">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-flex items-center">
                <FaEnvelope className="mr-2" /> Contact Me
              </a>
              <Link to="/projects" className="bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-full border border-blue-500 hover:border-transparent transition duration-300">
                View Projects
              </Link>
              <a href="/path-to-your-resume.pdf" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-flex items-center">
                <FaDownload className="mr-2" /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add this wave effect at the bottom of the Home component */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-800"></path>
        </svg>
      </div>
    </div>
  );
}