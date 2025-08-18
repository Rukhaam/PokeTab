import React from "react";
import "../card/card.css";

export const Card = ({ pokemon, index }) => (
  <div className="card">
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
      alt={pokemon.name}
    />
    <h2>{pokemon.name}</h2>
    <h2>{pokemon.attack}</h2>
  </div>
);

