import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

// list of cards
export const Cardlist = props => (
    <div className='card-list'>
         {props.plants.map(plant => (
            <Card key={plant.id} plant={plant}/>
         ))}
    </div>
) 