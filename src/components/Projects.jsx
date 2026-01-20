import React from 'react';
import allcalculator from '../assets/allcalculator.png';
import smartnepal from '../assets/smartnepal.png';
import meditrack from '../assets/image.png';
import sajilobhoj from '../assets/sajilobhoj.png';
import suwidha from '../assets/suwidha.png';
import careerconnect from '../assets/careerconnect.png';

const Projects = () => {
  const projects = [
    {
      title: 'BiteXpress',
      description: 'A user-friendly platform that helps people easily discover, order, and enjoy delicious meals from local restaurants, streamlining the food ordering experience with convenience and speed.',
      image: `${sajilobhoj}`,
      tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      demoLink: 'https://bite-xpress-food-delivery-app.vercel.app/',
    },
     {
      title: 'SmartNepal',
      description: 'A powerful web-based travel platform featuring AI-driven itineraries, real-time booking, and dynamic recommendations.',
      image: `${smartnepal}`,
      tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
      demoLink: 'https://smartnepal.netlify.app/',
    },
    ,
     {
      title: 'CareerConnect',
      description: 'An inclusive and accessible job portal connecting talent with opportunities through a simple, user-friendly, and barrier-free experience.',
      image: `${careerconnect}`,
      tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      demoLink: 'https://accessible-job-portal.vercel.app/',
    },
    {
      title: 'Calculators',
      description: 'A dynamic web-based calculator platform offering a wide range of calculation tools across categories like finance, health, math, and fitness.',
      image: `${allcalculator}`,
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      demoLink: 'https://www.allcalculator.net',
    },
    {
      title: 'Suwidha',
      description: 'A cross-platform online marketplace mobile app built with React Native. It allows users to buy, sell, and explore products seamlessly on both Android and iOS.',
      image: `${suwidha}`,
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      demoLink: 'https://github.com/Shrawan3067/Suwidha---Online-Marketplace.git',
    },
    {
      title: 'MediTrack',
      description: 'A robust web-based medicine inventory system featuring CRUD operations, search/filter functionality, and data persistence.',
      image: `${meditrack}`,
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      demoLink: 'https://medi-track-one.vercel.app/',
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            My Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-light hover:text-primary transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;