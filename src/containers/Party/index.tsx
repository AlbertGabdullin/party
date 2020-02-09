import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import Person from '../../components/Person';
import { GET_PARTY } from '../../queries';
import { PartyQuery } from '../../types';

const PartyContainer = styled.div`
  max-width: 390px;
  padding-top: 100px;
  width: 100%;
  margin: 0 auto;
`;

const PartyPersons = styled.div`
  display: flex;
  justify-content: center;
`;

const PartyHead = styled.div`
  font-size: 30px;
  line-height: 35px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  text-transform: uppercase;
`;

const Party: React.FC = () => {
  const { data } = useQuery<PartyQuery>(GET_PARTY);
  const rick = data?.party?.rick;
  const morty = data?.party?.morty;
  return (
    <PartyContainer>
      <PartyHead>Party</PartyHead>
      <PartyPersons>
        <Person id={rick?.id} imgUrl={rick?.image} isPersonType>
          Rick
        </Person>
        <Person id={morty?.id} imgUrl={morty?.image} isPersonType>
          Morty
        </Person>
      </PartyPersons>
    </PartyContainer>
  );
};

export default Party;
