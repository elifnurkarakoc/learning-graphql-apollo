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
    <div className="">
      <h2>{data.pokemon.name}</h2>
      <p>{data.pokemon.number}</p>
      <code>{JSON.stringify(data.pokemon)}</code>
    </div>
  );
};

export default PokemonDetails;
