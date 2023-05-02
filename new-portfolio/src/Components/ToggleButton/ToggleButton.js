import React from "react";
import './ToggleButton.css'

export default function ToggleButton({mode, onToggle}){
    if (mode === "light"){
        return(
            <button className={`toggle-container`} onClick={onToggle}>
                

            </button>
        )
    } 

    return(
        <button className={`toggle-container`} onClick={onToggle}>
            {mode}
        </button>
    )
}