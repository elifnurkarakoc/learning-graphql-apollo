import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { POKEMON_QUERY } from "./queries";
const PokemonDetails = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(POKEMON_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log({ data });
  return (
    <div className="container">
      <h2 className="pokemons-title">{data.pokemon.name}</h2>
      <div className="pokemon-details">
      
      <p className="text"><strong>ID: </strong> {data.pokemon.id}</p>
      <p className="text"><strong>Number: </strong>  {data.pokemon.number}</p>
      <p className="text"><strong>Name: </strong> {data.pokemon.name}</p>

      <img src={data.pokemon.image} className="pokemon-img" alt="" />
      </div>
      {/* <code>{JSON.stringify(data.pokemon)}</code> */}
    </div>
  );
};

export default PokemonDetails;
