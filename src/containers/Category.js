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

    return (
        <CategoryContext.Provider
            value={{
                state: { 
                    categories, 
                    modal,
                },
                actions: { 
                    add, 
                    enableModal
                }
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export default Categories;