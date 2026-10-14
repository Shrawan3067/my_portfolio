import React from 'react';
import resume from '../assets/Shrawan_Full_Stack.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#coding-profile' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#060910] border-t border-slate-200 dark:border-slate-800/80 py-14 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="text-xl font-bold text-slate-900 dark:text-white tracking-tight inline-block mb-1"
            >
              Shrawan <span className="text-cyan-500">Kumar Sah</span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Full Stack Engineer • React.js · TypeScript · Node.js
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/Shrawan3067', icon: 'fab fa-github', title: 'GitHub' },
              { href: 'https://www.linkedin.com/in/shrawansah', icon: 'fab fa-linkedin-in', title: 'LinkedIn' },
              { href: 'https://leetcode.com/u/Shrawansah/', icon: 'fas fa-code', title: 'LeetCode' },
              { href: 'mailto:shrawansah3067@gmail.com', icon: 'fas fa-envelope', title: 'Email' },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target={soc.title !== 'Email' ? '_blank' : undefined}
                rel={soc.title !== 'Email' ? 'noopener noreferrer' : undefined}
                title={soc.title}
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all text-xs hover:-translate-y-0.5 shadow-sm dark:shadow-none"
              >
                <i className={soc.icon}></i>
              </a>
            ))}
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Shrawan Kumar Sah. Built with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Phagwara & Jalandhar, Punjab
            </span>
            <span>•</span>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-cyan-400 hover:underline font-semibold"
            >
              Curriculum Vitae (PDF)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;