import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Update HTML class and localStorage
    if (isDarkMode) {
      // Add the `dark` class on the root (for Tailwind) and ensure body does not have `light`
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      // Remove `dark` and add `light` on the body so the project's light-mode CSS applies
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};