import React from 'react';
import './Contact.scss';

const Contact = ({ translations }) => {
    return (
        <div className="contact">
            <h2>{translations.contactTitle}</h2>
            <form>
                <input type="text" placeholder={translations.contactName} />
                <input type="email" placeholder={translations.contactEmail} />
                <textarea placeholder={translations.contactMessage}></textarea>
                <button type="submit">{translations.contactSend}</button>
            </form>
        </div>
    );
};

export default Contact;
