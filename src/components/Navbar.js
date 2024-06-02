import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';
import ThemeButton from './navbar-buttons/ThemeButton.js';
import LanguageButton from './navbar-buttons/LanguageButton.js';

const Navbar = ({ toggleTheme, toggleLanguage, language }) => {
    return (
        <nav className="navbar">
            <h1>José Farelo</h1>
            <div className="navbar-links">
                <Link to="about" smooth={true} duration={600}>
                    {language === 'es' ? 'Conoceme' : 'About'}
                </Link>
                <Link to="skills" smooth={true} duration={600}>
                    {language === 'es' ? 'Habilidades' : 'Skills'}
                </Link>
                <Link to="projects" smooth={true} duration={600}>
                    {language === 'es' ? 'Proyectos' : 'Projects'}
                </Link>
                <Link to="contact" smooth={true} duration={600}>
                    {language === 'es' ? 'Contacto' : 'Contact'}
                </Link>
            </div>
            <div className="navbar-actions">
                <ThemeButton onChange={toggleTheme} />
                <LanguageButton onChange={toggleLanguage} />
            </div>
        </nav>
    );
};

export default Navbar;
