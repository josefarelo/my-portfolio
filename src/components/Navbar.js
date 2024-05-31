import React from 'react';
import './Navbar.scss';

const Navbar = ({ toggleTheme, toggleLanguage }) => {
    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className="navbar-actions">
                <button onClick={toggleTheme}>Toggle Theme</button>
                <button onClick={toggleLanguage}>Toggle Language</button>
            </div>
        </nav>
    );
};

export default Navbar;
