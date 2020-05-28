import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';


class App extends React.Component { 

  
  constructor() {
    super();
    
    this.state = {
      plants: [],
      searchField: ''
    };
  }
  

  //fetching all plants from json
  componentDidMount(){
  fetch("http://localhost:3001/plants", {
  })
    .then(response => response.json())
    .then(plants => this.setState({ plants: plants}))
  .catch(err => {
    console.log(err)
  })
}



// rendering each component
  render(){ // using jsx syntax
    return (
      <div className="App">
      <input 
        type='search' 
        placeholder='search plants' 
        onChange={e => this.setState({ searchField: e.target.value })}
      />
      <Cardlist plants={this.state.plants}></Cardlist>
      </div>
    )
  }
}
export default App;
