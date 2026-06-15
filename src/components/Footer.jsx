import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark border-t border-gray/20 py-12">
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/Shrawan3067"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-dark-light/50 border border-gray/20 rounded-xl flex items-center justify-center text-2xl text-gray hover:text-light hover:bg-gray/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shrawansah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-dark-light/50 border border-gray/20 rounded-xl flex items-center justify-center text-2xl text-gray hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(10,102,194,0.2)] transition-all duration-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="text-gray font-light">
          © {currentYear} Shrawan Kumar Sah. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;