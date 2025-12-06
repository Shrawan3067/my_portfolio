import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-dark/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            My Experience
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="timeline-content group">
            <div>
              <div className="text-primary font-semibold mb-2">July - August 2023</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Summer Training/Internship</h3>
              <h4 className="text-xl font-bold text-secondary mb-4">Technonto Academy</h4>
              <p className="text-gray">
                Gained hands-on experience in Java Swing for GUI-based application development.
                Developed interactive desktop applications using Swing components (JFrame, JPanel,
                JButton, JTextField, JTable, etc). Worked on event-driven programming and
                implemented ActionListener, KeyListener, and MouseListener.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Certificate"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="https://drive.google.com/file/d/1nhRUigAZcna5ZtHXGePsBvYkv1O9zELu/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-light hover:text-primary transition-colors"
              >
                <i className="fas fa-external-link-alt"></i>
                Certificate Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;