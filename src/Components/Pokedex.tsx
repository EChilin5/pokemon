import React, { useState, useEffect } from "react";
// import "./Pokedex.css";
import axios from "axios";

interface Pokemon {
  name: string;
  image: string;
  description: string;
}

const Pokedex = () => {
  const [index, setIndex] = useState<number>(0);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const liveUrl: string = "https://pokemon-backend-tjff.onrender.com";
  // const localURL: string = "http://localhost:1000";

  useEffect(() => {
    // fetch pokemon from database
    const getPokemon = async () => {
      try {
        const response = await axios.get(`${liveUrl}/api/pokemon/`);
        console.log(response.data.payload);
        setPokemon(response.data.payload);
        // console.log(pokemon);
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
      }
    };
    getPokemon();
  }, []);

  const playSound = ()=>{
      const poke = require("../sound/pokeball.mp3")
      const audio = new Audio(poke);
      audio.currentTime=1;
      audio.play();

  }

  // increment the value by 1 when moving to the next index
  // the index will reset to 0 when it reaches the
  // end of the list
  const onNext = () => {
    playSound();
    if (index >= pokemon.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
  };

  // decrement the index of the value by 1
  // the index will decrement by 1
  // if index reaches 0 then it will reset to
  // the end of the list
  const onPrev = () => {
    playSound();
    if (index === 0) {
      setIndex(pokemon.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="pokemon-container-backdrop">
      <div className="pokemon-container">
        <div className="pokemon-header">
          <div className="dots-row">
            <span className="dotA"></span>
            <div className="dot-sub">
              <span className="dotR"></span>
              <span className="dotY"></span>
              <span className="dotG"></span>
            </div>
          </div>
          <h4>{pokemon.length === 0 ? "" : pokemon[index].name}</h4>
        </div>
        <div className="pokemon-imageContainer">
        <div className="pokemonBox-boxline">
            <span className="dotR"></span> 
            <span className="dotR"></span> 
          </div>
          <img
            src={pokemon.length === 0 ? "" : pokemon[index].image}
            alt="pokemon"
            width={"250px"}
            height={"200px"}
          />
          <div className="pokemonBox-footer">
            <div className="pokemonBox-dot">
              <span className="dotRL"></span>
            </div>
            <div className="pokemonBox-stack">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>

            </div>
          </div>

        </div>
        <div className="pokemon-btn-section">
          <button
            id="btn-prev"
            className="poke-btn"
            onClick={() => {
              onPrev();
            }}
          >
            Previous
          </button>
          <button
            id="btn-next"
            className="poke-btn"
            onClick={() => {
              onNext();
            }}
          >
            Next
          </button>
        </div>

        <div className="pokemon-textbox">
          {pokemon.length === 0 ? "" : pokemon[index].description}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
