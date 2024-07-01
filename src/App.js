import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Pokedex from "./Components/Pokedex";
import { useEffect, useState } from "react";
import NavBarRoutes from "./Components/NavBarRoutes";

function App() {
  const [pokemon, setPokemon] = useState([]);

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

  return (
    <div className="App">
      <NavBarRoutes />
    </div>
  );
}

export default App;
