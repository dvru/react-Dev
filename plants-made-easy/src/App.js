import React from 'react';

import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends React.Component { 

  
  constructor() {
    super();
    
    this.state = {
      plants: [],
      searchField: ''
    }
    this.handleChange = this.handleChange.bind(this);
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


handleChange(e) {
  this.setState({ searchField: e.target.value })
}

// rendering each component
  render(){ // using jsx syntax
    const { plants, searchField } = this.state;
    const filterdPlants = plants.filter( plant => 
      plant.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <SearchBox
        placeholder='search plants'
        handleChange={this.handleChange}
      />
      <Cardlist plants={filterdPlants}/>
      </div>
    )
  }
}
export default App;
