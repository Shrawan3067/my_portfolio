import React, { useState } from "react";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      color: "from-blue-500 to-blue-600",
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
      skills: [
        { name: "Communication", level: 95, icon: "fas fa-comments" },
        { name: "Team Work", level: 90, icon: "fas fa-users" },
        { name: "Problem Solving", level: 95, icon: "fas fa-lightbulb" },
        { name: "Adaptability", level: 85, icon: "fas fa-sync" },
      ],
    },
  ];

  const getSkillLevelColor = (level) => {
    if (level >= 90) {
      return "text-emerald-600 dark:text-emerald-400";
    }

    if (level >= 80) {
      return "text-blue-600 dark:text-blue-400";
    }

    if (level >= 70) {
      return "text-amber-600 dark:text-yellow-400";
    }

    return "text-red-600 dark:text-red-400";
  };

  return (
    <section
      id="skills"
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
            Technical Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto">
            A modern technology stack focused on scalable frontend, backend,
            cloud, and product development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="
                group
                relative
                bg-white
                dark:bg-[#111827]
                rounded-2xl
                p-6
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
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Hover Gradient */}
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${category.color}
                  rounded-2xl
                  opacity-0
                  group-hover:opacity-[0.06]
                  transition-opacity
                  duration-300
                `}
              ></div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div
                  className={`
                    w-14
                    h-14
                    bg-gradient-to-br
                    ${category.color}
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                    group-hover:scale-105
                    transition-transform
                    duration-300
                  `}
                >
                  <i className={`${category.icon} text-lg`}></i>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {category.skills.length} Technologies
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="
                      relative
                      p-4
                      rounded-xl
                      bg-gray-50
                      dark:bg-gray-800/50
                      border
                      border-gray-100
                      dark:border-gray-700/50
                      hover:bg-white
                      dark:hover:bg-black/50
                      transition-all
                      duration-300
                      cursor-pointer
                    "
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
                          className={`
                            w-10
                            h-10
                            rounded-xl
                            bg-gradient-to-br
                            dark:hover:bg-gray-800/50
                            ${category.color}
                            flex
                            items-center
                            justify-center
                            text-white
                            shadow-md
                          `}
                        >
                          <i className={skill.icon}></i>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h4>

                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Professional Skill
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-sm font-bold ${getSkillLevelColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    {/* Expanded Details */}
                    {selectedSkill ===
                      `${category.title}-${skill.name}` && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Proficiency Level
                          </p>

                          <span
                            className={`text-sm font-semibold ${getSkillLevelColor(
                              skill.level
                            )}`}
                          >
                            {skill.level >= 90
                              ? "Expert"
                              : skill.level >= 80
                              ? "Advanced"
                              : skill.level >= 70
                              ? "Intermediate"
                              : "Beginner"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Active Indicator */}
              {hoveredCategory === category.title && (
                <div className="absolute top-5 right-5">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Constantly learning, building, and improving modern technologies.
          </p>
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }

        .transition-transform {
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }

        .transition-opacity {
          transition-property: opacity;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </section>
  );
};

export default Skills;