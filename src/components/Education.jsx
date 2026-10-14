import React from 'react';
import { motion } from 'framer-motion';
import udemyCert from '../assets/Udemy_FullStack.jpg';
import dsaCert from '../assets/DSA_Java.jpg';
import gccCert from '../assets/Google_Cloud_Computing.jpg';
import mernCert from '../assets/MERN_Stack.jpg';

const Education = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: "Sep' 2025",
      isCvFeatured: true,
      image: udemyCert,
      link: 'https://drive.google.com/file/d/1v65oskQOjRv1NP1JnH50V6xQBZcWtS3D/view',
      description: 'Comprehensive program covering React, Node.js, Express, databases, REST architecture, and production web deployment.',
      badge: 'CV Credential'
    },
    {
      title: 'DSA with Java',
      issuer: 'Apna College',
      date: "Sep' 2024",
      isCvFeatured: true,
      image: dsaCert,
      link: 'https://drive.google.com/file/d/1Pgf97y7BjRQeLpr-hoCGyyE3lEsq1sqS/view',
      description: 'Mastery in Data Structures & Algorithms, recursion, dynamic programming, trees, graphs, and algorithmic time complexity.',
      badge: 'CV Credential'
    },
    {
      title: 'Google Cloud Computing Foundations',
      issuer: 'NPTEL',
      date: 'Professional Certification',
      isCvFeatured: false,
      image: gccCert,
      link: 'https://drive.google.com/file/d/1v65oskQOjRv1NP1JnH50V6xQBZcWtS3D/view',
      description: 'Cloud architecture fundamentals, virtual machines, cloud storage, containerization, and distributed systems.',
      badge: 'Cloud Architecture'
    },
    {
      title: 'MERN Stack Development',
      issuer: 'Cipher Schools',
      date: 'Professional Certification',
      isCvFeatured: false,
      image: mernCert,
      link: 'https://drive.google.com/file/d/1RKfGaa_-xSgYERo-xdx45GJAQVX0JvE8/view',
      description: 'Hands-on full stack application development with MongoDB, Express.js, React.js, and Node.js ecosystems.',
      badge: 'Web Development'
    },
  ];

  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden bg-[#090d16] transition-colors duration-300"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
            <span className="section-badge">
              <i className="fas fa-graduation-cap text-[10px]"></i>
              Academic & Certifications
            </span>
            <div className="section-title">
              <h2>Education & Credentials</h2>
            </div>
            </div>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal">
              My engineering degree and verified certifications backing my technical foundation.
            </p>
          </motion.div>
        </div>

        {/* 1. Academic Degree Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-10 max-w-5xl mx-auto mb-16 relative overflow-hidden group"
        >
          {/* Subtle accent border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600"></div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Degree Details (8 cols) */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                  Undergraduate Degree
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  CGPA: 7.30
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  B.Tech – Computer Science and Engineering
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-indigo-400 mt-1 flex items-center gap-2">
                  <i className="fas fa-university text-sm text-cyan-400"></i>
                  Lovely Professional University
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <i className="far fa-calendar-alt text-cyan-400"></i>
                  Jun' 2022 – Jul' 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-map-marker-alt text-cyan-400"></i>
                  Phagwara, Punjab, India
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                Comprehensive four-year curriculum with deep theoretical and practical focus on software architecture, systems programming, and database design.
              </p>

              {/* Coursework Chips from CV Core CS */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Core Coursework & Foundations:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming (OOP)",
                    "Database Management Systems (DBMS)",
                    "Operating Systems",
                    "Computer Networks",
                    "Software Engineering"
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right CGPA & University Badge (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl mb-3 shadow-inner">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                7.30
              </div>
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mt-1 font-semibold">
                Cumulative GPA
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 w-full text-[11px] text-slate-400">
                Class of 2026 • Full-Time
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Certifications Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Professional Certifications
          </h3>
          <p className="text-slate-400 text-sm mt-2 font-normal">
            Accredited credentials strengthening full-stack development, cloud computing, and DSA.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-5 flex flex-col justify-between group hover:-translate-y-2 border border-slate-800 transition-all overflow-hidden"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 border border-slate-800 bg-slate-950">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                    {cert.badge}
                  </span>
                </div>

                {/* Details */}
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors leading-snug">
                  {cert.title}
                </h4>

                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-semibold text-indigo-400">{cert.issuer}</span>
                  <span className="font-mono">{cert.date}</span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed font-normal mb-5">
                  {cert.description}
                </p>
              </div>

              {/* View Certificate Button */}
              <div className="pt-3 border-t border-slate-800/80 mt-auto">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-slate-800/80 text-white hover:bg-indigo-600/80 border border-slate-700/60 hover:border-indigo-500/50 transition-all flex items-center justify-center gap-1.5"
                >
                  <i className="fas fa-external-link-alt text-[10px] text-cyan-400"></i>
                  <span>Verify Credential</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;