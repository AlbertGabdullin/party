import gql from 'graphql-tag';

export const typeDefs = gql`
  directive @client on FIELD

  type Characters {
    info: Info
    results: [Character]
  }

  input GetCharactersInput {
    filter: FilterCharacter
    page: Int
  }

  input FilterCharacter {
    name: String
    status: String
    species: String
    type: String
    gender: String
  }

  type Character {
    id: ID
    name: String
    image: String
  }

  input SetPerson {
    id: ID
    name: String
    image: String
  }

  type Info {
    count: Int
    pages: Int
    next: Int
    prev: Int
  }

  type Party {
    rick: Character
    morty: Character
  }

  type Query {
    characters(filter: FilterCharacter): Characters
    party: Party
  }

  type Mutation {
    setPartyPerson(person: SetPerson): Character
  }
`;
