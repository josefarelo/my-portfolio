import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';

const Navbar = ({ toggleTheme, toggleLanguage }) => {
    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className="navbar-links">
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
                <Link to="contact" smooth={true} duration={500}>
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
