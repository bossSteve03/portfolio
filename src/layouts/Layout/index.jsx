import React, { createContext, useContext, useState, useEffect } from 'react';
import Nav from '../nav';
import Footer from '../Footer';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function Layout({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-[var(--header-height)]">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
