import React from "react";
import "./Project.css"
export default function Project({project, index}){
    return(
        <li className="project">
            <h2>{index}.</h2>
            <h2>{project.name}</h2> <br></br>
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