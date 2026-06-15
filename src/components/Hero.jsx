import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/github.jpg';

const Hero = () => {
  const fullText = 'Shrawan Sah';

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Optimized typing effect
  useEffect(() => {
    let timeout;

    if (!isDeleting && text !== fullText) {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, 120);
    } else if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && text !== '') {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, 60);
    } else if (isDeleting && text === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-dark text-light transition-colors duration-300 pt-20 pb-16"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-[100px] -top-20 -left-20"
        ></motion.div>

        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -bottom-20 -right-20"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div 
          className="w-full lg:w-3/5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              Welcome to my portfolio
            </span>
            <p className="text-xl md:text-2xl text-gray mb-2 font-light tracking-wide">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                {text}
              </span>
              <span className="text-primary animate-blink font-light">|</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-gray mb-10 leading-relaxed max-w-2xl font-light">
              A passionate{' '}
              <span className="text-light font-semibold">
                Computer Science student
              </span>{' '}
              specializing in
              <span className="text-secondary font-semibold">
                {' '}
                Full Stack Development
              </span>{' '}
              with expertise in creating
              <span className="text-light font-semibold">
                {' '}
                interactive
              </span>{' '}
              and
              <span className="text-secondary font-semibold">
                {' '}
                responsive web applications
              </span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#projects"
              onClick={(e) => handleClick(e, '#projects')}
              className="btn"
            >
              View My Work
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="btn-outline"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {[
              { href: "https://github.com/Shrawan3067", label: "GitHub", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
              { href: "https://www.linkedin.com/in/shrawansah", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" },
              { href: "mailto:shrawansah3067@gmail.com", label: "Email", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", isStroke: true }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.label !== 'Email' ? "_blank" : undefined}
                rel={social.label !== 'Email' ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="w-12 h-12 bg-dark-light/50 backdrop-blur-sm border border-gray/20 rounded-full flex items-center justify-center text-gray hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
              >
                <svg className="w-5 h-5" fill={social.isStroke ? "none" : "currentColor"} stroke={social.isStroke ? "currentColor" : "none"} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={social.isStroke ? 2 : undefined} d={social.icon} />
                </svg>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image - Animated */}
        <motion.div 
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

            {/* Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-gray/20 shadow-2xl z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={profile}
                alt="Shrawan Sah"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60"></div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-dark-light/90 backdrop-blur-md border border-gray/20 text-light px-6 py-3 rounded-xl shadow-2xl z-20 flex items-center gap-3"
            >
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wide">Available for work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;