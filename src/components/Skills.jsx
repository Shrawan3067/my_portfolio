import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      color: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/20",
      skills: [
        { name: "Java", level: 90, icon: "fab fa-java" },
        { name: "C++", level: 75, icon: "fas fa-terminal" },
        { name: "JavaScript", level: 95, icon: "fab fa-js" },
        { name: "SQL", level: 85, icon: "fas fa-database" },
      ],
    },
    {
      title: "Frontend",
      icon: "fas fa-palette",
      color: "from-purple-500 to-purple-600",
      shadow: "shadow-purple-500/20",
      skills: [
        { name: "React.js", level: 95, icon: "fab fa-react" },
        { name: "TypeScript", level: 85, icon: "fab fa-js" },
        { name: "Redux", level: 80, icon: "fas fa-cube" },
        { name: "HTML5", level: 95, icon: "fab fa-html5" },
        { name: "CSS3", level: 90, icon: "fab fa-css3-alt" },
        { name: "Tailwind", level: 95, icon: "fab fa-css3" },
        { name: "Bootstrap", level: 85, icon: "fab fa-bootstrap" },
      ],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      color: "from-green-500 to-green-600",
      shadow: "shadow-green-500/20",
      skills: [
        { name: "Node.js", level: 90, icon: "fab fa-node" },
        { name: "Express.js", level: 85, icon: "fas fa-server" },
        { name: "REST API", level: 88, icon: "fas fa-plug" },
        { name: "GraphQL", level: 75, icon: "fas fa-project-diagram" },
      ],
    },
    {
      title: "Database",
      icon: "fas fa-database",
      color: "from-orange-500 to-orange-600",
      shadow: "shadow-orange-500/20",
      skills: [
        { name: "MySQL", level: 85, icon: "fas fa-database" },
        { name: "MongoDB", level: 80, icon: "fas fa-leaf" },
        { name: "PostgreSQL", level: 75, icon: "fas fa-elephant" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "fas fa-tools",
      color: "from-red-500 to-red-600",
      shadow: "shadow-red-500/20",
      skills: [
        { name: "Git", level: 95, icon: "fab fa-git-alt" },
        { name: "GitHub", level: 95, icon: "fab fa-github" },
        { name: "Docker", level: 70, icon: "fab fa-docker" },
        { name: "VS Code", level: 95, icon: "fas fa-code" },
      ],
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      color: "from-pink-500 to-pink-600",
      shadow: "shadow-pink-500/20",
      skills: [
        { name: "Communication", level: 95, icon: "fas fa-comments" },
        { name: "Team Work", level: 90, icon: "fas fa-users" },
        { name: "Problem Solving", level: 95, icon: "fas fa-lightbulb" },
        { name: "Adaptability", level: 85, icon: "fas fa-sync" },
      ],
    },
  ];

  const getSkillLevelColor = (level) => {
    if (level >= 90) return "text-emerald-400";
    if (level >= 80) return "text-blue-400";
    if (level >= 70) return "text-yellow-400";
    return "text-red-400";
  };

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
      id="skills"
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
              Technical Expertise
            </p>

            <div className="section-title mb-6">
              <h2>Skills & Technologies</h2>
            </div>

            <p className="text-gray mt-5 max-w-2xl mx-auto font-light text-lg">
              A modern technology stack focused on scalable frontend, backend,
              cloud, and product development.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="glass-card p-6 group relative overflow-hidden"
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}
              ></div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg ${category.shadow} group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${category.icon} text-xl`}></i>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-light group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray mt-1">
                    {category.skills.length} Technologies
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="relative p-4 rounded-xl bg-dark-light/50 border border-gray/20 hover:border-primary/50 hover:bg-dark-light transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setSelectedSkill(
                        selectedSkill === `${category.title}-${skill.name}`
                          ? null
                          : `${category.title}-${skill.name}`
                      )
                    }
                  >
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md`}
                        >
                          <i className={skill.icon}></i>
                        </div>

                        <div>
                          <h4 className="font-semibold text-light">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-gray font-light">
                            Professional Skill
                          </p>
                        </div>
                      </div>

                      <span className={`text-sm font-bold ${getSkillLevelColor(skill.level)}`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      ></motion.div>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {selectedSkill === `${category.title}-${skill.name}` && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-gray/20 overflow-hidden"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray font-light">
                              Proficiency Level
                            </p>
                            <span className={`text-sm font-semibold ${getSkillLevelColor(skill.level)}`}>
                              {skill.level >= 90
                                ? "Expert"
                                : skill.level >= 80
                                ? "Advanced"
                                : skill.level >= 70
                                ? "Intermediate"
                                : "Beginner"}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Active Indicator */}
              {hoveredCategory === category.title && (
                <div className="absolute top-6 right-6">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-gray text-lg font-light">
            Constantly learning, building, and improving modern technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;