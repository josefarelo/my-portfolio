import React from 'react';
import './Projects.scss';
import medicarVideo from '../assets/medicar-video.mp4';
import portfolioImg from '../assets/portfolio-img.jpg';
import laBatataImg from '../assets/la-batata.png';

const Projects = ({translations }) => {

    const handleFullScreen = (e) => {
        if (e.requestFullscreen) {
            e.requestFullscreen();
        } else if (e.mozRequestFullScreen) { // Firefox
            e.mozRequestFullScreen();
        } else if (e.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            e.webkitRequestFullscreen();
        } else if (e.msRequestFullscreen) { // IE/Edge
            e.msRequestFullscreen();
        }
    };

    return (
        <section className="projects">
            <h2>{translations.projects}</h2>
            <div className="project-list">
                <div className="project-card">
                    <h3>{translations.projectMedicar}</h3>
                    <video
                        width="100%"
                        className="project-video"
                        controls
                        onClick={(e) => handleFullScreen(e.target)}
                    >
                        <source src={medicarVideo} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <p>{translations.medicarDescription}</p>
                    <p className='project-tools'>{translations.medicarTools}</p>
                    <a href="https://github.com/josefarelo/proyecto-cartilla-medica" target="_blank" rel="noopener noreferrer">
                        {translations.projectRepoLink}
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
                    <p className='project-tools'>{translations.portfolioTools}</p>
                    <a href="https://github.com/josefarelo/mi-portfolio" target="_blank" rel="noopener noreferrer">
                        {translations.projectRepoLink}
                    </a>
                </div>


                <div className="project-card">
                    <h3>{translations.projectLaBatata}</h3>
                    <img 
                        src={laBatataImg}
                        alt='Project' 
                        className='project-img'
                    />
                    <p>{translations.laBatataDescription}</p>
                    <p className='project-tools'>{translations.laBatataTools}</p>
                    <a href="https://github.com/josefarelo/la-batata" target="_blank" rel="noopener noreferrer">
                        {translations.projectRepoLink}
                    </a>
                    <a href="https://josefarelo.github.io/la-batata/" target="_blank" rel="noopener noreferrer">
                        {translations.projectLink}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

