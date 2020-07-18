import React, { Component } from 'react';

import { CardList } from './components/card-lists/card-list.component';
import { SearchBox } from './components/searchbox/searchbox.component';

import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField : ''
    };
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      console.log(users);
      this.setState({monsters: users})
    })
  };

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  };

  render() {

    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1 className="apptitle">Test React App</h1>
        <div className="tpa-container">
          <SearchBox 
              placeholder = "Search Monster"
              handleChange={this.handleChange}
          />
          <CardList monsters ={filteredMonsters} />
        </div>
      </div>
    );
  }
}


export default App;
