import React from "react";
// import "./PokemonCover.css";

interface PokemonInfo {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface PokemonObject {
  pokemon: PokemonInfo;
}

const PokemonCover = (pokemon: PokemonObject) => {
  return (
    <div className="pokemon-cover">
      <div>
        <h1 className="pokemon-name">{pokemon.pokemon.name}</h1>
      </div>

      <div className="pokemon-cover-container">
        <div className="pokemon-cover-left">
          <img id="poke-cover-img" src={pokemon.pokemon.image} alt="pokemon" />
        </div>
        <div className="pokemon-cover-right">{pokemon.pokemon.description}</div>
      </div>
    </div>
  );
};

export default PokemonCover;
