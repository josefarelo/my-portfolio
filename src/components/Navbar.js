import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';

const Navbar = ({ toggleTheme, toggleLanguage }) => {
    return (
        <nav className="navbar">
            <h1>José Farelo</h1>
            <div className="navbar-links">
                <Link to="about" smooth={true} duration={600}>
                About
                </Link>
                <Link to="skills" smooth={true} duration={600}>
                Skills
                </Link>
                <Link to="projects" smooth={true} duration={600}>
                Projects
                </Link>
                <Link to="contact" smooth={true} duration={600}>
                Contact
                </Link>
            </div>
            <div className="navbar-actions">
                <button onClick={toggleTheme}>Toggle Theme</button>
                <button onClick={toggleLanguage}>Toggle Language</button>
            </div>
        </nav>
    );
};

export default Navbar;

