import React from 'react';
import gcc from '../assets/Google_Cloud_Computing.jpg';
import DSA from '../assets/DSA_Java.jpg';
import MERN from '../assets/MERN_Stack.jpg';

const Education = () => {
  const certifications = [
    {
      title: 'Google Cloud Computing - NPTEL',
      image: gcc,
      link: 'https://drive.google.com/file/d/1v65oskQOjRv1NP1JnH50V6xQBZcWtS3D/view',
      border: 'hover:border-blue-500/40',
      glow: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'DSA with Java - Apna College',
      image: DSA,
      link: 'https://drive.google.com/file/d/1Pgf97y7BjRQeLpr-hoCGyyE3lEsq1sqS/view',
      border: 'hover:border-orange-500/40',
      glow: 'from-orange-500/20 to-yellow-500/20',
    },
    {
      title: 'MERN Stack - Cipher Schools',
      image: MERN,
      link: 'https://drive.google.com/file/d/1RKfGaa_-xSgYERo-xdx45GJAQVX0JvE8/view',
      border: 'hover:border-green-500/40',
      glow: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  return (
    <section
      id="education"
      className="
        py-24
        relative
        overflow-hidden
        bg-gray-50
        dark:bg-[#0B1120]
        transition-colors
        duration-300
      "
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary dark:text-blue-400 font-semibold uppercase tracking-[0.25em] mb-3">
            Learning & Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Certifications
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>

          <p className="text-gray-600 dark:text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Certifications and training programs that strengthened my development,
            cloud, and problem-solving skills.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              className={`
                group
                relative
                bg-white/90
                dark:bg-[#111827]/80
                backdrop-blur-sm
                border
                border-gray-200
                dark:border-gray-800
                ${cert.border}
                rounded-3xl
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                dark:hover:shadow-black/30
              `}
            >
              {/* Glow Effect */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  bg-gradient-to-br
                  ${cert.glow}
                `}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6 border border-gray-200 dark:border-gray-700">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="
                      w-full
                      h-52
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  Successfully completed professional certification focused on
                  practical development skills, industry technologies, and
                  real-world applications.
                </p>

                {/* Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-6
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-primary
                    to-secondary
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-xl
                    hover:shadow-primary/20
                  "
                >
                  <i className="fas fa-external-link-alt text-sm"></i>
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Continuously learning modern technologies and industry best practices.
          </p>
        </div>
      </div>

      {/* Optimized Styles */}
      <style jsx>{`
        * {
          -webkit-tap-highlight-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;