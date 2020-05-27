import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';


class App extends React.Component { 

  
  constructor() {
    super();
    
    this.state = {
      plants: []
    };
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(plants => this.setState({ plants: plants}));
  }

  render(){ // using jsx syntax
    return (
      <div className="App">
      <Cardlist name="Damini">
      {this.state.plants.map(plant => (
            <h1 key={plant.id}> {plant.name} </h1>
         ))}
      </Cardlist>
      </div>
    )
  }
}
export default App;
