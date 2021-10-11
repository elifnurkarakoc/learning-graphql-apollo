import { gql } from "@apollo/client";

export const POKEMON_QUERY = gql`
  query pokemon($id: String!) {
    pokemon(id: $id) {
      id
      number
      name
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }

      types
      resistant
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
      }
      evolutionRequirements {
        amount
        name
      }

      image
      maxHP
    }
  }
`;
