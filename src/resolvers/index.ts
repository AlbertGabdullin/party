import { GET_PARTY } from '../queries';
import { ApolloCache } from 'apollo-cache';
import { PartyQuery, Result } from '../types';

export const resolvers = {
  Mutation: {
    setPartyPerson: (
      _: any,
      { person }: { person: Result },
      { cache }: { cache: ApolloCache<any> },
    ) => {
      const data = cache.readQuery<PartyQuery>({ query: GET_PARTY });
      const isRick = person.name.toLowerCase().includes('rick');
      const isMorty = person.name.toLowerCase().includes('morty');

      cache.writeData({
        data: {
          party: {
            rick: isRick
              ? {
                  id: person.id,
                  name: person.name,
                  image: person.image,
                  __typename: 'Character',
                }
              : data?.party?.rick,
            morty: isMorty
              ? {
                  id: person.id,
                  name: person.name,
                  image: person.image,
                  __typename: 'Character',
                }
              : data?.party?.morty,
            __typename: 'Party',
          },
        },
      });

      return person;
    },
  },
};
