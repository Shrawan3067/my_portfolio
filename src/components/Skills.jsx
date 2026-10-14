import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: "fas fa-code",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "JavaScript (ES6+)", level: 95, detail: "Async/await, Closures, DOM, Modern ESNext" },
        { name: "TypeScript", level: 90, detail: "Generics, Strict Typing, Interfaces, Full Stack Types" },
        { name: "Java", level: 88, detail: "Core Java, OOP, Collections, Multithreading, Swing" },
        { name: "SQL", level: 90, detail: "Complex Queries, Joins, Aggregations, Performance" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: "fas fa-desktop",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "React.js", level: 95, detail: "Hooks, Custom Hooks, Context, Virtual DOM, React 18" },
        { name: "Redux Toolkit", level: 85, detail: "Global State, Slices, RTK Query, Predictable Stores" },
        { name: "HTML5", level: 95, detail: "Semantic Elements, Accessibility, Web APIs" },
        { name: "CSS3", level: 92, detail: "Flexbox, Grid, Keyframes, Responsive Layouts" },
        { name: "Tailwind CSS", level: 95, detail: "Utility Architecture, Custom Design Systems, JIT" },
        { name: "Bootstrap", level: 85, detail: "Grid System, Rapid Prototyping, Component Modals" },
        { name: "Responsive Design", level: 95, detail: "Mobile-First, Fluid Breakpoints, Touch Gestures" },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: "fas fa-server",
      color: "from-emerald-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 92, detail: "Event Loop, Streams, Asynchronous Architecture" },
        { name: "Express.js", level: 92, detail: "Modular Routing, Custom Middleware, Controllers" },
        { name: "REST API Development", level: 95, detail: "Resource Modeling, Versioning, Status Codes" },
        { name: "JWT Authentication", level: 90, detail: "Token Signing, Expiry, Bearer Headers, RBAC" },
        { name: "Middleware", level: 90, detail: "Error Handling, Auth Guards, Rate Limiting" },
        { name: "Request Validation", level: 90, detail: "Payload Sanitization, Schema Enforcers, Security" },
      ],
    },
    {
      id: "databases",
      title: "Databases",
      icon: "fas fa-database",
      color: "from-amber-500 to-orange-600",
      skills: [
        { name: "PostgreSQL", level: 88, detail: "Relational Modeling, Foreign Keys, ACID compliance" },
        { name: "MongoDB", level: 92, detail: "Document Schemas, Mongoose, Aggregation Pipelines" },
        { name: "MySQL", level: 88, detail: "Relational Schemas, Primary Keys, Normalized Tables" },
        { name: "Indexing & Query Optimization", level: 90, detail: "Compound Indexes, Execution Plans, Latency Drops" },
        { name: "Pagination", level: 95, detail: "Cursor & Offset Pagination (10× Latency Gain at GharSeDeal)" },
        { name: "Schema Design", level: 90, detail: "Data Normalization, Denormalization tradeoffs" },
      ],
    },
    {
      id: "testing-tools",
      title: "Testing & Tools",
      icon: "fas fa-screwdriver-wrench",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Jest", level: 85, detail: "Unit Testing, Assertions, Mocking, Test Runners" },
        { name: "Postman", level: 95, detail: "API Testing, Environment Variables, Automated Collections" },
        { name: "Git", level: 95, detail: "Branching, Rebasing, Conflict Resolution, Clean Commits" },
        { name: "GitHub", level: 95, detail: "Pull Requests, Code Reviews, Actions CI/CD" },
        { name: "Debugging", level: 92, detail: "Chrome DevTools, Network Throttling, Memory Profiling" },
      ],
    },
    {
      id: "core-cs",
      title: "Core CS",
      icon: "fas fa-brain",
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "Data Structures & Algorithms", level: 95, detail: "600+ LeetCode problems solved, Graph, Tree, DP" },
        { name: "Object-Oriented Programming (OOP)", level: 92, detail: "Inheritance, Polymorphism, Encapsulation, SOLID" },
        { name: "DBMS", level: 90, detail: "Concurrency Control, Indexing, Normal Forms, Transactions" },
        { name: "Operating Systems", level: 85, detail: "Process Management, Threads, Deadlocks, Memory" },
        { name: "Computer Networks", level: 85, detail: "TCP/IP, HTTP/HTTPS, WebSockets, DNS, OSI Model" },
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "testing-tools", label: "Testing & Tools" },
    { id: "core-cs", label: "Core CS" },
  ];

  // Filtering
  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.detail.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-[#f8fafc] dark:bg-[#090d16] transition-colors duration-300"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[150px]"></div>
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
                <i className="fas fa-microchip text-[10px]"></i>
                Technical Stack
              </span>
              <div className="section-title">
                <h2>Skills & Technologies</h2>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal">
              Direct technical competencies categorized precisely according to my verified curriculum vitae.
            </p>
          </motion.div>
        </div>

        {/* Filter Controls Bar */}
        <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 bg-slate-200/80 dark:bg-slate-900/80 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-300/80 dark:border-slate-800 shadow-md dark:shadow-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-xs"></i>
            <input
              type="text"
              placeholder="Filter skill or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-base shadow-md`}
                  >
                    <i className={category.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {category.skills.length} Technical Skills
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
                        <span className="font-mono text-indigo-600 dark:text-cyan-400 font-bold text-xs">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        ></motion.div>
                      </div>

                      {/* Detail Snippet */}
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-tight">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;