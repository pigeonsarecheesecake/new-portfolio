import React from "react";
import "./ProjectsList.css";
import Project from "../Project/Project";
import { projects } from "../ProjectsObject/ProjectsObject";

export default function ProjectsList(){
    const projectsList = projects.map((project,index)=>{
        return <Project project={project} key={index} index={index+1}/>
    })
    return(
        <ul className={`projects-list`}>
            {projectsList}
        </ul>
    )
}