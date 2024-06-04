import React, { useState } from 'react';
import './Contact.scss';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';

const Contact = ({ translations }) => {
    const [copied, setCopied] = useState(false);
    const email = 'jose.farelo@hotmail.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="contact">
            <h2>{translations.contactTitle}</h2>
            <div className="contact-info">
                <span onClick={copyToClipboard} className="email">
                    {email}
                </span>
                {copied && <div className="popup">"{translations.contactCopy}"</div>}
                <a href="https://ar.linkedin.com/in/josefarelo" target="_blank" rel="noopener noreferrer" className="icon-container">
                    <img src={linkedinLogo} alt="LinkedIn" className="icon" />
                </a>
                <a href="https://github.com/josefarelo" target="_blank" rel="noopener noreferrer" className="icon-container">
                    <img src={githubLogo} alt="GitHub" className="icon" />
                </a>
            </div>
        </div>
    );
};

export default Contact;

