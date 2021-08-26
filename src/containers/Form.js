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

    function addAnswers(answer, idForm){
        let ques = forms
        .find(form => idForm === form.id)
        .questions
        .map(questi => ({...questi, answer:answer[questi.id]})) 

        let newForm = ({...forms.find(form => idForm === form.id), questions:ques})
        let formCopy = [...forms]


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
                    enableModal,
                    addAnswers
                }
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default Forms;