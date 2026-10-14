import React from 'react';
import { motion } from 'framer-motion';
import leetcodeImg from '../assets/leetcode.png';
import gfgImg from '../assets/gfg.png';
import githubImg from '../assets/github-logo.png';
import hackerrankImg from '../assets/hackerrank.svg';

const CodingProfile = () => {
  const achievements = [
    {
      metric: "600+",
      label: "DSA Problems Solved",
      platform: "LeetCode",
      handle: "@shrawansah",
      icon: "fas fa-code",
      color: "text-amber-400"
    },
    {
      metric: "4 Badges",
      label: "Java, C++, and SQL",
      platform: "HackerRank",
      handle: "@shrawansah3067",
      icon: "fas fa-medal",
      color: "text-emerald-400"
    },
    {
      metric: "10×",
      label: "API Latency Optimization",
      platform: "GharSeDeal",
      handle: "Founder & Software Engineer",
      icon: "fas fa-bolt",
      color: "text-cyan-400"
    },
    {
      metric: "3,000+",
      label: "Monthly Active Users",
      platform: "AllCalculator.net",
      handle: "750+ Live Engines",
      icon: "fas fa-users",
      color: "text-indigo-400"
    }
  ];

  const profiles = [
    {
      name: 'LeetCode',
      icon: leetcodeImg,
      link: 'https://leetcode.com/u/Shrawansah/',
      handle: '@shrawansah',
      badge: '600+ Problems Solved',
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      description:
        'Solved 600+ Data Structures & Algorithms problems across Trees, Graphs, DP, Arrays, and Strings with algorithmic efficiency.',
      border: 'hover:border-amber-500/50',
      button: 'from-amber-500 to-orange-500',
    },
    {
      name: 'HackerRank',
      icon: hackerrankImg,
      link: 'https://www.hackerrank.com/profile/shrawansah3067',
      handle: '@shrawansah3067',
      badge: '4 Verified Badges',
      badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      description:
        'Earned 4 official skill badges in Java, C++, and SQL demonstrating strong problem solving and query mastery.',
      border: 'hover:border-emerald-500/50',
      button: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'GeeksforGeeks',
      icon: gfgImg,
      link: 'https://www.geeksforgeeks.org/profile/shrawansah3067?tab=activity',
      handle: '@shrawansah3067',
      badge: 'Core CS Practice',
      badgeColor: 'bg-green-500/15 text-green-300 border-green-500/30',
      description:
        'Active problem solving, competitive coding contests, and core computer science concepts practice.',
      border: 'hover:border-green-500/50',
      button: 'from-green-500 to-emerald-600',
    },
    {
      name: 'GitHub',
      icon: githubImg,
      link: 'https://github.com/Shrawan3067',
      handle: '@Shrawan3067',
      badge: 'Full Stack Repositories',
      badgeColor: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
      description:
        'Open source projects, marketplace architecture, responsive React components, and modular Node.js REST API servers.',
      border: 'hover:border-indigo-500/50',
      button: 'from-indigo-500 to-cyan-500',
    },
  ];

  return (
    <section
      id="coding-profile"
      className="py-24 relative overflow-hidden bg-[#090d16] transition-colors duration-300"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]"></div>
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
              <i className="fas fa-trophy text-[10px]"></i>
              Competitive & Open Source
            </span>
            <div className="section-title">
              <h2>Achievements & Coding Profiles</h2>
            </div>
            </div>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal">
              Validated problem solving, competitive coding achievements, and code repositories directly from my CV.
            </p>
          </motion.div>
        </div>

        {/* Top Achievements Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-5 text-center relative overflow-hidden group hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-2">
                <i className={`${ach.icon} text-sm ${ach.color}`}></i>
              </div>
              <div className={`text-2xl sm:text-3xl font-black ${ach.color} tracking-tight`}>
                {ach.metric}
              </div>
              <div className="text-xs font-semibold text-white mt-1">
                {ach.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                {ach.platform}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profile Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-6 flex flex-col justify-between group hover:-translate-y-2 border border-slate-800 transition-all ${profile.border}`}
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950/80 border border-slate-800 p-2.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <img
                      src={profile.icon}
                      alt={profile.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-1 rounded-full border ${profile.badgeColor}`}>
                    {profile.badge}
                  </span>
                </div>

                {/* Name & Handle */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {profile.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">{profile.handle}</p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                  {profile.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${profile.button} flex items-center justify-center gap-2 shadow-md transition-all hover:opacity-95`}
                >
                  <span>View Verified Profile</span>
                  <i className="fas fa-external-link-alt text-[10px]"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodingProfile;