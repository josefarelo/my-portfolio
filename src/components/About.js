import React from 'react';
import './About.scss';

const About = ({ translations }) => {
    return (
        <div className='about'>
            <div className='about-description'>
                <h2 className='about-title'>{translations.aboutTitle}</h2>
                <div className='about-text'>
                    <p>{translations.aboutDescription1}</p>
                    <p>{translations.aboutDescription2}</p>
                    <p>{translations.aboutDescription3}</p>
                    <p>{translations.aboutDescription4}</p>
                </div>
            </div>
            <div className='about-img-container' />
        </div>
    );
};

export default About;
