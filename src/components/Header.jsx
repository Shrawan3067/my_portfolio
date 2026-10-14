import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import resume from '../assets/Shrawan_Full_Stack.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Achievements', href: '#coding-profile', id: 'achievements' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#090d16]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <nav className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-3 no-underline"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-lg">
                S
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                Shrawan <span className="text-cyan-400 font-extrabold">Sah</span>
              </span>
              <span className="hidden sm:block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Full Stack Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/70 shadow-inner">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    activeSection === link.id
                      ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Download / View CV */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-1.5 shadow-sm"
            >
              <i className="fas fa-file-download text-xs"></i>
              <span>Resume</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/60 border border-slate-700/60 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-300 hover:text-white transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-yellow-400 text-sm"></i>
              ) : (
                <i className="fas fa-moon text-indigo-400 text-sm"></i>
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-yellow-400 text-xs"></i>
              ) : (
                <i className="fas fa-moon text-indigo-400 text-xs"></i>
              )}
            </button>

            <button
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[450px] opacity-100 mt-3 pb-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-2xl p-4 shadow-2xl flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 mt-2 flex gap-3">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 text-center rounded-xl text-xs font-semibold bg-indigo-600 text-white flex items-center justify-center gap-2"
              >
                <i className="fas fa-file-download"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
