import { MockedProvider } from '@apollo/react-testing';
import { GET_PARTY } from '../../queries';

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

