import React from "react";
import CategoryContext from "../../context/Category";



export function CategoryItem({ category }) {

  const categoryContext = React.useContext(CategoryContext)

  const {projectId, name, weight, description} = category;

  return (
    <div className="card-categories">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {name} 
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {description}
          <br />
        </div>
      </div>
      <footer class="card-footer">
        <button class="button" className="card-footer-item">Agregar formulario</button>
      </footer> 
    </div>
    </div>
  )
}