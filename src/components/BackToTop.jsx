import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        
        const docHeight = document.body.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = (window.pageYOffset / (docHeight - winHeight)) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercent)));
      } else {
        setIsVisible(false);
        setProgress(0);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const button = (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg transition-all duration-300 z-50 overflow-hidden group ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      } hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg`}
      aria-label="Back to top"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      {/* Water container with mask */}
      <div className="absolute bottom-0 left-0 w-full h-full rounded-full overflow-hidden">
        {/* Water fill */}
        <div 
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-500 to-green-300 transition-all duration-300 ease-out"
          style={{ height: `${progress}%` }}
        >
          {/* Animated waves */}
          <div className="absolute -top-1 left-0 w-full">
            <div className="relative h-2 overflow-hidden">
              <div className="absolute -left-4 w-8 h-2 bg-green-400 rounded-full animate-wave" />
              <div className="absolute left-4 w-8 h-2 bg-green-300 rounded-full animate-wave delay-100" />
              <div className="absolute left-12 w-8 h-2 bg-green-400 rounded-full animate-wave delay-200" />
            </div>
          </div>
        </div>
        
        {/* Bubbles */}
        {progress > 30 && (
          <>
            <div className="absolute left-3 w-1 h-1 bg-white/30 rounded-full animate-bubble" style={{ bottom: `${progress - 10}%` }} />
            <div className="absolute right-4 w-1.5 h-1.5 bg-white/40 rounded-full animate-bubble delay-300" style={{ bottom: `${progress - 20}%` }} />
            <div className="absolute left-6 w-1 h-1 bg-white/20 rounded-full animate-bubble delay-500" style={{ bottom: `${progress - 15}%` }} />
          </>
        )}
      </div>
      
      {/* Button border */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
      
      {/* Center icon with ring effect */}
      <div className="relative z-10">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
        <div className="relative bg-primary/90 rounded-full w-10 h-10 flex items-center justify-center">
          <i className="fas fa-arrow-up" />
        </div>
      </div>
    </button>
  );

  // Add CSS for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes wave {
        0%, 100% { transform: translateX(0) scaleY(1); }
        50% { transform: translateX(4px) scaleY(0.8); }
      }
      
      @keyframes bubble {
        0% { transform: translateY(0) scale(1); opacity: 0.5; }
        100% { transform: translateY(-8px) scale(1.2); opacity: 0; }
      }
      
      .animate-wave {
        animation: wave 2s ease-in-out infinite;
      }
      
      .animate-bubble {
        animation: bubble 2s ease-out infinite;
      }
      
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-500 { animation-delay: 500ms; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (typeof document !== 'undefined' && document.body) {
    return createPortal(button, document.body);
  }

  return null;
};

export default BackToTop;