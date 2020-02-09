import React, { useCallback } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { GET_PERSONS, SET_PARTY_PERSON } from '../../queries';
import Person from '../../components/Person';
import {
  CharactersQuery,
  CharactersQueryVariables,
  Result,
  Result as ResultItem,
} from '../../types';

const PersonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;

const Loading = styled.div`
  text-align: center;
  padding: 10px 0;
`;

const Error = styled.div`
  text-align: center;
  padding: 10px 0;
  color: red;
`;

interface Persons {
  value: string;
  removed: Array<number | string>;
  onRemove: (id: string | number) => void;
}

const Persons = ({ value, onRemove, removed }: Persons): JSX.Element | null => {
  const { data, loading, error } = useQuery<
    CharactersQuery,
    CharactersQueryVariables
  >(GET_PERSONS, {
    variables: {
      filter: {
        name: value,
      },
    },
  });

  const [setPartyPerson] = useMutation(SET_PARTY_PERSON);
  const setPerson = useCallback(
    (person: Result | undefined) => {
      if (person) {
        setPartyPerson({
          variables: {
            person: person,
          },
        });
      }
    },
    [setPartyPerson],
  );

  if (error) return <Error>¯\_(ツ)_/¯ - Ooops. Something went wrong!</Error>;

  const results = data?.characters?.results;
  const filteredByRemoved: ResultItem[] | undefined = results?.filter(
    item =>
      !removed.some(removedItem => removedItem === item?.id) && item !== null,
  );

  return loading ? (
    <Loading>Loading...</Loading>
  ) : (
    <PersonsContainer>
      {filteredByRemoved &&
        filteredByRemoved.map((item: ResultItem) => (
          <Person
            key={item?.id}
            imgUrl={item?.image}
            onRemove={(): void => onRemove(item?.id)}
            setPerson={(): void => setPerson(item)}
            person={item}
          />
        ))}
    </PersonsContainer>
  );
};

export default Persons;
