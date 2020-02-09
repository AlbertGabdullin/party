import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';

const cache = new InMemoryCache({});
export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache,
  resolvers,
  typeDefs,
});

cache.writeData({
  data: {
    party: {
      rick: {
        id: null,
        name: null,
        image: null,
        __typename: 'Character',
      },
      morty: {
        id: null,
        name: null,
        image: null,
        __typename: 'Character',
      },
      __typename: 'Party',
    },
  },
});
