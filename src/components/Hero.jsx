import React, { useEffect, useState, useCallback } from 'react';
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

  // Removed mouse tracking for better performance

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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -top-40 -left-40"></div>

        <div className="absolute w-80 h-80 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl -bottom-40 -right-40"></div>

        <div className="absolute w-52 h-52 bg-primary/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 font-light tracking-wide">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                {text}
              </span>

              <span className="text-primary animate-blink">|</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl">
            A passionate{' '}
            <span className="text-primary font-semibold">
              Computer Science student
            </span>{' '}
            specializing in
            <span className="text-secondary font-semibold">
              {' '}
              Full Stack Development
            </span>{' '}
            with expertise in creating
            <span className="text-primary font-semibold">
              {' '}
              interactive
            </span>{' '}
            and
            <span className="text-secondary font-semibold">
              {' '}
              responsive applications
            </span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <a
              href="#projects"
              onClick={(e) => handleClick(e, '#projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                View My Work
              </span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="group relative px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                Contact Me
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Shrawan3067"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/shrawansah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
              </svg>
            </a>

            <a
              href="mailto:shrawansah3067@gmail.com"
              aria-label="Email"
              className="social-link w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="hidden lg:block absolute right-32 top-1/2 -translate-y-1/2 z-20">
        <div className="relative group">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-110"></div>

          {/* Image */}
          <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-white dark:bg-gray-800 transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src={profile}
              alt="Shrawan Sah"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Badge */}
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            Available for work
          </div>
        </div>
      </div>

      {/* Optimized Styles */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-gradient {
          animation: gradient 6s ease infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-gradient,
          .animate-blink,
          * {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;