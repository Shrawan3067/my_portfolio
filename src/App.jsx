import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CodingProfile from './components/CodingProfile';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ProjectDetail from './components/ProjectDetail';
import NotFound from './components/NotFound';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    // Load Font Awesome CSS from CDN if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const faLink = document.createElement('link');
      faLink.rel = 'stylesheet';
      faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
      faLink.crossOrigin = 'anonymous';
      document.head.appendChild(faLink);
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <title>Shrawan Kumar Sah | Full Stack Engineer — React.js · TypeScript · Node.js</title>
          <meta
            name="description"
            content="Portfolio of Shrawan Kumar Sah, Full Stack Engineer specializing in React.js, TypeScript, Node.js, Express.js, and SQL/NoSQL databases with 10x API optimization expertise."
          />
          <meta property="og:title" content="Shrawan Kumar Sah | Full Stack Engineer" />
          <meta
            property="og:description"
            content="Full Stack Engineer with hands-on experience building end-to-end web apps, REST APIs, and database performance optimization."
          />
        </Helmet>
        <Router>
          <div className="min-h-screen bg-[#090d16] text-slate-100 transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white">
            <Header />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <About />
                      <Experience />
                      <Projects />
                      <Skills />
                      <CodingProfile />
                      <Education />
                      <Contact />
                    </>
                  }
                />
                <Route path="/project/:projectId" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
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