import React, { useState, useEffect } from "react";
import PokemonCover from "../Components/PokemonCover";
import PokemonCard from "../Components/PokemonCard";
import axios from "axios";

const Pokemon = () => {
  let test = [1, 2, 3, 4, 5, 6];
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [pokemon, setPokemon] = useState([]);
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

  // const pokemon = [
  //   {
  //     id: 0,
  //     name: "Bulbasaur",
  //     img: "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png",
  //     description: `Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.
  //       It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.`,
  //     color: "yellowgreen",
  //   },
  //   {
  //     id: 1,
  //     name: "Ivysaur ",
  //     img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png",
  //     description: `The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.`,
  //     color: "blue",
  //   },
  //   {
  //     id: 2,
  //     name: "Venusaur",
  //     img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",
  //     description: `While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.`,
  //     color: "brown",
  //   },
  //   {
  //     id: 3,
  //     name: "Charmander",
  //     img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
  //     description: `The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.`,
  //     color: "orange",
  //   },
  //   {
  //     id: 4,
  //     name: "Charmeleon",
  //     img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png",
  //     description: `When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents.`,
  //     color: "yellow",
  //   },
  //   {
  //     id: 5,
  //     name: "Charizard",
  //     img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png",
  //     description: `If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.`,
  //     color: "green",
  //   },
  // ];

  useEffect(() => {
    // fetch blogs from database
    const getPokemon = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/pokemon/");
        console.log(response.data.payload);
        setPokemon(response.data.payload);
        // console.log(pokemon);
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
      }
    };
    getPokemon();
  }, []);

  const onChangeIndex = (count) => {
    setIndex(count);
  };

  const onNext = () => {
    if (index >= pokemon.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
  };

  const onPrev = () => {
    if (index == 0) {
      setIndex(pokemon.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

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
      <div className="pokemon-grid">
        {filterPokemon()}
        {/* {pokemon.map((poke) => {
          return (
            <div className="pokemon-item">
              <PokemonCard pokemon={poke} updateIndex={onChangeIndex} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Pokemon;
