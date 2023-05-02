import React from "react";
import "./Project.css"
export default function Project({project, index}){
    return(
        <li className="project">
            <h1>{index}.</h1>
            <h1>{project.name}</h1> <br></br>
            <p>{project.desc}</p>
            <button className="website">
                <a>sd</a>
            </button>
            <button className="repo">
                <a>sd</a>
            </button>
        </li>
    )
}