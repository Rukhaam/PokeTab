import React, { Component } from "react";

import { CardList } from "./components/cardlist/card-listcomponent.jsx";
import { SearchBox } from "./components/search-box/search-box.jsx";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => response.json())
      .then((data) =>{this.setState({ pokemons: data.results })
        console.log(data);
        
    } );
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { pokemons, searchField } = this.state; // this.state.monster = monster //
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Poke Tab</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList pokemons={filteredPokemons} />
      </div>
    );
  }
}

export default App;
