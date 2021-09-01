import React from 'react';
import FormContext from '../context/Form'

const Forms = ({ children }) => {
    const [forms, setForms] = React.useState([]);
    const [modal, setModal] = React.useState({});
    const [questionModal, setQuestionModal] = React.useState({})

    function add(form) {
        const newForms = [...forms, form]
        setForms(newForms)
    }

    function enableModal(key) {
        setModal({...modal,[key]:!modal[key]})
    }

    function enableQuestionModal(key){
        setQuestionModal({...questionModal, [key]:!questionModal[key]})
    }

    function addAnswers(answer, idForm){
        let ques = forms
        .find(form => idForm === form.id)
        .questions
        .map(questi => ({...questi, answer:answer[questi.id]})) 

        let formWithNewAnswers = ({...forms.find(form => idForm === form.id), questions:ques})
        
        const formIndex = forms.findIndex(form => form.id === idForm)

        const newForms = [...forms]
        
        newForms[formIndex] = formWithNewAnswers
        
        setForms(newForms)

    }

    function addQuestions(questions, id){
        let ques = forms
        .find(form => id === form.id)
        .questions

        let newQuestions = [...ques, questions]
        
        let newForm = ({...forms.find(form => id === form.id), questions:newQuestions})

        const formIndex = forms.findIndex(form => form.id = id)

        const newForms = [...forms]
        
        newForms[formIndex] = newForm

        console.log(newForm);
        
        setForms(newForms)

    }

    function calculatePonderado(){
        let pondForm = 0
        forms.map( form => {
            form.questions.map(question => {
                question.ponderadoQuestion = (question.answer/question.rank)*question.weight
                pondForm =  pondForm + (question.answer/question.rank*question.weight)
            })
            console.log('ponderadoForm: '+ pondForm);
            form.ponderadoForm = pondForm*form.weight/100
            pondForm = 0
        })

        console.log(forms);
    }

    return (
        <FormContext.Provider
            value={{
                state: { 
                    forms, 
                    modal,
                    questionModal
                },
                actions: { 
                    add, 
                    enableModal,
                    enableQuestionModal,
                    addAnswers,
                    addQuestions,
                    calculatePonderado
                }
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default Forms;