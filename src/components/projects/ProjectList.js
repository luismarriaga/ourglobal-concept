import React from "react";
import { ProjectItem } from "./ProjectItem";
import ProjectContext from "../context/Project";
import "./Project.css"

export function ProjectList() {

  const projectContext = React.useContext(ProjectContext);

  return (
    <React.Fragment>   
        <strong> 
            <p className= 'project-title'>  PROYECTOS </p>
        </strong>
        <br />
        <br />
        <ul>
        {projectContext.state.projects.map((item) => (
            <>
            <ProjectItem key={item.id} project={item} /> 
            <br/>
            </>
        ))}
        </ul>
    </React.Fragment>
  );
}