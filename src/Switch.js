import React, { useState, useEffect } from "react";


export default function Switch(){
    // 
    const [isNightMode, setIsNightMode] = useState(false);

    useEffect(() => {
        // Check whether to show dark mode based on the current time
        const d = new Date();
        const hours = d.getHours();
        const night = hours >= 19 || hours <= 7;
        setIsNightMode(night);
    }, []);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsNightMode((prevMode) => !prevMode);
    };

    // Apply or remove dark mode class to the body
    useEffect(() => {
        const body = document.querySelector("body");
        if (isNightMode) {
        body.classList.add("night");
        } else {
        body.classList.remove("night");
        }
    }, [isNightMode]);

    return(
        <div className="switch-wrapper">
            <div className="sun"></div>
            <div className="toggle-wrapper">
                <input id="switch" type="checkbox"  checked={isNightMode} onChange={toggleDarkMode}/>
                <label htmlFor="switch" id="toggle">
                Toggle
                </label>
            </div>
            <div className="moon"></div>
        </div>
    )
}