import React from "react";
import CategoryContext from "../context/Category";
import "./Project.css"
import { CategoryModal } from './CategoryModal';


export function CategoryItem({ project }) {

  const categoryContext = React.useContext(CategoryContext)

  return (
    <div>
      <CategoryModal project={project} />
    </div>
  )
}