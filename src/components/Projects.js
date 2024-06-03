import React from 'react';
import './Projects.scss';

const Projects = ({translations }) => {
    return (
        <section className="projects">
            <h2>{translations.projects}</h2>
            <div className="project-list">
                <div className="project-card">
                    <img src="project-image.jpg" alt="Project" />
                    <h3>{translations.projectName}</h3>
                    <p>{translations.projectDescription}</p>
                    <a href="project-link" target="_blank" rel="noopener noreferrer">
                        {translations.projectLink}
                    </a>
                </div>
                {/* Añade más proyectos aquí */}
            </div>
        </section>
    );
};

export default Projects;

