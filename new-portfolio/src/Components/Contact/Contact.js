import React from "react";
import "./Contact.css";

export default function Contact({mode}){
    return (
        <div className={`contact page ${mode}`} id="contact-page">
            <div className="section-a"></div>
            <div className="section-b"></div>
            <div className="section-c"></div>
            <div className="section-d"></div>
            <div className="main-content">
                <h2>Let's Connect!</h2>
                <div className="contact-info">
                    <p>williamryuputra12@gmail.com</p>
                    <p>475-287-1807</p>
                </div>
            </div>
        </div>
    )
}