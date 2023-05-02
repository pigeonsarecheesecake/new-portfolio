import React from "react";
import "./Home.css";
import ToggleButton from "../ToggleButton/ToggleButton";

export default function Home({onToggle, mode, logo}){
    return(
        <div className={`home page ${mode}`}>
            {/* Logo */}
            <div className="logo-container">
                {logo}
            </div>

            {/* Intro */}
            <h1>Hello <br></br> I'm William Ryuputra</h1>
            <h2>Front-end developer <br></br>UI/UX Designer</h2>

            {/* Mode Toggle */}
            <ToggleButton onToggle={onToggle} mode={mode}/>
        </div>
    )
}