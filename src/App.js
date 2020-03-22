import React, { Component } from 'react';
import './App.css';
import Monster from './monsters.json'
import { Header } from './components/Header'
import { SearchCard } from './components/SearchCard';
import { Cards } from './components/Cards'
import { CardList } from './components/card-list/card-list.component'
import  { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) =>  {
    this.setState({ searchField: e.target.value})
  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value})
  // }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div> 
    )
  }  
}

export default App;
