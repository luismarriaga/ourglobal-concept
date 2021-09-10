import React, {useEffect} from "react";
import FormContext from "../../context/Form"
import { FormModal } from "../form/FormModal";
import { Link } from "react-router-dom";
import ProjectContext from "../../context/Project";
import CategoryContext from "../../context/Category";

export function CategoryItem({ category }) {

  const formContext = React.useContext(FormContext)
  const projectContext = React.useContext(ProjectContext)
  const categoryContext = React.useContext(CategoryContext)

  const {projectId, id,  name, weight, description, ponderadoCategory} = category;

  const openModal= () => {
    formContext.actions.enableModal(id)
  }

  useEffect(()=>{
    projectContext.actions.changePonderado(categoryContext.state.categories)
  }, [categoryContext.state.categories])

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

              <br />
              {ponderadoCategory != 0 &&
                  <>
                 <strong style={{fontSize:"80%" }}>Nivel de satisfaccíon: {ponderadoCategory}% </strong>
                 {ponderadoCategory <= 40 
                 ? <progress class="progress is-danger" value={ponderadoCategory} max="100"/>
                 : ponderadoCategory <= 70 && ponderadoCategory > 40 
                 ? <progress class="progress is-warning" value={ponderadoCategory} max="100"/>
                : <progress class="progress is-success" value={ponderadoCategory} max="100"/>}
                 </>}
          </div> 
        </div>
      <FormModal category={category}/>
    </div>
  )
}