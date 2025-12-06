import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CodingProfile from './components/CodingProfile';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  useEffect(() => {
    // Load Font Awesome CSS from CDN so <i className="fas/fa..."> icons render
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    faLink.crossOrigin = 'anonymous';
    document.head.appendChild(faLink);

    // Add custom CSS for light mode
    const style = document.createElement('style');
    style.innerHTML = `
      .light {
        --primary: #6c63ff;
        --primary-dark: #564fcc;
        --secondary: #ff6584;
        --dark: #f8f9fa;
        --dark-light: #ffffff;
        --light: #121212;
        --gray: #666666;
      }
      
      body.light {
        background-color: var(--dark);
        color: var(--light);
      }
      
      body.light .skill-card,
      body.light .project-card,
      body.light .timeline-content,
      body.light .education-card,
      body.light .contact-form,
      body.light footer {
        background-color: var(--dark-light);
        color: var(--light);
      }
      
      body.light .form-control {
        background-color: white;
        color: var(--light);
        border: 1px solid #e5e7eb;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(faLink);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark text-light transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <CodingProfile />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;