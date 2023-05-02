import React from "react";
import "./ProjectsList.css";
import Project from "../Project/Project";

export default function ProjectsList({projects}){
    const projectsComponents = projects.map((project, i) =>{
        return <Project project={project} key={i} index={i}/>
    })
    return(
        <ul className="projects-list">
            {projectsComponents}
        </ul>
    )
}