import React from "react";
import "./Projects.css";
import ProjectsList from "./ProjectsList/ProjectsList";
import {projects} from "./ProjectsListArray";

export default function Projects({mode}){
    const handleClick=()=>{
        console.log(projects)
    }

    return(
        <div className={`projects page ${mode}`}>
            <div className="projects-container">
            <h1>Projects</h1>
                <div className="projects-list-container">
                    <ProjectsList projects={projects}/>
                </div>
                <button onClick={handleClick} className="see-more">See more</button>
            </div>
        </div>
    )
}