import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
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

  useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} toggleLanguage={toggleLanguage} />
      <Element name="about" className="section">
        <About translations={translations[language]} />
      </Element>
      <Element name="skills" className="section">
        <Skills translations={translations[language]} />
      </Element>
      <Element name="projects" className="section">
        <Projects translations={translations[language]} />
      </Element>
      <Element name="contact" className="section">
        <Contact translations={translations[language]} />
      </Element>
    </div>
  );
};

export default App;
