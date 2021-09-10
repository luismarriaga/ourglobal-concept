import React from 'react';
import CategoryContext from '../context/Category'

const Categories = ({ children }) => {
    const [categories, setCategories] = React.useState([]);
    const [modal, setModal] = React.useState({});

    function add(category) {
        const newCategories = [...categories, category]
        setCategories(newCategories)
    }

    function enableModal(key) {
        setModal({...modal,[key]:!modal[key]})
    }

    function addPonderado(forms){
        categories.map(cat =>{
            
            let acomuladoForm = 0
            forms.filter(form => form.categoryId === cat.id)
            .map(form => {
                acomuladoForm = acomuladoForm + (form.ponderadoForm * form.weight / 100)
            })
            cat.ponderadoCategory = acomuladoForm
        }) 
    }

    return (
        <CategoryContext.Provider
            value={{
                state: { 
                    categories, 
                    modal,
                },
                actions: { 
                    add, 
                    enableModal,
                    addPonderado
                }
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export default Categories;