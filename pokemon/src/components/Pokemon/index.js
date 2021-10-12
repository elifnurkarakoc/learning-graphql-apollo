import React from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
  return (
    <>
      {" "}
      <Link to={{ pathname: `/${pokemon.id}` }}>
        <div className="pokemon">
        <p className="pokemon-name">{pokemon.name}</p>
          <img src={pokemon.image} className="pokemon-img" alt="" />
          
        </div>
      </Link>
    </>
  );
};

export default Pokemon;
