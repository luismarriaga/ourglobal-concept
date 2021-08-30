import React, { useContext } from 'react';
import FormContext from '../../context/Form';
import { useParams } from 'react-router-dom';
import { FormItem } from './FormItem';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Form.css"


export function FormCarousel() {
    const { categoryId } = useParams()
    const formContext = useContext(FormContext)
    
    return (
        <React.Fragment> 
                {formContext.state.forms
                .filter(form => form.categoryId === categoryId)
                .map((form) => (<FormItem form={form}/>))}
            
        </React.Fragment>


    )
}