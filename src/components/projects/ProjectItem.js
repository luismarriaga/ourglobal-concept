
import React, { useEffect,useContext,useState } from "react";
import CategoryContext from "../../context/Category";
import "./Project.css"
import { CategoryModal } from '../categories/CategoryModal';
import { Link } from "react-router-dom";
import ProjectContext from "../../context/Project";


export function ProjectItem({ project }) {

  const categoryContext = React.useContext(CategoryContext)
  const [showLinks, setShowLinks] = useState(true);
  const projectContext = useContext(ProjectContext)

  const {id, title, description, initialDate, projectLeader, client, teammates, ponderadoProjects} = project;

  useEffect(()=>{
    console.log(showLinks)
    setShowLinks(validateShowLinks())
    projectContext.actions.changePonderado(categoryContext.state.categories)
  }, [categoryContext.state.categories])

  const handleAddCategory = () => {
    categoryContext.actions.enableModal(id)
  }

  const validateShowLinks = () => {
    var showItemsLinks = true;
    if (categoryContext.state.categories.length > 1) {
     var fullWeight = categoryContext.state.categories
     .reduce(function (accumulator, current) {
      return (+accumulator.weight) + (+current.weight);
      })
      showItemsLinks = fullWeight === 100 ? true : false;
    }else if(categoryContext.state.categories.length === 1){
      showItemsLinks = true;
    }
    return showItemsLinks;
                  
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
          
          <strong>Categorías: </strong> 
          {categoryContext.state.categories.length > 0 ? <> </> 
          : <p>Sin categories</p>
          }
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
          <strong>{showLinks ? <> <p>Aparezco</p> </> : <> </> } </strong>
          
          <br />
          {ponderadoProjects !== 0
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