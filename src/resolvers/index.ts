import { GET_PARTY } from '../queries';
import { PersonItem } from '../containers/Persons';

interface Person {
  id: number;
  name: string;
  image: string;
}

interface SetSearchValueType {
  person: PersonItem;
}

export const resolvers = {
  Mutation: {
    setPartyPerson: (
      _: any,
      { person }: SetSearchValueType,
      { cache }: any,
    ) => {
      const {
        party: { rick, morty },
      } = cache.readQuery({ query: GET_PARTY });

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
              : rick,
            morty: isMorty
              ? {
                  id: person.id,
                  name: person.name,
                  image: person.image,
                  __typename: 'Character',
                }
              : morty,
            __typename: 'Party',
          },
        },
      });
    },
  },
};
