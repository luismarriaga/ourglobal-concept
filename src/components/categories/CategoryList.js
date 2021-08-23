import React from 'react';
import CategoryContext from '../../context/Category';
import ProjectContext from '../../context/Project';
import { CategoryItem } from './CategoryItem';
import { useParams } from 'react-router-dom';
import "./Category.css"

export function CategoryList (){
    const { id } = useParams()
    const categoryContext = React.useContext(CategoryContext)
    const projectContext = React.useContext(ProjectContext)

    const project = projectContext.state.projects.filter(item => item.id === id)[0]

    return (
        <React.Fragment>   
            <strong> 
                <p className= 'category-title'>  CATEGORIAS - {project.title}</p>
            </strong>
            <br />
            <div className= "list-category">
            {categoryContext.state.categories
                .filter(item => item.projectId === id)
                .map((item) => (
                    <>
                    <CategoryItem key={item.id} category={item} /> 
                    <br/>
                    </>
                ))}
            </div>
        </React.Fragment>
      );
}