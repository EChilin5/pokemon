import React, { useState, useEffect } from "react";
import "./Pokedex.css";
import axios from "axios";

const Pokedex = () => {
  const [index, setIndex] = useState(0);
  const [pokemon, setPokemon] = useState([]);
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

  return (
    <div>
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
          <select name="cars" id="cars">
            <option value="volvo">Charmander</option>
            <option value="saab">Charmeleon</option>
            <option value="mercedes">Charzard</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        {/* <div className="pokemon-heading">
          <div>{pokemon[0].name}</div>
        </div> */}

        <div className="pokemon-imageContainer">
          <img
            src={pokemon.length === 0 ? "" : pokemon[index].image}
            alt="pokemon"
            width={"250px"}
            height={"200px"}
          />
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
