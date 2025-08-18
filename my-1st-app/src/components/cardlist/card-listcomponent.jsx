import React from 'react';

import { Card } from '../card/card';

import '../cardlist/card-listcomponent.css';


export const CardList = ({ pokemons }) => (
  <div className="card-list">
    {pokemons.map((pokemon, index) => (
      <Card key={index} pokemon={pokemon} index={index} />
    ))}
  </div>
);
