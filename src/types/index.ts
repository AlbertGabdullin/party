export interface Result {
  id: string;
  name: string;
  image: string;
}

export interface Characters {
  results: Result[] | null;
}

export interface CharactersQuery {
  characters: Characters | null;
}

export interface CharactersQueryVariables {
  filter?: FilterCharacter | null;
}

export interface FilterCharacter {
  name?: string | null;
  status?: string | null;
  species?: string | null;
  type?: string | null;
  gender?: string | null;
}

export interface PartyPersons {
  rick: Result;
  morty: Result;
}

export interface PartyQuery {
  party: PartyPersons;
}
