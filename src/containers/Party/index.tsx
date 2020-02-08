import React from 'react';
import styled from 'styled-components';
import Person from '../../components/Person';
import { useQuery } from '@apollo/react-hooks';
import { GET_PARTY } from '../../queries';

const PartyContainer = styled.div`
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
`;

const PartyPersons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PartyHead = styled.div`
  font-size: 30px;
  line-height: 35px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  text-transform: uppercase;
`;

const Party = () => {
  const {
    data: {
      party: { rick, morty },
    },
  } = useQuery<any>(GET_PARTY);

  return (
    <PartyContainer>
      <PartyHead>Party</PartyHead>
      <PartyPersons>
        <Person id={rick.id} imgUrl={rick.image} isPersonType>
          Rick
        </Person>
        <Person id={morty.id} imgUrl={morty.image} isPersonType>
          Morty
        </Person>
      </PartyPersons>
    </PartyContainer>
  );
};

export default Party;
