import React, { useState } from "react";
import { Link } from "react-router-dom";

import allcalculator from "../assets/allcalculator.png";
import smartnepal from "../assets/smartnepal.png";
import meditrack from "../assets/image.png";
import sajilobhoj from "../assets/bitexpress2.png";
import suwidha from "../assets/gharsedeal2.png";
import focusflow from "../assets/focusflow.png";

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
      difficulty: "Advanced",
      demoLink: "https://github.com/Shrawan3067/Focusyn---Productivity-Focus-Management.git",
    },
        {
      id: "suwidha",
      title: "GharSeDeal",
      description:
        "A cross-platform online marketplace mobile app built with React Native. It allows users to buy, sell, and explore products seamlessly on both Android and iOS.",
      image: suwidha,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Mobile App",
      difficulty: "Intermediate",
      demoLink: "https://ghar-se-deal.vercel.app/",
    },
    {
      id: "bitexpress",
      title: "BiteXpress",
      description:
        "A user-friendly platform that helps people easily discover, order, and enjoy delicious meals from local restaurants, streamlining the food ordering experience with convenience and speed.",
      image: sajilobhoj,
      tags: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      category: "Web App",
      difficulty: "Advanced",
      demoLink: "https://bite-xpress-food-delivery-app.vercel.app/",
    },
    {
      id: "smartnepal",
      title: "SmartNepal",
      description:
        "A powerful web-based travel platform featuring AI-driven itineraries, real-time booking, and dynamic recommendations.",
      image: smartnepal,
      tags: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      category: "Web App",
      difficulty: "Advanced",
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
      difficulty: "Intermediate",
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
      difficulty: "Intermediate",
      demoLink: "https://medi-track-one.vercel.app/",
    },
  ];

  const categories = ["all", "Web App", "Mobile App"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Advanced":
        return `
          text-red-700 
          dark:text-red-300
          bg-red-100 
          dark:bg-red-500/20
          border 
          border-red-200 
          dark:border-red-500/30
        `;

      case "Intermediate":
        return `
          text-amber-700 
          dark:text-yellow-300
          bg-amber-100 
          dark:bg-yellow-500/20
          border 
          border-amber-200 
          dark:border-yellow-500/30
        `;

      case "Beginner":
        return `
          text-emerald-700 
          dark:text-green-300
          bg-emerald-100 
          dark:bg-green-500/20
          border 
          border-emerald-200 
          dark:border-green-500/30
        `;

      default:
        return `
          text-gray-700 
          dark:text-gray-300
          bg-gray-100 
          dark:bg-gray-500/20
          border 
          border-gray-200 
          dark:border-gray-500/30
        `;
    }
  };

  return (
    <section
      id="projects"
      className="
        py-24
        relative
        overflow-hidden
        bg-white
        dark:bg-[#0B1120]
        transition-colors
        duration-300
      "
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-300 font-semibold text-lg uppercase tracking-wider mb-4">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto transition-colors duration-300">
            Explore my latest projects showcasing modern web development and
            design expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 backdrop-blur-sm rounded-xl p-1 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="
                group
                relative
                bg-white
                dark:bg-[#111827]
                rounded-2xl
                overflow-hidden
                border
                border-gray-100
                dark:border-gray-800
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-300/40
                dark:hover:border-blue-500/30
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
                dark:hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getDifficultyColor(
                      project.difficulty
                    )}`}
                  >
                    {project.difficulty}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 backdrop-blur-sm text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold border border-blue-100 dark:border-blue-500/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-3 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3
                        py-1
                        bg-blue-50
                        dark:bg-blue-500/10
                        text-blue-700
                        dark:text-blue-300
                        rounded-full
                        text-xs
                        font-semibold
                        transition-all
                        duration-300
                        group-hover:bg-blue-100
                        dark:group-hover:bg-blue-500/20
                      "
                    >
                      {tag}
                    </span>
                  ))}

                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-semibold">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {/* Details */}
                  <Link
                    to={`/project/${project.id}`}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-4
                      py-3
                      bg-gradient-to-r
                      from-blue-600
                      to-purple-600
                      text-white
                      font-semibold
                      rounded-xl
                      transition-all
                      duration-300
                      hover:scale-105
                      shadow-lg
                      hover:shadow-blue-500/30
                    "
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    Details
                  </Link>

                  {/* Demo */}
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-4
                      py-3
                      border-2
                      border-blue-500
                      text-blue-600
                      dark:text-blue-300
                      font-semibold
                      rounded-xl
                      transition-all
                      duration-300
                      hover:bg-blue-600
                      hover:text-white
                      hover:border-blue-600
                      hover:scale-105
                    "
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>

                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 mb-5 transition-colors duration-300">
            Want to explore more projects?
          </p>

          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              gap-2
              px-8
              py-3
              border-2
              border-blue-500
              text-blue-600
              dark:text-blue-300
              font-semibold
              rounded-xl
              transition-all
              duration-300
              hover:bg-blue-600
              hover:text-white
              hover:border-blue-600
              hover:scale-105
            "
          >
            <span>View All Projects</span>

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;