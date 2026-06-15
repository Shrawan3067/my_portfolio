import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
import ProjectDetail from './components/ProjectDetail';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    // Load Font Awesome CSS from CDN
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    faLink.crossOrigin = 'anonymous';
    document.head.appendChild(faLink);

    return () => {
      document.head.removeChild(faLink);
    };
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <title>Shrawan Sah | Premium Portfolio</title>
          <meta name="description" content="Portfolio of Shrawan Sah, a Full Stack Developer specializing in premium, high-performance web applications." />
          <meta property="og:title" content="Shrawan Sah | Premium Portfolio" />
          <meta property="og:description" content="Portfolio of Shrawan Sah, a Full Stack Developer specializing in premium, high-performance web applications." />
        </Helmet>
        <Router>
          <div className="min-h-screen bg-dark text-light transition-colors duration-300 font-inter">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <CodingProfile />
                    <Education />
                    <Contact />
                  </>
                } />
                <Route path="/project/:projectId" element={<ProjectDetail />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;