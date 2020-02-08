import gql from 'graphql-tag';

export const GET_PARTY = gql`
  query {
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
  query($filter: FilterCharacter) {
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
  mutation($person: Person) {
    setPartyPerson(person: $person) @client
  }
`;
