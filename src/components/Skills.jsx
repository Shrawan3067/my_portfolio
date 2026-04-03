import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      color: '#3B82F6',
      skills: ['Java', 'C++', 'JavaScript (ES6+)', 'SQL']
    },
    {
      title: 'Frontend',
      icon: '🎨',
      color: '#8B5CF6',
      skills: ['React.js', 'TypeScript', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend & APIs',
      icon: '⚙️',
      color: '#F59E0B',
      skills: ['Node.js', 'Express.js', 'REST API Development']
    },
    {
      title: 'Security',
      icon: '🔒',
      color: '#10B981',
      skills: ['JWT Authentication', 'bcryptjs (Password Hashing)']
    },
    {
      title: 'Databases & Tools',
      icon: '🗄️',
      color: '#14B8A6',
      skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Postman', 'Jira']
    },
    {
      title: 'Soft Skills',
      icon: '🤝',
      color: '#EC4899',
      skills: ['Communication', 'Team Collaboration', 'Problem Solving', 'Adaptability']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">What I Bring to the Table</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Colored Top Bar */}
              <div 
                className="h-2 transition-all duration-300 group-hover:h-3"
                style={{ backgroundColor: category.color }}
              ></div>
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        backgroundColor: `${category.color}10`,
                        color: category.color,
                        border: `1px solid ${category.color}20`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = category.color;
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${category.color}10`;
                        e.currentTarget.style.color = category.color;
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;