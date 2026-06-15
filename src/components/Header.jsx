import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-dark/80 backdrop-blur-lg border-b border-gray/20 shadow-lg'
          : 'py-5 bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          {location.pathname === '/' ? (
            <a href="#home" className="text-2xl font-black text-light tracking-tight group">
              Shrawan <span className="text-primary group-hover:text-secondary transition-colors duration-300">Sah</span>
            </a>
          ) : (
            <Link to="/" className="text-2xl font-black text-light tracking-tight group">
              Shrawan <span className="text-primary group-hover:text-secondary transition-colors duration-300">Sah</span>
            </Link>
          )}

          {/* Desktop Navbar */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm font-medium text-gray hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Theme Toggle Button */}
            <li>
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-light/50 border border-gray/20 hover:bg-primary/10 hover:border-primary/50 hover:text-primary text-gray transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <i className="fas fa-sun text-yellow-400"></i>
                ) : (
                  <i className="fas fa-moon text-indigo-600"></i>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-light/50 border border-gray/20 hover:bg-primary/10 text-gray"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon text-indigo-600"></i>
              )}
            </button>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-light/50 border border-gray/20 text-gray"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <ul className="bg-dark-light/95 backdrop-blur-xl border border-gray/20 rounded-2xl p-4 flex flex-col space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block py-3 px-4 rounded-xl text-gray hover:text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
