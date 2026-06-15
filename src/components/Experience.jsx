import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
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
              Professional Journey
            </p>

            <div className="section-title mb-6">
              <h2>My Experience</h2>
            </div>

            <p className="text-gray mt-5 max-w-2xl mx-auto font-light text-lg">
              Practical experience in software development, Java desktop
              applications, and modern programming concepts.
            </p>
          </motion.div>
        </div>

        {/* Experience Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card group relative grid md:grid-cols-2 gap-10 items-center p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)] overflow-hidden">
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Left Content */}
            <div className="relative z-10">
              {/* Timeline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-md">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-primary">
                  July - August 2023
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-light mb-3 group-hover:text-primary transition-colors duration-300">
                Summer Training / Internship
              </h3>

              {/* Company */}
              <h4 className="text-xl font-semibold text-secondary mb-6 flex items-center gap-2">
                <i className="fas fa-building text-sm"></i>
                Technonto Academy
              </h4>

              {/* Description */}
              <p className="text-gray leading-relaxed mb-8 font-light">
                Gained hands-on experience in Java Swing for GUI-based desktop
                application development. Developed interactive applications using
                Swing components like JFrame, JPanel, JButton, JTextField, and
                JTable. Worked extensively on event-driven programming and
                implemented ActionListener, KeyListener, and MouseListener for
                responsive user interactions.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-dark-light/50 border border-gray/20 text-light rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-colors">
                  <i className="fas fa-code mr-2 text-primary"></i>
                  Software Engineering
                </span>
                <span className="px-4 py-2 bg-dark-light/50 border border-gray/20 text-light rounded-full text-sm font-medium hover:border-secondary/50 hover:bg-secondary/10 transition-colors">
                  <i className="fas fa-server mr-2 text-secondary"></i>
                  Backend Systems
                </span>
                <span className="px-4 py-2 bg-dark-light/50 border border-gray/20 text-light rounded-full text-sm font-medium hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors">
                  Desktop Applications
                </span>
              </div>

              {/* Certificate Button */}
              <a
                href="https://drive.google.com/file/d/1nhRUigAZcna5ZtHXGePsBvYkv1O9zELu/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-3"
              >
                <i className="fas fa-external-link-alt"></i>
                View Certificate
              </a>
            </div>

            {/* Right Image */}
            <div className="relative z-10 h-full flex items-center">
              <div className="relative overflow-hidden rounded-3xl border border-gray/20 shadow-2xl glass-card w-full">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Internship Experience"
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 rounded-2xl bg-dark/50 backdrop-blur-md border border-gray/20">
                    <p className="text-gray text-sm font-medium">
                      Internship Experience
                    </p>
                    <h5 className="text-light text-lg font-bold mt-1">
                      Java Development
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Dot */}
            <div className="absolute top-6 right-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-gray text-lg font-light">
            Continuously building real-world experience and modern development
            expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;