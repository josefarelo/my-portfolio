import React from 'react';
import './About.scss';

const About = ({ translations }) => {
    return (
        <div className="about">
            <h2>{translations.aboutTitle}</h2>
            <p>{translations.aboutDescription}</p>
        </div>
    );
};

export default About;
