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
      <Cardlist plants={this.state.plants}>
     
      </Cardlist>
      </div>
    )
  }
}
export default App;
