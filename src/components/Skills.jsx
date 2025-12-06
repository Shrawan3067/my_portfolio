import React from 'react';

const Skills = () => {
  const skills = [
    {
      icon: 'fab fa-java',
      title: 'Java',
      description: 'Expertise in Java Swing for GUI-based applications, event-driven programming, and core Java principles.',
    },
    {
      icon: 'fab fa-js',
      title: 'JavaScript',
      description: 'Proficient in client-side scripting, DOM manipulation, and creating interactive web experiences.',
    },
    {
      icon: 'fas fa-code',
      title: 'DSA',
      description: 'Strong foundation in Data Structures and Algorithms with problem-solving skills.',
    },
    {
      icon: 'fab fa-html5',
      title: 'HTML & CSS',
      description: 'Skilled in creating responsive and accessible web interfaces with modern design principles.',
    },
    {
      icon: 'fab fa-react',
      title: 'React.js',
      description: 'Experience in building dynamic single-page applications with React framework.',
    },
    {
      icon: 'fab fa-node-js',
      title: 'Node.js',
      description: 'Knowledge of server-side JavaScript development and backend services.',
    },
    {
      icon: 'fab fa-node-js',
      title: 'Express.js',
      description: 'Proficient in building scalable server-side applications and RESTful APIs using Express.js.',
    },
    {
      icon: 'fab fa-bootstrap',
      title: 'Bootstrap',
      description: 'Skilled in designing responsive and mobile-first web interfaces using Bootstrap.',
    },
    {
      icon: 'fab fa-git-alt',
      title: 'Git & GitHub',
      description: 'Proficient in version control and collaborative development workflows.',
    },
    {
      icon: 'fas fa-database',
      title: 'MySQL',
      description: 'Experienced in designing and managing relational databases with MySQL.',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Creating websites that work seamlessly across all device sizes.',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <i className={`${skill.icon} text-5xl mb-6`}></i>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;