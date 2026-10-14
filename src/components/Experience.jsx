import React from "react";
import { motion } from "framer-motion";
import gharSeDealImg from "../assets/GharSeDeal.png";

const Experience = () => {
  const experiences = [
    {
      id: "gharsedeal",
      role: "Founder & Software Engineer",
      company: "GharSeDeal",
      location: "Jalandhar, Punjab",
      period: "Sep' 2025 – Present",
      isCurrent: true,
      badge: "Flagship Venture",
      statHighlight: {
        number: "10×",
        label: "Marketplace Listing API Speedup"
      },
      bullets: [
        "Built and enhanced a marketplace application using React.js, TypeScript, and Tailwind CSS, developing responsive interfaces and reusable UI components.",
        "Developed backend APIs and application workflows using Node.js and Express.js, including authentication, middleware, database schemas, and modular API architecture.",
        "Integrated REST APIs to connect frontend workflows with backend services, handling marketplace data and application state.",
        "Improved marketplace listing API response latency by approximately 10× through server-side pagination and MongoDB query optimization."
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT Auth",
        "Pagination & Indexing"
      ],
      image: gharSeDealImg,
      liveLink: "https://ghar-se-deal.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/GharSeDeal.git"
    },
    {
      id: "technonto",
      role: "Software Engineering Intern (Summer Training)",
      company: "Technonto Academy",
      location: "Jalandhar, Punjab",
      period: "Jul' 2023 – Aug' 2023",
      isCurrent: false,
      badge: "Engineering Internship",
      statHighlight: {
        number: "GUI & DSA",
        label: "Desktop Event Systems"
      },
      bullets: [
        "Gained hands-on experience in Java Swing for GUI-based desktop application development.",
        "Developed interactive applications utilizing Swing components like JFrame, JPanel, JButton, JTextField, and JTable.",
        "Worked extensively on event-driven programming, implementing ActionListener, KeyListener, and MouseListener for responsive user interactions.",
        "Strengthened Object-Oriented Programming (OOP) and modular code structuring principles."
      ],
      technologies: [
        "Java",
        "Java Swing",
        "OOP Principles",
        "Event-Driven Architecture",
        "Desktop GUI"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      certificateLink: "https://drive.google.com/file/d/1nhRUigAZcna5ZtHXGePsBvYkv1O9zELu/view"
    }
  ];

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-[#090d16] transition-colors duration-300"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
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
              <i className="fas fa-briefcase text-[10px]"></i>
              Career Experience
            </span>
            <div className="section-title">
              <h2>Work & Leadership Journey</h2>
            </div>
            </div>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal">
              Direct engineering impact, full-stack product building, and performance optimization from my CV.
            </p>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 md:p-10 group relative overflow-hidden"
            >
              {/* Subtle accent border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"></div>

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Content Details (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                        {exp.badge}
                      </span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          Present
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <i className="far fa-calendar-alt text-cyan-400"></i>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Title & Company */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1.5 text-sm sm:text-base text-slate-300">
                      <span className="font-semibold text-cyan-400">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <i className="fas fa-map-marker-alt text-xs text-slate-500"></i>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Key metric callout */}
                  {exp.statHighlight && (
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-indigo-500/20 flex items-center gap-4">
                      <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                        {exp.statHighlight.number}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-300">
                        {exp.statHighlight.label}
                      </div>
                    </div>
                  )}

                  {/* Bullet Points from CV */}
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-300 font-normal">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                          <i className="fas fa-check text-[10px]"></i>
                        </span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {exp.liveLink && (
                      <a
                        href={exp.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs py-2.5 px-5"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                        <span>Live Marketplace</span>
                      </a>
                    )}
                    {exp.githubLink && (
                      <a
                        href={exp.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-xs py-2.5 px-5"
                      >
                        <i className="fab fa-github text-xs"></i>
                        <span>View Repository</span>
                      </a>
                    )}
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-xs py-2.5 px-5"
                      >
                        <i className="fas fa-certificate text-xs text-amber-400"></i>
                        <span>View Training Certificate</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Visual Preview Card (5 cols) */}
                <div className="lg:col-span-5 h-full flex flex-col justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 group-hover:border-indigo-500/40 transition-colors">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-64 sm:h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white">{exp.company}</div>
                          <div className="text-[11px] text-slate-400">{exp.role}</div>
                        </div>
                        <span className="text-[11px] font-mono font-semibold text-cyan-400">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;