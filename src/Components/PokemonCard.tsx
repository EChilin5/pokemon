import "./PokemonCard.css";
import React from "react";

interface PokemonInfo {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface PokemonContent {
  pokemonData: PokemonInfo;
  updateIndex: (id: number) => void;
}

const PokemonCard = (pokemon: PokemonContent) => {
  return (
    <div
      className="pokemoncard-container"
      onClick={() => pokemon.updateIndex(pokemon.pokemonData.id)}
    >
      <div>
        <img
          className="pokemoncard-img"
          src={pokemon.pokemonData.image}
          alt="pokemon"
        />
      </div>
      <div className="pokemoncard-title">{pokemon.pokemonData.name}</div>
    </div>
  );
};

export default PokemonCard;
