import React from "react";
import CategoryContext from "../../context/Category";
import "./Project.css"
import { CategoryModal } from '../categories/CategoryModal';
import { Link } from "react-router-dom";


export function ProjectItem({ project }) {

  const categoryContext = React.useContext(CategoryContext)

  const {id, title, description, initialDate, projectLeader, client, teammates, ponderadoProjects} = project;

  const handleAddCategory = () => {
    categoryContext.actions.enableModal(id)
  }

  return (
    <div className="card project-card">
      <header className="card-header">
        <p className="card-header-title">
          {title} - {client} 
        </p>

        <p onClick={handleAddCategory} className="card-header-title add-form">
            + Añadir categoría
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {description}
          <br />
          <strong>Fecha inicial: </strong>
          <time >{initialDate}</time>

          <br />
          <strong>Lider del proyecto:</strong> {projectLeader}
          <br />
          
          <br />
          <strong>Integrantes:</strong>
          <ul> 
            {teammates.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <br />
          
          <strong>Categorías: </strong> {categoryContext.state.categories.length > 0 ? <></> : <p>Sin categories</p>}
          <Link to={"/projects/"+id+"/categories"}>
            <ul>
              {categoryContext.state.categories
                .filter(item => item.projectId === id)
                .map((item) => (
                  <>
                  <li>{item.name} </li>
                  <br/>
                  </>
                ))
                }
            </ul>
          </Link>

          <br />
          {ponderadoProjects != 0 
          ? <>
              <strong>Nivel de satisfaccíon:</strong> {ponderadoProjects}% 
            </> 
          : <> </>}
          
        </div>
      </div>
      <CategoryModal project={project} />
    </div>
  )
}