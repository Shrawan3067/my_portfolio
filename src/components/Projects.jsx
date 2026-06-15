import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import allcalculator from "../assets/allcalculator.png";
import smartnepal from "../assets/smartnepal.png";
import meditrack from "../assets/image.png";
import sajilobhoj from "../assets/bitexpress2.png";
import suwidha from "../assets/applogo.png";
import focusflow from "../assets/focusflow.png";
import financedashboard from "../assets/financedashboard.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "focusflow-ai",
      title: "FocusFlow AI",
      description:
        "An enterprise-grade productivity application for task tracking, focus sessions (Pomodoro/Deep Work), and AI-powered schedule optimization. Features a React Native mobile app with real-time sync and a scalable Node.js/Express backend.",
      image: focusflow,
      tags: [
        "React Native",
        "Expo",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Redis",
        "BullMQ",
        "TypeScript",
      ],
      category: "Mobile App",
      demoLink:
        "https://github.com/Shrawan3067/Focusyn---Productivity-Focus-Management.git",
    },
    {
      id: "suwidha",
      title: "GharSeDeal",
      description:
        "A cross-platform online marketplace mobile app built with React Native. It allows users to buy, sell, and explore products seamlessly on both Android and iOS.",
      image: suwidha,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Web App",
      demoLink: "https://ghar-se-deal.vercel.app/",
    },
    {
      id: "bitexpress",
      title: "BiteXpress",
      description:
        "A user-friendly platform that helps people easily discover, order, and enjoy delicious meals from local restaurants, streamlining the food ordering experience with convenience and speed.",
      image: sajilobhoj,
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      category: "Web App",
      demoLink: "https://bite-xpress-food-delivery-app.vercel.app/",
    },
    {
      id: "smartnepal",
      title: "SmartNepal",
      description:
        "A powerful web-based travel platform featuring AI-driven itineraries, real-time booking, and dynamic recommendations.",
      image: smartnepal,
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
      category: "Web App",
      demoLink: "https://smartnepal.netlify.app/",
    },
    {
      id: "calculators",
      title: "Calculators",
      description:
        "A dynamic web-based calculator platform offering a wide range of calculation tools across categories like finance, health, math, and fitness.",
      image: allcalculator,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Web App",
      demoLink: "https://allcalculator-coral.vercel.app/",
    },
    {
      id: "meditrack",
      title: "MediTrack",
      description:
        "A robust web-based medicine inventory system featuring CRUD operations, search/filter functionality, and data persistence.",
      image: meditrack,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Web App",
      demoLink: "https://medi-track-one.vercel.app/",
    },
    {
      id: "finance-dashboard",
      title: "Finance Dashboard",
      description:
        "A comprehensive finance dashboard system with role-based access control, transaction management, and data analytics featuring real-time charts and user management.",
      image: financedashboard,
      tags: [
        "React 18",
        "React Router",
        "Axios",
        "Tailwind CSS",
        "Recharts",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
      ],
      category: "Web App",
      demoLink: "https://finance-dashboard-ashen-iota.vercel.app/login",
    },
  ];

  const categories = ["all", "Web App", "Mobile App"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-dark transition-colors duration-300"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
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
              Featured Work
            </p>

            <div className="section-title mb-6">
              <h2>My Projects</h2>
            </div>

            <p className="text-gray mt-4 max-w-2xl mx-auto text-lg font-light">
              Explore my latest projects showcasing modern web development and
              design expertise
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="inline-flex gap-2 bg-dark-light/50 backdrop-blur-md rounded-2xl p-1 border border-gray/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "text-gray hover:text-light hover:bg-dark-light"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card group flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-dark/80 backdrop-blur-md text-light rounded-full text-xs font-semibold border border-gray/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-light mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray mb-6 line-clamp-3 leading-relaxed font-light flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-dark-light text-gray rounded-full text-xs font-medium border border-gray/20">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <Link
                      to={`/project/${project.id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(79,70,229,0.3)]"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Details
                    </Link>

                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-primary text-primary font-medium rounded-xl transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(79,70,229,0.3)]"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
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
