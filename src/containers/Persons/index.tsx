import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { GET_PERSONS } from '../../queries';
import Person from '../../components/Person';

const PersonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;

interface Persons {
  value: string;
  removed: Array<number | string>;
  onRemove: (id: string | number) => void;
}

export interface PersonItem {
  id: number;
  name: string;
  image: string;
}

const Persons = ({ value, onRemove, removed }: Persons) => {
  const { data, loading, error } = useQuery(GET_PERSONS, {
    variables: {
      filter: {
        name: value,
      },
    },
  });

  if (loading) return null;
  if (error) return null;

  const {
    characters: { results },
  } = data;

  return (
    <PersonsContainer>
      {results
        ? results
            .filter(
              (item: PersonItem) =>
                !removed.some(removedItem => removedItem === item.id),
            )
            .map((item: PersonItem) => (
              <Person
                id={item.id}
                key={item.id}
                imgUrl={item.image}
                onRemove={(): void => onRemove(item.id)}
                person={item}
              />
            ))
        : null}
    </PersonsContainer>
  );
};

export default Persons;
