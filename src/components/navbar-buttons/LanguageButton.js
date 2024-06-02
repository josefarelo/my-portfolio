import React, { useState } from 'react';
import spanishFlag from '../../assets/spainFlag.jpg';
import englishFlag from '../../assets/usaFlag.jpg';

const LanguageButton = ({ onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };

    return (
        <div className="toggle-switch-language">
        <button
            className="language-button"
            style={{
                backgroundImage: `url(${isChecked ? spanishFlag : englishFlag})`,
                width: '45px',
                height: '35px',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            onClick={handleToggle}
        />
        </div>
    );
};

export default LanguageButton;
