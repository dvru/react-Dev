import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component { 

  constructor() {
    super();
    
    this.state = {
      plants: [
        {
          name: 'Primrose',
          id: 'pl1'
        },
        {
          name: 'Poppies',
          id: 'pl2'
        },
        {
          name: 'Lavender',
          id: 'pl3'
        },
      ]
    };
  }


  render(){ // using jsx syntax
    return (
      <div className="App">
       {
         this.state.plants.map(plant => (
           <h1 key={plant.id}> {plant.name} </h1>
         ))}
      </div>
    )
  }
}
export default App;
