import React from "react";
import { useQuery } from "@apollo/client";
import { POKEMONS_QUERY } from "./queries";
import Pokemon from "../Pokemon";
const Pokemons = () => {
  const { loading, error, data } = useQuery(POKEMONS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="container">
      <h2 className=" pokemons-title">Pokemons</h2>
      <div className="pokemons">
        <div className="pokemons-list">
          {data.pokemons.map((pokemon, key) => (
            <Pokemon pokemon={pokemon} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
