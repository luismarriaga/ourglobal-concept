import React, { useContext, useEffect, useState } from 'react';
import {withStyles } from '@material-ui/styles';
import FormContext from '../../context/Form';
import CategoryContext from '../../context/Category'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./Form.css"
import { QuestionModal } from './QuestionModal';

const QuestionSlider = withStyles({
  root: {
    width: 500,
    color: '#52af77',
    height: 8,
  },
  rail: {
    height: 8,
    opacity: 0.5,
    backgroundColor: '#e74c3c',
    borderRadius: 4
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#e74c3c',
    border: '2px #e74c3c',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
    border: '2px solid #e74c3c',
    backgroundColor:'#e74c3c'
  },
  mark: {
    backgroundColor: '#FFFF',
    height: 2,
    width: 1,
    marginTop: -4,
  },
  markActive: {
    backgroundColor: '#FFFF',
  },
})(Slider)


export function FormItem({form}) {

    const {id, name, description, weight, questions, ponderadoForm } = form

    const [answer, setAnswer] = useState(questions.reduce((acumulator, actualValue) => ({...acumulator, [actualValue.id]:actualValue.answer}), {}))
    const formContext = useContext(FormContext)
    const categoryContext = useContext(CategoryContext)

    useEffect(()=>{
      categoryContext.actions.addPonderado(formContext.state.forms)
    }, [formContext.state.forms])

    const handlerFor = (id) => {
      return (event,value)=>{
        setAnswer({...answer,[id]:value})
      }
    };
    
    function handleFormAnswers(){
      formContext.actions.addAnswers(answer, id)
    }

    function handleOpenQuestionModal() {
      formContext.actions.enableQuestionModal(id)
    }

    return(
      <div className="card" style={{marginBottom:"2%"}}>
        <header className="card-header">
          <p className="card-header-title">
            {name}
          </p>
          
          <p onClick={handleOpenQuestionModal} className="card-header-title add-form">
            + Añadir pregunta
          </p>
        </header>
        <div className="card-content questions">
          <div className="content form-description">
               <p>{description}</p>
               <strong style={{fontSize:"80%" }}>Peso: {weight}</strong>
               {ponderadoForm != 0 &&
                  <>
                 <strong style={{fontSize:"80%" }}>Nivel de Satisfaccíon: {ponderadoForm}% </strong>
                 {ponderadoForm <= 40 
                 ? <progress class="progress is-danger" value={ponderadoForm} max="100"/>
                 : ponderadoForm <= 70 && ponderadoForm > 40 
                 ? <progress class="progress is-warning" value={ponderadoForm} max="100"/>
                : <progress class="progress is-success" value={ponderadoForm} max="100"/>}
                 </>}
          </div>
          <br /> 
          <div className="questions">
              {questions.map((question) => (
                <div>
                    <Typography id="discrete-slider-small-steps" gutterBottom>
                      <strong>{question.name}</strong>
                    </Typography>
                    <QuestionSlider
                      defaultValue={1}
                      aria-labelledby="discrete-slider-small-steps"
                      step={1}
                      marks
                      min={1}
                      max={question.rank}
                      valueLabelDisplay="auto"
                      onChange={handlerFor(question.id)}
                    />
                </div>
              ))}
          </div>
          <button class="button " onClick={handleFormAnswers}>Enviar formulario</button>
        </div>
        
        <QuestionModal form={form} />
      </div>
    )
}