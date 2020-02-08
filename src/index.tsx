import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { resolvers } from './resolvers';

const cache = new InMemoryCache({});

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache,
  resolvers,
});

cache.writeData({
  data: {
    party: {
      rick: {
        id: '',
        name: '',
        image: '',
        __typename: 'Character',
      },
      morty: {
        id: '',
        name: '',
        image: '',
        __typename: 'Character',
      },
      __typename: 'Party',
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
