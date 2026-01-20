import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        {
          icon: 'fab fa-java',
          title: 'Java',
          description: 'Expertise in Java Swing for GUI-based applications, event-driven programming, and core Java principles.',
        },
        {
          icon: 'fab fa-cuttlefish',
          title: 'C++',
          description: 'Proficient in C++ for system programming, algorithms, and performance-critical applications.',
        },
        {
          icon: 'fab fa-python',
          title: 'Python',
          description: 'Experience in Python for scripting, data analysis, and backend development.',
        },
        {
          icon: 'fas fa-database',
          title: 'SQL',
          description: 'Skilled in writing complex queries, database design, and data manipulation with SQL.',
        }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        {
          icon: 'fab fa-html5',
          title: 'HTML5 & CSS3',
          description: 'Skilled in creating responsive and accessible web interfaces with modern design principles.',
        },
        {
          icon: 'fab fa-react',
          title: 'React.js',
          description: 'Experience in building dynamic single-page applications with React framework.',
        },
        {
          icon: 'fab fa-js-square',
          title: 'TypeScript',
          description: 'Proficient in TypeScript for type-safe JavaScript development and scalable applications.',
        },
        {
          icon: 'fab fa-js',
          title: 'JavaScript (ES6+)',
          description: 'Expert in modern JavaScript features including ES6+ syntax, promises, async/await, and modules.',
        },
        {
          icon: 'fas fa-cube',
          title: 'Redux',
          description: 'Experience with state management using Redux for complex React applications.',
        },
        {
          icon: 'fab fa-bootstrap',
          title: 'Bootstrap',
          description: 'Skilled in designing responsive and mobile-first web interfaces using Bootstrap.',
        },
        {
          icon: 'fas fa-palette',
          title: 'Tailwind CSS',
          description: 'Proficient in utility-first CSS framework for rapid UI development.',
        },
        {
          icon: 'fas fa-bolt',
          title: 'Vite.js',
          description: 'Experience with Vite.js for fast build tooling and optimized development workflow.',
        },
      ]
    },
    {
      title: 'Frontend Concepts',
      skills: [
        {
          icon: 'fas fa-cubes',
          title: 'Component-Based Architecture',
          description: 'Expert in building reusable, modular UI components following React best practices.',
        },
        {
          icon: 'fas fa-universal-access',
          title: 'Accessibility (ARIA)',
          description: 'Skilled in creating accessible web applications using ARIA attributes and WCAG guidelines.',
        },
        {
          icon: 'fas fa-mobile-alt',
          title: 'Responsive Design',
          description: 'Creating websites that work seamlessly across all device sizes.',
        },
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        {
          icon: 'fab fa-node-js',
          title: 'Node.js',
          description: 'Knowledge of server-side JavaScript development and backend services.',
        },
        {
          icon: 'fas fa-server',
          title: 'Express.js',
          description: 'Proficient in building scalable server-side applications and RESTful APIs using Express.js.',
        },
        {
          icon: 'fas fa-exchange-alt',
          title: 'REST APIs',
          description: 'Expert in designing, developing, and consuming RESTful APIs with proper HTTP methods and status codes.',
        },
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        {
          icon: 'fas fa-database',
          title: 'MySQL',
          description: 'Experienced in designing and managing relational databases with MySQL.',
        },
        {
          icon: 'fas fa-leaf',
          title: 'MongoDB',
          description: 'Experience with NoSQL databases and document-oriented data modeling.',
        },
        {
          icon: 'fab fa-git-alt',
          title: 'Git & GitHub',
          description: 'Proficient in version control and collaborative development workflows.',
        },
        {
          icon: 'fas fa-toolbox',
          title: 'Postman',
          description: 'Skilled in API testing, documentation, and development workflows.',
        },
        {
          icon: 'fab fa-jira',
          title: 'Jira',
          description: 'Experience with agile project management and issue tracking.',
        },
      ]
    },
    {
      title: 'CS Fundamentals',
      skills: [
        {
          icon: 'fas fa-code',
          title: 'Data Structures & Algorithms',
          description: 'Strong foundation in Data Structures and Algorithms with problem-solving skills.',
        },
        {
          icon: 'fas fa-cogs',
          title: 'Operating System',
          description: 'Understanding of OS concepts, processes, memory management, and system design.',
        },
        {
          icon: 'fas fa-network-wired',
          title: 'Computer Networks',
          description: 'Knowledge of networking protocols, architectures, and communication principles.',
        },
        {
          icon: 'fas fa-shapes',
          title: 'Object-Oriented Programming',
          description: 'Proficient in OOP concepts including encapsulation, inheritance, and polymorphism.',
        },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        {
          icon: 'fas fa-users',
          title: 'Team Leadership',
          description: 'Experience in leading development teams and coordinating projects.',
        },
        {
          icon: 'fas fa-lightbulb',
          title: 'Problem-Solving',
          description: 'Strong analytical skills and ability to find efficient solutions to complex challenges.',
        },
        {
          icon: 'fas fa-brain',
          title: 'Critical Thinking',
          description: 'Ability to analyze situations objectively and make reasoned judgments.',
        },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 bg-dark/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            My Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
        </div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary border-b pb-2 border-gray/30">
              {category.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-card animate-fade-in"
                  style={{ animationDelay: `${skillIndex * 0.05}s` }}
                >
                  <i className={`${skill.icon} text-5xl mb-6`}></i>
                  <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
                  <p className="text-gray">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;