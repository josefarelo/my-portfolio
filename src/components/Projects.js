import React from 'react';
import './Projects.scss';
import medicarImg from '../assets/medicar-img.jpg';
import portfolioImg from '../assets/portfolio-img.jpg';

const Projects = ({translations }) => {
    return (
        <section className="projects">
            <h2>{translations.projects}</h2>
            <div className="project-list">
                <div className="project-card">
                    <h3>{translations.projectMedicar}</h3>
                    <img 
                        src={medicarImg}
                        alt='Project' 
                        className='project-img'
                    />
                    <p>{translations.medicarDescription}</p>
                    <a href="https://github.com/josefarelo/proyecto-cartilla-medica" target="_blank" rel="noopener noreferrer">
                        {translations.projectLink}
                    </a>
                </div>
                <div className="project-card">
                    <h3>{translations.projectPortfolio}</h3>
                    <img 
                        src={portfolioImg}
                        alt='Project' 
                        className='project-img'
                    />
                    <p>{translations.portfolioDescription}</p>
                    <a href="https://github.com/josefarelo/mi-portfolio" target="_blank" rel="noopener noreferrer">
                        {translations.projectLink}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

