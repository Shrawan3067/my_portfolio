import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Coding Profile', href: '#coding-profile' },
    { name: 'Certifications', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`py-4 sticky top-0 z-50 border-b ${
        isDarkMode
          ? 'bg-dark border-white/10'
          : 'bg-white border-black/10'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-2xl md:text-3xl font-bold text-primary">
            Shrawan <span className="text-secondary">Sah</span>
          </a>

          {/* Desktop Navbar */}
          <ul className={`hidden md:flex space-x-8 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="font-medium relative group transition-colors duration-300 hover:text-primary"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}

            {/* Theme Toggle Button */}
            <li>
              <button
                onClick={toggleTheme}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-dark-light hover:bg-primary/20 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <i className="fas fa-sun text-yellow-400 text-xl"></i>
                ) : (
                  <i className="fas fa-moon text-primary text-xl"></i>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-dark-light"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-yellow-400 text-lg"></i>
              ) : (
                <i className="fas fa-moon text-primary text-lg"></i>
              )}
            </button>

            <button
              className="text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className={`rounded-lg p-4 space-y-4 ${
              isDarkMode ? 'bg-dark-light text-light' : 'bg-gray-100 text-dark'
            }`}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="block py-2 px-4 rounded hover:bg-primary/10 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
