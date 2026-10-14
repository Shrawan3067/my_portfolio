import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/github.jpg';
import resume from '../assets/Shrawan_Full_Stack.pdf';

const Hero = () => {
  const roles = [
    'Full Stack Engineer',
    'React.js · TypeScript · Node.js',
    '10× Latency Optimization Specialist',
    'Founder @ GharSeDeal'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayText !== fullText) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText !== '') {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#090d16] bg-grid-pattern transition-colors duration-300"
    >
      {/* Ambient background glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/12 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-1/4 right-1/12 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[130px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for Full-time Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/80">
                <i className="fas fa-map-marker-alt text-cyan-400 text-[11px]"></i>
                Phagwara, Punjab
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                Shrawan Kumar Sah
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200">
                <span>{displayText}</span>
                <span className="text-cyan-400 font-light animate-blink">|</span>
              </p>
            </div>

            {/* Summary Snippet matching CV */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Full Stack Engineer specializing in <span className="text-white font-semibold">React.js</span>, <span className="text-white font-semibold">TypeScript</span>, and <span className="text-white font-semibold">Node.js</span>. Experienced in building end-to-end web architectures, high-throughput REST APIs, and database optimization with a proven <span className="text-cyan-400 font-semibold underline decoration-cyan-400/40 underline-offset-4">10× API response latency improvement</span>.
            </p>

            {/* Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0 mb-8">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">10×</div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">API Latency Speedup</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">600+</div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">DSA Solved (LeetCode)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">750+</div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">Calculators Built</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">3,000+</div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">Monthly Visitors</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => handleClick(e, '#projects')}
                className="btn-primary"
              >
                <span>Explore Featured Work</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <i className="fas fa-download text-xs text-indigo-400"></i>
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 text-sm font-semibold px-4 py-3 transition-colors"
              >
                <span>Get in Touch</span>
                <i className="fas fa-chevron-right text-xs"></i>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              {[
                {
                  href: 'https://github.com/Shrawan3067',
                  label: 'GitHub',
                  icon: 'fab fa-github',
                  hover: 'hover:text-white hover:border-slate-500'
                },
                {
                  href: 'https://www.linkedin.com/in/shrawansah',
                  label: 'LinkedIn',
                  icon: 'fab fa-linkedin-in',
                  hover: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40'
                },
                {
                  href: 'https://leetcode.com/u/Shrawansah/',
                  label: 'LeetCode',
                  icon: 'fas fa-code',
                  hover: 'hover:text-amber-400 hover:border-amber-400/40'
                },
                {
                  href: 'mailto:shrawansah3067@gmail.com',
                  label: 'Email',
                  icon: 'fas fa-envelope',
                  hover: 'hover:text-cyan-400 hover:border-cyan-400/40'
                },
                {
                  href: 'tel:+918360705978',
                  label: 'Phone',
                  icon: 'fas fa-phone-alt',
                  hover: 'hover:text-emerald-400 hover:border-emerald-400/40'
                }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.label !== 'Phone' && item.label !== 'Email' ? '_blank' : undefined}
                  rel={item.label !== 'Phone' && item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  className={`w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.hover}`}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Profile & Visual Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-slow"></div>

              {/* Main Card */}
              <div className="relative bg-slate-900/90 border border-slate-800/90 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-2xl">
                
                {/* Photo container */}
                <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                  <img
                    src={profile}
                    alt="Shrawan Kumar Sah"
                    className="w-full h-full object-cover object-center filter saturate-105 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Badge in photo */}
                  <div className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-md border border-slate-700/60 px-3 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-xs font-semibold text-slate-200">Full Stack Engineer</span>
                  </div>

                  {/* Bottom details in photo */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl font-bold text-white tracking-tight">Shrawan Kumar Sah</h2>
                    <p className="text-xs text-cyan-300 font-mono mt-0.5">React.js · TypeScript · Node.js</p>
                  </div>
                </div>

                {/* Sub-card: Tech stack ticker */}
                <div className="mt-4 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <i className="fas fa-layer-group text-xs"></i>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Marketplace & Backend</div>
                      <div className="text-[10px] text-slate-400">Node.js · Express · MongoDB · SQL</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 font-bold">
                    10× Latency
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;