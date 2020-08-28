import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import './App.css';
import { Search } from './components/search/search.component.jsx';

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
    return (
      <div className='App'>
        <Search
          placeholder='Search Monster'
          handleChange={(e) => {
            this.setState({ searchText: e.target.value });
          }}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
