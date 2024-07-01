import React, { useState, useEffect } from "react";
import PokemonCover from "../Components/PokemonCover";
import PokemonCard from "../Components/PokemonCard";
import axios from "axios";

const Pokemon = () => {
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  // blank content will only be shown when
  // it's waiting for the api to render
  const blank = [
    {
      id: 0,
      name: "Bulbasaur",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png",
      description: `Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.
        It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.`,
      color: "yellowgreen",
    },
  ];

  useEffect(() => {
    // fetch pokemon from database
    const getPokemon = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/pokemon/");
        // stores the response.data.payload into the blog useState
        console.log(response.data.payload);
        setPokemon(response.data.payload);
        // console.log(pokemon);
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
      }
    };
    getPokemon();
  }, []);

  // onChangeIndex
  // will update the index every time a user clicks
  // on the pokemon cards in the pokemon list views
  // to update the pokemon cover
  const onChangeIndex = (count) => {
    setIndex(count);
  };

  //  onNext
  // increment the value by 1 when moving to the next index
  // the index will reset to 0 when it reaches the
  // end of the list
  const onNext = () => {
    if (index >= pokemon.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
  };

  // onPrev
  // decrement the index of the value by 1
  // the index will decrement by 1
  // if index reaches 0 then it will reset to
  // the end of the list
  const onPrev = () => {
    if (index === 0) {
      setIndex(pokemon.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  // filter Pokemon
  // based on the type of text the user enters in the
  // textbox.
  // based on the context entered it will updated the card list
  const filterPokemon = () => {
    let filter = pokemon.filter((poke) => poke.name.includes(search));

    return filter.map((poke) => {
      return (
        <div className="pokemon-item">
          <PokemonCard pokemon={poke} updateIndex={onChangeIndex} />
        </div>
      );
    });
  };

  return (
    <div>
      <div>
        <button id="btnPrev" onClick={() => onPrev()}>
          Previous
        </button>
        <button id="btnNext" onClick={() => onNext()}>
          Next
        </button>
      </div>
      <div>
        <PokemonCover
          pokemon={pokemon.length === 0 ? blank[0] : pokemon[index]}
        />
      </div>
      <div className="search-box">
        <input
          className="search-text"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="pokemon-grid">{filterPokemon()}</div>
    </div>
  );
};

export default Pokemon;
