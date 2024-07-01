import { useState } from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, updateIndex }) => {
  return (
    <div
      className="pokemoncard-container"
      onClick={() => updateIndex(pokemon.id)}
    >
      <div>
        <img className="pokemoncard-img" src={pokemon.image} alt="pokemon" />
      </div>
      <div className="pokemoncard-title">{pokemon.name}</div>
    </div>
  );
};

export default PokemonCard;
