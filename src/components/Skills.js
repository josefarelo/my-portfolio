import React from 'react';
import './Skills.scss';

const Skills = ({ translations }) => {
    return (
        <div className="skills">
            <h2>{translations.skillsTitle}</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>Sass</li>
                <li>SQL & NoSQL</li>
            </ul>
        </div>
    );
};

export default Skills;
