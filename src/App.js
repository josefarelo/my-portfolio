import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import en from './translations/en.json';
import es from './translations/es.json';

const translations = { en, es };

const App = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('es');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} toggleLanguage={toggleLanguage} />
      <section name="about" className="section">
        <About translations={translations[language]} />
      </section>
      <section name="skills" className="section">
        <Skills translations={translations[language]} />
      </section>
      <section name="projects" className="section">
        <Projects translations={translations[language]} />
      </section>
      <section name="contact" className="section">
        <Contact translations={translations[language]} />
      </section>
    </div>
  );
};

export default App;
