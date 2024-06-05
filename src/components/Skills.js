import React from 'react';
import './Skills.scss';
import htmlLogo from '../assets/html-logo.ico';
import cssLogo from '../assets/css-logo.ico';
import jsLogo from '../assets/java-script-logo.ico';
import reactLogo from '../assets/react-logo.ico';
import sassLogo from '../assets/sass-logo.ico';
import gitLogo from '../assets/git-logo.ico';
import nodeLogo from '../assets/node-logo.ico';
import sqlLogo from '../assets/sql-logo.ico';
import csharpLogo from '../assets/c-sharp-logo.ico';

const Skills = ({ translations }) => {
    return (
        <div className="skills">
            <div className='skills-title'>{translations.skillsTitle}</div>
            <div className='skills-container'>
                <div className="hard-skills">
                    <div className="skills-logos">
                        <img src={htmlLogo} alt="HTML" />
                        <img src={cssLogo} alt="CSS" />
                        <img src={jsLogo} alt="JavaScript" />
                        <img src={reactLogo} alt="React" />
                        <img src={sassLogo} alt="Sass" />
                        <img src={gitLogo} alt="Git" />
                        <img src={nodeLogo} alt="Node.js" />
                        <img src={sqlLogo} alt="SQL" />
                        <img src={csharpLogo} alt="C#" />
                    </div>
                </div>
                <div className="soft-skills">
                    <ul>
                        <li>{translations.softSkill1}</li>
                        <li>{translations.softSkill2}</li>
                        <li>{translations.softSkill3}</li>
                        <li>{translations.softSkill4}</li>
                        <li>{translations.softSkill5}</li>
                        <li>{translations.softSkill6}</li>
                        <li>{translations.softSkill7}</li>
                        <li>{translations.softSkill8}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;