import React from 'react';
import FormContext from '../context/Form'

const Forms = ({ children }) => {
    const [forms, setForms] = React.useState([]);
    const [modal, setModal] = React.useState({});

    function add(form) {
        const newForms = [...forms, form]
        setForms(newForms)
    }

    function enableModal(key) {
        setModal({...modal,[key]:!modal[key]})
    }

    return (
        <FormContext.Provider
            value={{
                state: { 
                    forms, 
                    modal,
                },
                actions: { 
                    add, 
                    enableModal
                }
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default Forms;