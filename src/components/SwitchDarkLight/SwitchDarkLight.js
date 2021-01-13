import React, { useState, useEffect } from 'react'
import './SwitchDarkLight.scss';

function SwitchDarkLight() {

    const [darkMode, setDarkMode] = useState(getInitialMode());
    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode));
        document.body.classList.add(darkMode ? 'dark-mode' : 'light-mode');
        document.body.classList.remove(darkMode ? 'light-mode' : 'dark-mode');
    },[darkMode])

    function getInitialMode() {
        const isReturningUser = 'dark' in localStorage;
        const saveMode = JSON.parse(localStorage.getItem('dark'));
        const userPrefersDark = getPrefColorScheme();
        if(isReturningUser) {
            return saveMode;
        } else if (userPrefersDark) {
            return true;
        } else {
            return false
        }
    }

    function getPrefColorScheme() {
        if(!window.matchMedia) return 
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return (
        <label className="toggle">
            <span className="onoff">{darkMode ? "Dark Mode" : "Light Mode"}</span>
            <input checked={darkMode} type="checkbox" id="checkbox" onChange={() => setDarkMode(prevMode => !prevMode)}/>
            <span className="slider round"></span>
        </label>
    )
}

export default SwitchDarkLight
