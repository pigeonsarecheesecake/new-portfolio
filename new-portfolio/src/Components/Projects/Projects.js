import React from "react";
import "./Projects.css";
import ProjectsList from "./ProjectsList/ProjectsList";
import {projects} from "./ProjectsListArray";

export default function Projects({mode}){

    return(
        <div className={`projects page ${mode}`}>
            <div className="projects-container">
                <h1>Projects</h1>
                <ProjectsList projects={projects}/>
            </div>
        </div>
    )
}