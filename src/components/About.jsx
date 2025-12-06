import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Shrawan Kumar Sah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="animate-fade-in animation-delay-200">
            <h3 className="text-3xl font-bold text-primary mb-6">Software Engineer</h3>
            <p className="text-gray mb-6">
              I'm a dedicated Computer Science student at Lovely Professional University with a passion for creating efficient and user-friendly applications. My expertise lies in Java development and Full Stack Web Development.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <div>
                  <strong className="text-primary">Email:</strong>
                  <a
                    href="mailto:shrawansah3067@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-light hover:text-primary transition-colors"
                  >
                    shrawansah3067@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-primary"></i>
                <div>
                  <strong className="text-primary">Phone:</strong>
                  <a
                    href="tel:+918360705978"
                    className="ml-2 text-light hover:text-primary transition-colors"
                  >
                    +91 83607 05978
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fab fa-linkedin text-primary"></i>
                <div>
                  <strong className="text-primary">LinkedIn:</strong>
                  <a
                    href="https://www.linkedin.com/in/shrawansah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-light hover:text-primary transition-colors"
                  >
                    linkedin/in/shrawansah/
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/Images/Shrawan_Kumar_Sah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;