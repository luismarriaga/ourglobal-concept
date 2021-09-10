import React from "react";
import CategoryContext from "../../context/Category";
import { v4 as uuidv4 } from "uuid";

export function CategoryModal({project}) {

    const categoryContext = React.useContext(CategoryContext)

    const nameRef = React.useRef();
    const weightRef = React.useRef(); 
    const descriptionRef = React.useRef(); 

    function onCancel (){
        categoryContext.actions.enableModal(project.id)
    }

    function onCreate(){
        const category = { 
            id: uuidv4(),
            projectId: project.id, 
            name: nameRef.current.value, 
            weight:weightRef.current.value, 
            description:descriptionRef.current.value,
            ponderadoCategory: 0
        }

        nameRef.current.value = null
        weightRef.current.value = null
        descriptionRef.current.value = null
        validateCreated(category)
        categoryContext.actions.enableModal(project.id)
    }

    function validateCreated(inputCategory) {
        ((categoryContext.state.categories.length === 1 && weightRef.current.value === "100") || validateCreatedPercent(inputCategory) ) ? alert("No se puede agregar")
        : categoryContext.actions.add(inputCategory)
    }


    const validateCreatedPercent = (inputCategory) => {
        debugger;
        if(categoryContext.state.categories.length >= 1){
            if(categoryContext.state.categories[0].weight === "100" || validateSumIsNotGreatherThan100(inputCategory)){
                return true;
            }
        }
        return false;
    }

    function validateSumIsNotGreatherThan100(inputCategory) {
        var totalSum = 0;
        categoryContext.state.categories
        .forEach(function (num) {
            totalSum += (+num.weight);
          });
        return totalSum + (+inputCategory.weight) > 100 ? true : false;
    }


    return (
        <div className= {categoryContext.state.modal[project.id] ? "modal is-active" : "modal" }>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Crear Categoría</p>
                    <button onClick={onCancel} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input className="input" ref={nameRef} type="text" placeholder="Escriba el nombre de la categoría..." />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Peso</label>
                        <div className="control">
                            <input className="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la categoría..." />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Descripción</label>
                        <div className="control">
                            <textarea className="textarea" ref={descriptionRef} placeholder="Escriba una descripción de la categoría..."></textarea>
                        </div>
                    </div>

                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={onCreate}>Crear </button>
                    <button onClick={onCancel} className="button">Cancelar</button>
                </footer>
            </div>
        </div>
    );
}