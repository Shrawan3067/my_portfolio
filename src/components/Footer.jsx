import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-light py-12">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/Shrawan3067"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl hover:bg-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shrawansah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl hover:bg-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="text-gray">
          © 2025 Shrawan Kumar Sah. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;