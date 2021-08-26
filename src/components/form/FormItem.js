import React, { useContext, useState } from 'react';
import {withStyles } from '@material-ui/styles';
import FormContext from '../../context/Form';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./Form.css"

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

    const {id, name, description, questions } = form

    const [answer, setAnswer] = useState(questions.reduce((acumulator, actualValue) => ({...acumulator, [actualValue.id]:actualValue.answer}), {}))
    const formContext = useContext(FormContext)

    const handlerFor = (id) => {
      return (event,value)=>{
        setAnswer({...answer,[id]:value})
      }
    };
    
    function handleFormAnswers(){
      formContext.actions.addAnswers(answer, id)
    }
    function holamundo(){
      console.log(formContext.state.forms.find(fo => fo.id === id))
    }

    return(
        <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {name}
          </p>
          
          <p  className="card-header-title add-form">
            + Añadir pregunta
          </p>
        </header>
        <div className="card-content questions">
          <div className="content">
               {description}
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
          
          <button class="button question-button" onClick={handleFormAnswers}>Enviar formulario</button>
          <button class="button question-button" onClick={holamundo}>Te veo</button>
        </div>
    </div>
    )
}