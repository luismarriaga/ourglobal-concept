import React from "react";
import CategoryContext from "../../context/Category";
import "./Project.css"
import { CategoryModal } from '../categories/CategoryModal';
import { Link } from "react-router-dom";


export function ProjectItem({ project }) {

  const categoryContext = React.useContext(CategoryContext)

  const {id, title, description, initialDate, projectLeader, client } = project;

  const handleAddCategory = () => {
    categoryContext.actions.enableModal(id)
  }

  return (
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {title} - {client}
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="false"></i>
          </span>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          {description}
          <br />
          <strong>Fecha inicial: </strong>
          <time >{initialDate}</time>

          <br />
          <strong>Lider del proyecto:</strong> {projectLeader}
          <br />
          <Link to="/categories">
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
      <footer class="card-footer">
        <button onClick={handleAddCategory} class="button" className="card-footer-item">Agregar categoría</button>
      </footer> 
      <CategoryModal project={project} />
    </div>
  )
}