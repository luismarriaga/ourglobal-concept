import React from 'react';
import CategoryContext from '../../context/Category';
import { CategoryItem } from './CategoryItem';
import "./Category.css"

export function CategoryList (){

    const categoryContext = React.useContext(CategoryContext)

    return (
        <React.Fragment>   
            <strong> 
                <p className= 'category-title'>  CATEGORIAS </p>
            </strong>
            <br />
            <br />
            <div className="list-category">
            {categoryContext.state.categories.map((item) => (
                <>
                <CategoryItem key={item.id} category={item} /> 
                <br/>
                </>
            ))}
            </div>
        </React.Fragment>
      );
}