import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/Shrawan_Full_Stack.pdf";
import profile from "../assets/github.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Professional Overview", icon: "fas fa-user-tie" },
    { id: "strengths", label: "Core Competencies", icon: "fas fa-bolt" },
    { id: "facts", label: "Quick Facts", icon: "fas fa-id-card" },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-[#090d16] transition-colors duration-300"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]"></div>
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
              <i className="fas fa-terminal text-[10px]"></i>
              About Me
            </span>
            <div className="section-title">
              <h2>Engineering Profile</h2>
            </div>
            </div>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal">
              A glimpse into my background, full-stack software experience, and engineering principles.
            </p>
          </motion.div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-900/80 backdrop-blur-xl rounded-2xl p-1.5 border border-slate-800 shadow-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column (5 cols): Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Glass Card */}
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 border border-slate-800 bg-slate-950">
                <img
                  src={profile}
                  alt="Shrawan Kumar Sah"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">Shrawan Kumar Sah</h3>
                  <p className="text-xs text-cyan-400 font-mono">Full Stack Engineer</p>
                </div>
              </div>

              {/* Bio Highlights */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Current Role</span>
                  <span className="text-white font-medium">Founder & Software Engineer</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Company</span>
                  <span className="text-indigo-400 font-semibold">GharSeDeal</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Education</span>
                  <span className="text-slate-200">B.Tech CSE (CGPA: 7.30)</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2">
                  <span className="text-slate-400">University</span>
                  <span className="text-slate-200">Lovely Professional University</span>
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <i className="fas fa-file-download text-sm"></i>
                  <span>Download Curriculum Vitae</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Dynamic Tab Content */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Summary Box */}
                  <div className="glass-card p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <i className="fas fa-code text-sm"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Executive Summary</h4>
                        <p className="text-xs text-slate-400">From verified Curriculum Vitae</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal mb-4">
                      Full Stack Engineer with hands-on experience building and improving end-to-end web applications using <strong className="text-white">React.js</strong>, <strong className="text-white">TypeScript</strong>, <strong className="text-white">Node.js</strong>, <strong className="text-white">Express.js</strong>, and <strong className="text-white">SQL/NoSQL databases</strong>.
                    </p>

                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                      Experienced in REST API development, authentication, database design, and performance optimization, including a <span className="text-cyan-400 font-semibold">10× improvement</span> in marketplace listing API response latency. Strong foundation in data structures, algorithms, and software engineering principles.
                    </p>
                  </div>

                  {/* Core Value Props */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="glass-panel p-5">
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                        <i className="fas fa-bolt text-sm"></i>
                      </div>
                      <h5 className="text-white font-semibold text-sm mb-1">Performance & Scale</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Optimized database indexing, query pipelines, and server-side pagination for high throughput.
                      </p>
                    </div>

                    <div className="glass-panel p-5">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                        <i className="fas fa-cubes text-sm"></i>
                      </div>
                      <h5 className="text-white font-semibold text-sm mb-1">Modern UI & React</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Crafting reusable component architectures with TypeScript, Tailwind CSS, and state management.
                      </p>
                    </div>

                    <div className="glass-panel p-5">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                        <i className="fas fa-server text-sm"></i>
                      </div>
                      <h5 className="text-white font-semibold text-sm mb-1">Robust Backend APIs</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Modular REST architectures, JWT authentication, request validation, and clean middleware layers.
                      </p>
                    </div>

                    <div className="glass-panel p-5">
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                        <i className="fas fa-brain text-sm"></i>
                      </div>
                      <h5 className="text-white font-semibold text-sm mb-1">Algorithmic Foundation</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        600+ LeetCode problems solved with deep knowledge of DSA, OOP, DBMS, OS, and computer networks.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: STRENGTHS */}
              {activeTab === "strengths" && (
                <motion.div
                  key="strengths"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  {[
                    {
                      title: "10× Marketplace Latency Optimization",
                      detail: "Engineered server-side pagination and optimized MongoDB aggregation pipelines at GharSeDeal, dramatically accelerating listing responses under heavy traffic.",
                      icon: "fas fa-tachometer-alt",
                      color: "text-cyan-400",
                      badge: "Impact Metric"
                    },
                    {
                      title: "750+ Calculators & 3K+ Monthly Users",
                      detail: "Built and scaled AllCalculator.net with accessible, responsive interfaces and real-time computation for 3,000+ monthly active visitors.",
                      icon: "fas fa-calculator",
                      color: "text-amber-400",
                      badge: "Product Scale"
                    },
                    {
                      title: "AI-Powered Nutrition & Meal Scanner",
                      detail: "Developed Caliwo with AI meal analysis, automated macronutrient insights, and real-time nutrition dashboards using React Native and PostgreSQL.",
                      icon: "fas fa-robot",
                      color: "text-emerald-400",
                      badge: "AI Engineering"
                    },
                    {
                      title: "600+ LeetCode DSA Problems Solved",
                      detail: "Deep competitive problem-solving skills across arrays, trees, dynamic programming, graphs, and system design principles.",
                      icon: "fas fa-code-branch",
                      color: "text-indigo-400",
                      badge: "Problem Solving"
                    }
                  ].map((strength, index) => (
                    <div key={index} className="glass-card p-5 flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-lg ${strength.color} shrink-0 mt-0.5`}>
                        <i className={strength.icon}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h5 className="text-white font-bold text-sm sm:text-base">{strength.title}</h5>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold shrink-0">
                            {strength.badge}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{strength.detail}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 3: FACTS */}
              {activeTab === "facts" && (
                <motion.div
                  key="facts"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card p-6 sm:p-8 space-y-4"
                >
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <i className="fas fa-check-circle text-cyan-400"></i>
                    Verified Contact & Educational Details
                  </h4>

                  <div className="divide-y divide-slate-800/80">
                    {[
                      { label: "Full Name", value: "Shrawan Kumar Sah" },
                      { label: "Primary Role", value: "Full Stack Engineer" },
                      { label: "Current Focus", value: "React.js · TypeScript · Node.js · Databases" },
                      { label: "Education", value: "B.Tech in Computer Science and Engineering" },
                      { label: "College / University", value: "Lovely Professional University (LPU)" },
                      { label: "Academic CGPA", value: "7.30 / 10.00" },
                      { label: "Graduation Window", value: "Jun' 2022 – Jul' 2026" },
                      { label: "Location", value: "Phagwara & Jalandhar, Punjab, India" },
                      { label: "Email Address", value: "shrawansah3067@gmail.com", isLink: "mailto:shrawansah3067@gmail.com" },
                      { label: "Direct Phone", value: "+91 8360705978", isLink: "tel:+918360705978" },
                      { label: "Work Authorization", value: "Available for Full-time Roles & Internships" },
                    ].map((item, idx) => (
                      <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs sm:text-sm">
                        <span className="text-slate-400 font-medium">{item.label}</span>
                        {item.isLink ? (
                          <a href={item.isLink} className="text-cyan-400 hover:underline font-semibold font-mono">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-white font-semibold text-left sm:text-right">{item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;