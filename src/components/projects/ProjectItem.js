import React from "react";
import CategoryContext from "../../context/Category";
import "./Project.css"
import { CategoryModal } from '../categories/CategoryModal';
import { Link } from "react-router-dom";


export function ProjectItem({ project }) {

  const categoryContext = React.useContext(CategoryContext)

  const {id, title, description, initialDate, projectLeader, client, teammates} = project;

  const handleAddCategory = () => {
    categoryContext.actions.enableModal(id)
  }

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {title} - {client}
        </p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="false"></i>
          </span>
        </button>
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
            {teammates.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <br />

          <Link to={"/projects/"+id+"/categories"}>
          <strong>Categorías: </strong>
          <div>
            {categoryContext.state.categories
              .filter(item => item.projectId === id)
              .map((item2) => (
                <>
                {item2.name}, 
                <br/>
                </>
              ))
              }
          </div>
          </Link>

        </div>
      </div>
      <footer className="card-footer">
        <button onClick={handleAddCategory} class="button" className="card-footer-item">Agregar categoría</button>
      </footer> 
      <CategoryModal project={project} />
    </div>
  )
}