import gql from 'graphql-tag';

export const GET_PARTY = gql`
  query PartyQuery {
    party @client {
      rick {
        id
        name
        image
      }
      morty {
        id
        name
        image
      }
    }
  }
`;

export const GET_PERSONS = gql`
  query CharactersQuery($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const SET_PARTY_PERSON = gql`
  mutation SetPartyPersonMutation($person: SetPerson) {
    setPartyPerson(person: $person) @client
  }
`;
