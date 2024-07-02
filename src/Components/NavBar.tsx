import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="home-dashboard">
          <h1>Chilinmon Pokemon </h1>
          <div className="home-content">
            <Link to="/" className="btn-view-blog">
              Pokedex
            </Link>

            <Link to="/blogs" className="btn-add-blog">
              All Pokemon
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
