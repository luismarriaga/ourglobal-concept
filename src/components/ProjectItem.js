import React from "react";
import ProjectContext from "../context/Project";
import "./Project.css"

export function ProjectItem({ project }) {

  const projectContext = React.useContext(ProjectContext);
    
  const {id, title, description, initialDate, projectLeader, client, image } = project;

  return (
    <div className='custom-card-container'>
        <div className='custom-card-image'> 

        </div>
        <div className='custom-card-content'>
            <div className='custom-card-description'> 
                <p>{title}</p>
                <h1>{client}</h1>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}