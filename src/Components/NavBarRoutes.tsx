import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

import Pokedex from "./Pokedex";
import Pokemon from "../pages/Pokemon";
const NavBarRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="blogs" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavBarRoutes;
