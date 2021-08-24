import React from "react";
import CategoryContext from "../../context/Category";
import FormContext from "../../context/Form"
import { FormModal } from "../form/FormModal";

export function CategoryItem({ category }) {

  const categoryContext = React.useContext(CategoryContext)
  const formContext = React.useContext(FormContext)

  const {projectId, id,  name, weight, description} = category;

  const openModal= () => {
    formContext.actions.enableModal(id)
  }

  return (
    <div className="card-categories">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {name} - {id}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
              <strong>Descripción:</strong> {description}
              <br />
              <strong>Peso:</strong> {weight}
              <br />
          </div>
        </div>
        <footer class="card-footer">
          <button class="button" onClick={openModal} className="card-footer-item">Agregar formulario</button>
        </footer> 
      </div>
      <FormModal category={category}/>
    </div>
  )
}