import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Shrawan Kumar Sah</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <section className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090d16] bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass-card p-8 sm:p-14 relative overflow-hidden"
          >
            {/* Subtle top accent gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600"></div>

            {/* Glowing 404 Code Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              HTTP ERROR 404 • ROUTE_NOT_FOUND
            </div>

            {/* Huge 404 Heading */}
            <h1 className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 tracking-tight leading-none mb-4 animate-float">
              404
            </h1>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Page Not Found
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto font-normal leading-relaxed mb-10">
              The endpoint or document you are trying to access has been relocated, deleted, or doesn't exist in Shrawan's portfolio system.
            </p>

            {/* Primary Navigation Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link
                to="/"
                className="btn-primary text-sm py-3 px-6"
              >
                <i className="fas fa-home text-xs"></i>
                <span>Return to Home</span>
              </Link>

              <button
                onClick={() => navigate(-1)}
                className="btn-outline text-sm py-3 px-6"
              >
                <i className="fas fa-arrow-left text-xs text-indigo-400"></i>
                <span>Previous Page</span>
              </button>
            </div>

            {/* Quick Links Suggestions */}
            <div className="pt-8 border-t border-slate-800/80">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Recommended Destinations
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: 'Featured Projects', href: '/#projects', icon: 'fas fa-layer-group' },
                  { label: 'Work Experience', href: '/#experience', icon: 'fas fa-briefcase' },
                  { label: 'Skills & Tech', href: '/#skills', icon: 'fas fa-microchip' },
                  { label: 'Contact Shrawan', href: '/#contact', icon: 'fas fa-paper-plane' },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    className="px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all flex items-center gap-2"
                  >
                    <i className={`${item.icon} text-[11px] text-cyan-400`}></i>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
