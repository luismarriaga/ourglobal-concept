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
        console.log(forms);
        forms.map(form => {
            
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