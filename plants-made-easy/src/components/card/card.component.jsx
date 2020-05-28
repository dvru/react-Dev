import React from 'react';
import './card.styles.css';

// individual cards
export const Card = (props) => (
    <div className='card-container'>
        <h2> {props.plant.name} </h2>
        <img alt="plant" src={props.plant.img} />
        <p> {props.plant.description} </p>
    </div>
)