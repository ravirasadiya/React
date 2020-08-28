import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => {
        this.setState({ monsters: res });
      });
  }

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(monsters);
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='Search Monster'
          onChange={(e) => {
            this.setState({ searchText: e.target.value });
          }}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
