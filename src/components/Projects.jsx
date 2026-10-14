import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import caliwoImg from "../assets/caliwo.jpg";
import allcalculatorImg from "../assets/allcalculator.png";
import gharSeDealImg from "../assets/GharSeDeal.png";
import focusflowImg from "../assets/focusflow.png";
import bitexpressImg from "../assets/bitexpress2.png";
import financedashboardImg from "../assets/financedashboard.png";
import smartnepalImg from "../assets/smartnepal.png";
import meditrackImg from "../assets/image.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "caliwo",
      title: "Caliwo — AI Powered Nutrition Tracking App",
      badge: "CV Flagship • Live",
      period: "Jul' 2025",
      isLive: true,
      isCvFeatured: true,
      description:
        "An AI-powered nutrition tracking platform that helps users log meals, estimate calories and macronutrients, and track daily goals. Features AI meal scanning, mobile UI dashboards, and automated nutritional analysis.",
      image: caliwoImg,
      tags: [
        "React",
        "React Native",
        "Expo",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL"
      ],
      category: "Mobile & AI",
      demoLink: "https://caliwo-landing-page.vercel.app/",
      githubLink: "https://caliwo-landing-page.vercel.app/",
    },
    {
      id: "allcalculator",
      title: "AllCalculator.net — Multi-Category Platform",
      badge: "CV Flagship • 3K+ Users",
      period: "Nov' 2025 – Jan' 2026",
      isLive: true,
      isCvFeatured: true,
      description:
        "Comprehensive calculator platform featuring 750+ specialized calculators and informative articles across finance, health, and math. Scaled to over 3,000+ monthly active visitors with instantaneous real-time computation.",
      image: allcalculatorImg,
      tags: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "SEO Optimization"
      ],
      category: "Full Stack Web",
      demoLink: "https://www.allcalculator.net/",
      githubLink: "https://www.allcalculator.net/",
    },
    {
      id: "suwidha",
      title: "GharSeDeal — Online Marketplace",
      badge: "CV Experience • 10× Latency",
      period: "Sep' 2025 – Present",
      isLive: true,
      isCvFeatured: true,
      description:
        "Full-stack marketplace connecting buyers and sellers with interactive product workflows. Achieved a 10× API response speedup through server-side pagination, indexing, and MongoDB query optimization.",
      image: gharSeDealImg,
      tags: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs"
      ],
      category: "Full Stack Web",
      demoLink: "https://ghar-se-deal.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/GharSeDeal.git",
    },
    {
      id: "focusflow-ai",
      title: "FocusFlow AI — Productivity & Deep Work",
      badge: "Productivity Suite",
      period: "2024",
      isLive: false,
      isCvFeatured: false,
      description:
        "Enterprise-grade productivity system for task tracking, deep work sessions (Pomodoro timers), and AI schedule recommendations with real-time sync across devices.",
      image: focusflowImg,
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Redis",
        "BullMQ"
      ],
      category: "Mobile & AI",
      demoLink: "https://github.com/Shrawan3067/Focusyn---Productivity-Focus-Management.git",
      githubLink: "https://github.com/Shrawan3067/Focusyn---Productivity-Focus-Management.git",
    },
    {
      id: "bitexpress",
      title: "BiteXpress — Food Delivery Platform",
      badge: "E-Commerce",
      period: "2024",
      isLive: true,
      isCvFeatured: false,
      description:
        "Modern food ordering and restaurant discovery platform with intuitive browsing menus, real-time cart handling, and responsive user interfaces.",
      image: bitexpressImg,
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
      category: "Full Stack Web",
      demoLink: "https://bite-xpress-food-delivery-app.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/BiteXpress---Food-Delivery-App.git",
    },
    {
      id: "finance-dashboard",
      title: "Finance Dashboard — RBAC & Analytics",
      badge: "Enterprise Dashboard",
      period: "2024",
      isLive: true,
      isCvFeatured: false,
      description:
        "Full-stack financial data management platform with 3-tier Role-Based Access Control (Admin, Analyst, Viewer), interactive Recharts visualizations, and audit records.",
      image: financedashboardImg,
      tags: [
        "React 18",
        "Tailwind CSS",
        "Recharts",
        "Node.js",
        "Express",
        "MongoDB"
      ],
      category: "Full Stack Web",
      demoLink: "https://finance-dashboard-ashen-iota.vercel.app/login",
      githubLink: "https://github.com/Shrawan3067",
    },
    {
      id: "smartnepal",
      title: "SmartNepal — AI Travel Itineraries",
      badge: "Travel Tech",
      period: "2024",
      isLive: true,
      isCvFeatured: false,
      description:
        "Intelligent web-based travel ecosystem featuring personalized itineraries, destination recommendations, and interactive regional guides.",
      image: smartnepalImg,
      tags: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
      category: "Full Stack Web",
      demoLink: "https://smartnepal.netlify.app/",
      githubLink: "https://github.com/Shrawan3067/smartnepal",
    },
    {
      id: "meditrack",
      title: "MediTrack — Medicine Inventory Platform",
      badge: "Healthcare Management",
      period: "2023",
      isLive: true,
      isCvFeatured: false,
      description:
        "Healthcare inventory tracking system with stock monitoring, expiration date warnings, automated search/filtering, and persistent database storage.",
      image: meditrackImg,
      tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MySQL"],
      category: "Full Stack Web",
      demoLink: "https://medi-track-one.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/meditrack",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "cv", label: "Featured in CV" },
    { id: "Full Stack Web", label: "Full Stack Web" },
    { id: "Mobile & AI", label: "Mobile & AI" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "cv") return project.isCvFeatured;
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-[#090d16] transition-colors duration-300"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px]"></div>
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
              <i className="fas fa-layer-group text-[10px]"></i>
              Portfolio Portfolio
            </span>
            <div className="section-title">
              <h2>Featured Projects</h2>
            </div>
            </div>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal">
              High-impact web and mobile applications from my CV, built with React, TypeScript, Node.js, and databases.
            </p>
          </motion.div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          <div className="inline-flex flex-wrap justify-center gap-1.5 bg-slate-900/80 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-800 shadow-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card group flex flex-col h-full overflow-hidden hover:-translate-y-1.5"
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-sm">
                      {project.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-950/80 backdrop-blur-md text-slate-300 border border-slate-800">
                      {project.category}
                    </span>
                  </div>

                  {/* Period in corner */}
                  {project.period && (
                    <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-400 bg-slate-950/70 backdrop-blur-sm px-2 py-0.5 rounded">
                      {project.period}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-800 text-slate-400 border border-slate-700/60">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 mt-auto">
                    <Link
                      to={`/project/${project.id}`}
                      className="flex-1 py-2.5 px-3 rounded-xl text-center text-xs font-semibold bg-slate-800/80 text-white hover:bg-slate-700/80 border border-slate-700/60 hover:border-indigo-500/50 transition-all flex items-center justify-center gap-1.5"
                    >
                      <i className="fas fa-file-alt text-xs text-indigo-400"></i>
                      <span>Case Study</span>
                    </Link>

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 rounded-xl text-center text-xs font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-95 shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-1.5"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
