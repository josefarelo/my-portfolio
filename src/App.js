import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './App.scss';
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
      <Projects language={language} translations={translations[language]} />
    </div>
  );
};

export default App;
