import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTelegram, FaWhatsapp, FaPhone, FaViber } from 'react-icons/fa';
import { FaFacebookMessenger } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/yourusername", name: "GitHub" },
    { icon: FaLinkedin, link: "https://linkedin.com/in/yourusername", name: "LinkedIn" },
    { icon: FaTwitter, link: "https://twitter.com/yourusername", name: "Twitter" },
    { icon: FaTelegram, link: "https://t.me/yourusername", name: "Telegram" },
    { icon: FaFacebookMessenger, link: "https://m.me/yourusername", name: "Messenger" },
    { icon: FaWhatsapp, link: "https://wa.me/959123456789", name: "WhatsApp" },
    { icon: FaViber, link: "viber://chat?number=+959123456789", name: "Viber" },
    { icon: FaEnvelope, link: "mailto:your.email@example.com", name: "Email" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  const BackgroundIcons = () => {
    const icons = [];
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 20 + 10; // Random size between 10 and 30
      icons.push(
        <rect 
          key={i}
          x={`${x}%`}
          y={`${y}%`}
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
          transform={`rotate(${Math.random() * 360} ${x}% ${y}%)`}
        />
      );
    }
    return icons;
  };

  return (
    <motion.footer 
      className="bg-gray-950 text-white py-12 pt-24 relative overflow-hidden" // Added pt-24 for extra top padding
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* New background icons */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <BackgroundIcons />
        </svg>
      </div>

      {/* Single wave effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0">
        <svg
          className="relative block w-full h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-gray-900" // Changed from fill-gray-800 to fill-gray-900
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="flex flex-col items-center" variants={childVariants}>
          <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaPhone className="inline-block mr-2" />
              <a href="tel:+959123456789" aria-label="Phone 1">+95 9 123 456 789</a>
            </div>
            <div className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaPhone className="inline-block mr-2" />
              <a href="tel:+959987654321" aria-label="Phone 2">+95 9 987 654 321</a>
            </div>
          </div>
          <div className="text-center mb-6 max-w-md">
            <h4 className="text-xl font-semibold mb-2">Subscribe to My Newsletter</h4>
            <p className="text-gray-400">
              Stay up to date with my latest news, updates, and exclusive offers. 
              Join my mailing list today!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-900 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500" // Changed border-gray-700 to border-gray-800 and text-gray-400 to text-gray-500
          variants={childVariants}
        >
          <p>&copy; {currentYear} Khun Yarzar. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;