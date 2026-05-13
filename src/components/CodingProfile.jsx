import React from 'react';
import leetcode from '../assets/leetcode.png';
import gfg from '../assets/gfg.png';
import github from '../assets/github-logo.png';

const CodingProfile = () => {
  const profiles = [
    {
      name: 'LeetCode',
      icon: leetcode,
      link: 'https://leetcode.com/u/Shrawansah/',
      description:
        'Solving Data Structures & Algorithms problems regularly.',
      border:
        'hover:border-yellow-500/40 dark:hover:border-yellow-400/40',
      glow: 'from-yellow-500/20 to-orange-500/20',
      button:
        'from-yellow-500 to-orange-500 hover:shadow-yellow-500/20',
    },
    {
      name: 'GeeksforGeeks',
      icon: gfg,
      link: 'https://www.geeksforgeeks.org/profile/shrawansah3067?tab=activity',
      description:
        'Practicing coding challenges and computer science concepts.',
      border:
        'hover:border-green-500/40 dark:hover:border-green-400/40',
      glow: 'from-green-500/20 to-emerald-500/20',
      button:
        'from-green-500 to-emerald-500 hover:shadow-green-500/20',
    },
    {
      name: 'GitHub',
      icon: github,
      link: 'https://github.com/Shrawan3067',
      description:
        'Building full-stack projects and open-source contributions.',
      border:
        'hover:border-primary/40 dark:hover:border-secondary/40',
      glow: 'from-primary/20 to-secondary/20',
      button:
        'from-primary to-secondary hover:shadow-primary/20',
    },
  ];

  return (
    <section
      id="coding-profile"
      className="py-24 relative overflow-hidden bg-white dark:bg-[#0f172a] transition-colors duration-300"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary dark:text-secondary font-semibold uppercase tracking-widest mb-3">
            Problem Solving & Development
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>

          <p className="text-gray-600 dark:text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Explore my coding journey, problem-solving practice, and
            development work across different platforms.
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`
                group relative
                bg-white/80 dark:bg-dark-light/40
                backdrop-blur-md
                border border-gray-200 dark:border-gray-700
                ${profile.border}
                rounded-3xl
                p-8
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                shadow-lg dark:shadow-black/20
              `}
            >
              {/* Glow Effect */}
              <div
                className={`
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-br ${profile.glow}
                  rounded-3xl
                `}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-3xl blur-xl"></div>

                  <div
                    className="
                      relative w-full h-full rounded-3xl
                      bg-white dark:bg-gray-800
                      flex items-center justify-center
                      border border-gray-200 dark:border-gray-700
                      shadow-lg
                      group-hover:scale-105
                      transition-transform duration-300
                    "
                  >
                    <img
                      src={profile.icon}
                      alt={profile.name}
                      className="w-20 h-20 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {profile.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-sm">
                  {profile.description}
                </p>

                {/* Button */}
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center justify-center gap-3
                    px-6 py-3 rounded-xl
                    bg-gradient-to-r ${profile.button}
                    text-white font-semibold
                    transition-all duration-300
                    hover:shadow-xl
                    hover:-translate-y-1
                  `}
                >
                  <i className="fas fa-external-link-alt text-sm"></i>
                  Visit Profile
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-500 text-lg">
            Consistently improving through practice, projects, and
            problem solving.
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

export default CodingProfile;