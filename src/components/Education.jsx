import React from 'react';
import { motion } from 'framer-motion';
import gcc from '../assets/Google_Cloud_Computing.jpg';
import DSA from '../assets/DSA_Java.jpg';
import MERN from '../assets/MERN_Stack.jpg';

const Education = () => {
  const certifications = [
    {
      title: 'Google Cloud Computing - NPTEL',
      image: gcc,
      link: 'https://drive.google.com/file/d/1v65oskQOjRv1NP1JnH50V6xQBZcWtS3D/view',
      border: 'hover:border-primary/50',
      glow: 'from-primary/20 to-secondary/20',
    },
    {
      title: 'DSA with Java - Apna College',
      image: DSA,
      link: 'https://drive.google.com/file/d/1Pgf97y7BjRQeLpr-hoCGyyE3lEsq1sqS/view',
      border: 'hover:border-secondary/50',
      glow: 'from-secondary/20 to-primary/20',
    },
    {
      title: 'MERN Stack - Cipher Schools',
      image: MERN,
      link: 'https://drive.google.com/file/d/1RKfGaa_-xSgYERo-xdx45GJAQVX0JvE8/view',
      border: 'hover:border-green-500/50',
      glow: 'from-green-500/20 to-emerald-500/20',
    },
  ];

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
      id="education"
      className="py-24 relative overflow-hidden bg-dark transition-colors duration-300"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
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
              Learning & Achievements
            </p>

            <div className="section-title mb-6">
              <h2>My Certifications</h2>
            </div>

            <p className="text-gray text-lg mt-6 max-w-2xl mx-auto font-light">
              Certifications and training programs that strengthened my development,
              cloud, and problem-solving skills.
            </p>
          </motion.div>
        </div>

        {/* Certification Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className={`group relative glass-card p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray/20 ${cert.border}`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 bg-gradient-to-br ${cert.glow}`}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6 border border-gray/20">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-light mb-4 leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray text-sm leading-relaxed mb-8 font-light flex-grow">
                  Successfully completed professional certification focused on
                  practical development skills, industry technologies, and
                  real-world applications.
                </p>

                {/* Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full justify-center"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray text-lg font-light">
            Continuously learning modern technologies and industry best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;