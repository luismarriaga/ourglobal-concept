import React from "react";
import FormContext from "../../context/Form"
import { FormModal } from "../form/FormModal";
import { Link } from "react-router-dom";

export function CategoryItem({ category }) {

  const formContext = React.useContext(FormContext)

  const {projectId, id,  name, weight, description} = category;

  const openModal= () => {
    formContext.actions.enableModal(id)
  }

  return (
      <div className="card card-categories">
        <header className="card-header">
          <p className="card-header-title">
            {name}
          </p>

          <p onClick={openModal} className="card-header-title add-form">
            + Añadir formulario
          </p>
        </header>
        <div className="card-content">
          <div className="content">
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