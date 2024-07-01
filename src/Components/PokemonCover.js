import React from "react";
import "./PokemonCover.css";

const PokemonCover = ({ pokemon }) => {
  return (
    <div className="pokemon-cover">
      <div>
        <h1 className="pokemon-name">{pokemon.name}</h1>
      </div>

      <div className="pokemon-cover-container">
        <div className="pokemon-cover-left">
          <img id="poke-cover-img" src={pokemon.image} alt="pokemon" />
        </div>
        <div className="pokemon-cover-right">{pokemon.description}</div>
      </div>
    </div>
  );
};

export default PokemonCover;
