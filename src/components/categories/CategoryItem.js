import React from "react";
import CategoryContext from "../../context/Category";
import FormContext from "../../context/Form"
import { FormModal } from "../form/FormModal";
import { Link } from "react-router-dom";

export function CategoryItem({ category }) {

  const categoryContext = React.useContext(CategoryContext)
  const formContext = React.useContext(FormContext)

  const {projectId, id,  name, weight, description} = category;

  const openModal= () => {
    formContext.actions.enableModal(id)
  }

  return (
      <div class="card card-categories">
        <header class="card-header">
          <p class="card-header-title">
            {name}
          </p>

          <p onClick={openModal} class="card-header-title add-form">
            + Añadir formulario
          </p>
        </header>
        <div class="card-content">
          <div class="content">
              <strong>Descripción:</strong> {description}
              <br />
              <strong>Peso:</strong> {weight}
              <br />
              
              <Link to={"/projects/"+projectId+"/categories/"+id+"/forms"}>
                <strong>Formularios:</strong>
                <ol>
                {formContext.state.forms
                .filter((item) => item.categoryId === id)
                .map((item) => (
                    <li>{item.name}</li>
                ))}
                </ol>
              </Link>
          </div>
        </div>
      <FormModal category={category}/>
    </div>
  )
}