import React, { useState, useEffect } from "react";
import PokemonCover from "../Components/PokemonCover";
import PokemonCard from "../Components/PokemonCard";
import axios from "axios";

interface PokemonContent {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Pokemon = () => {
  const [search, setSearch] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [pokemon, setPokemon] = useState<PokemonContent[]>([]);
  const liveUrl: string = "https://pokemon-backend-tjff.onrender.com";
  // const localURL: string = "http://localhost:1000";
  // blank content will only be shown when
  // it's waiting for the api to render
  const blank: PokemonContent[] = [
    {
      id: 0,
      name: "Bulbasaur",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png",
      description: `Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.
        It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.`,
    },
  ];

  useEffect(() => {
    // fetch pokemon from database
    const getPokemon = async () => {
      try {
        const response = await axios.get(`${liveUrl}/api/pokemon/`);
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
  const onChangeIndex = (count: number) => {
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
          <PokemonCard pokemonData={poke} updateIndex={onChangeIndex} />
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
