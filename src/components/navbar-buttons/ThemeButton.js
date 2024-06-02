import React, { useState } from 'react';
import './ThemeButton.scss';

const ThemeButton = ({ onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };

    return (
        <div className="toggle-switch-theme">
            <label className="switch-label-theme">
                <input 
                    type="checkbox" 
                    className="checkbox" 
                    checked={isChecked} 
                    onChange={handleToggle} 
                />
                <span className="slider"></span>
            </label>
        </div>  
    );
};

export default ThemeButton;
