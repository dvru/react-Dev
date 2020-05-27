import React from 'react';
import './card-list.styles.css';

export const Cardlist = props => (
    <div className='card-list'>
         {props.plants.map(plant => (
            <h1 key={plant.id}> {plant.name} </h1>
         ))}
    </div>
) 