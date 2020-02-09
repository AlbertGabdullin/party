import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { GET_PARTY } from '../../queries';
import { mount } from 'enzyme';
import Party from './index';
import Person from '../../components/Person';

const mocksWithEmptyParty = [
  {
    request: {
      query: GET_PARTY,
    },
    result: {
      data: {
        party: {
          rick: {
            id: null,
            name: null,
            image: null,
          },
          morty: {
            id: null,
            name: null,
            image: null,
          },
        },
      },
    },
  },
];

const mocks = [
  {
    request: {
      query: GET_PARTY,
    },
    result: {
      data: {
        party: {
          rick: {
            id: '1',
            name: 'Rick Sanchez',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          },
          morty: {
            id: '2',
            name: 'Morty Smith',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          },
        },
      },
    },
  },
];

describe('test renders', () => {
  test('with empty party should be renderer without errors', () => {
    const party = mount(
      <MockedProvider mocks={mocksWithEmptyParty}>
        <Party />
      </MockedProvider>,
    );
    expect(party.find(Person).length).toEqual(2);
  });

  test('with real data should be renderer without errors', () => {
    const party = mount(
      <MockedProvider mocks={mocks}>
        <Party />
      </MockedProvider>,
    );
    expect(party.find(Person).length).toEqual(2);
  });
});
