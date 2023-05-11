import React from "react";
import "./Contact.css";
import Socials from "../Socials/Socials";

export default function Contact({mode}){
    return (
        <div className={`contact page ${mode}`} id="contact-page">
            {/* Lines design */}
            <div className="section-a"></div>
            <div className="section-b"></div>
            <div className="section-c"></div>
            <div className="section-d"></div>
            {/* Main content */}
            <div className="main-content">
                <h2>Let's Connect!</h2>
                <div className="contact-info">
                    <Socials mode={mode}/>
                </div>
            </div>
        </div>
    )
}