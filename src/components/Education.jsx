import React from 'react';
import gcc from '../assets/Google_Cloud_Computing.jpg';
import DSA from '../assets/DSA_Java.jpg';
import MERN from '../assets/MERN_Stack.jpg';

const Education = () => {
  const certifications = [
    {
      title: 'Google Cloud Computing - NPTEL',
      image: `${gcc}`,
      link: 'https://drive.google.com/file/d/1v65oskQOjRv1NP1JnH50V6xQBZcWtS3D/view',
    },
    {
      title: 'DSA with Java - Apna College',
      image: `${DSA}`,
      link: 'https://drive.google.com/file/d/1Pgf97y7BjRQeLpr-hoCGyyE3lEsq1sqS/view',
    },
    {
      title: 'MERN Stack - Cipher Schools',
      image: `${MERN}`,
      link: 'https://drive.google.com/file/d/1RKfGaa_-xSgYERo-xdx45GJAQVX0JvE8/view',
    },
  ];

  return (
    <section id="education" className="py-24 bg-dark/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            My Certifications
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="education-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h4 className="text-xl font-bold text-primary mb-6">{cert.title}</h4>
              <div className="h-48 mb-6 overflow-hidden rounded-lg">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-light hover:text-primary transition-colors"
              >
                <i className="fas fa-external-link-alt"></i>
                Certificate Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;