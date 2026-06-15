import React from 'react';
import { motion } from 'framer-motion';
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
      border: 'hover:border-yellow-500/50',
      glow: 'from-yellow-500/20 to-orange-500/20',
      button: 'from-yellow-500 to-orange-500 hover:shadow-yellow-500/20',
    },
    {
      name: 'GeeksforGeeks',
      icon: gfg,
      link: 'https://www.geeksforgeeks.org/profile/shrawansah3067?tab=activity',
      description:
        'Practicing coding challenges and computer science concepts.',
      border: 'hover:border-green-500/50',
      glow: 'from-green-500/20 to-emerald-500/20',
      button: 'from-green-500 to-emerald-500 hover:shadow-green-500/20',
    },
    {
      name: 'GitHub',
      icon: github,
      link: 'https://github.com/Shrawan3067',
      description:
        'Building full-stack projects and open-source contributions.',
      border: 'hover:border-primary/50',
      glow: 'from-primary/20 to-secondary/20',
      button: 'from-primary to-secondary hover:shadow-primary/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="coding-profile"
      className="py-24 relative overflow-hidden bg-dark transition-colors duration-300"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-lg uppercase tracking-wider mb-4">
              Problem Solving & Development
            </p>

            <div className="section-title mb-6">
              <h2>Coding Profiles</h2>
            </div>

            <p className="text-gray text-lg mt-6 max-w-2xl mx-auto font-light">
              Explore my coding journey, problem-solving practice, and
              development work across different platforms.
            </p>
          </motion.div>
        </div>

        {/* Profile Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {profiles.map((profile, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className={`group relative glass-card p-8 transition-all duration-300 hover:-translate-y-2 border border-gray/20 ${profile.border}`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 bg-gradient-to-br ${profile.glow} rounded-3xl`}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center flex flex-col h-full">
                {/* Icon */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gray/5 rounded-3xl blur-xl"></div>

                  <div className="relative w-full h-full rounded-3xl bg-dark-light/50 backdrop-blur-md flex items-center justify-center border border-gray/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={profile.icon}
                      alt={profile.name}
                      className="w-20 h-20 object-contain drop-shadow-md"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-light group-hover:text-primary transition-colors">
                  {profile.name}
                </h3>

                {/* Description */}
                <p className="text-gray leading-relaxed mb-8 text-sm font-light flex-grow">
                  {profile.description}
                </p>

                {/* Button */}
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${profile.button} text-white font-semibold transition-all duration-300 hover:-translate-y-1`}
                >
                  <i className="fas fa-external-link-alt text-sm"></i>
                  Visit Profile
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray text-lg font-light">
            Consistently improving through practice, projects, and
            problem solving.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfile;