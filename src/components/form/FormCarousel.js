import React, { useContext } from 'react';
import FormContext from '../../context/Form';
import { useParams } from 'react-router-dom';
import { FormItem } from './FormItem';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Form.css"


export function FormCarousel() {
    const handleDragStart = (e) => e.preventDefault();
    const { categoryId } = useParams()
    const formContext = useContext(FormContext)
    
    const items = [
        <img alt="1" src="https://data.1freewallpapers.com/download/tree-alone-dark-evening-4k.jpg"
            onDragStart={handleDragStart}
            role="presentation" />,

        <img alt="2" src="https://fondosmil.com/fondo/17010.jpg"
            onDragStart={handleDragStart}
            role="presentation" />,

        <img alt="3" src="https://images3.alphacoders.com/954/thumb-1920-954241.jpg"
            onDragStart={handleDragStart}
            role="presentation" />,
    ];

    return (
        <React.Fragment> 
            {<AliceCarousel
                infinite
            >
                {formContext.state.forms
                .filter(form => form.categoryId === categoryId)
                .map((form) => (<FormItem form={form}/>))}
                

            </AliceCarousel>
            }
        </React.Fragment>


    )
}