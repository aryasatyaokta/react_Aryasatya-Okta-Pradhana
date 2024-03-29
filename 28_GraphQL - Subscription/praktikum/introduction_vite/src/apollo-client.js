import { ApolloClient, InMemoryCache } from '@apollo/client';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://decent-toucan-69.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':'OYZ1ZcugULZ0OGvGRwof7PbZPjK2SggYiJI91Hwv6N8NK9JeWyUL2IU7Lb87fjsV'
  }
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://decent-toucan-69.hasura.app/v1/graphql',
  options:{
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret':'OYZ1ZcugULZ0OGvGRwof7PbZPjK2SggYiJI91Hwv6N8NK9JeWyUL2IU7Lb87fjsV'
      }
    }
  }
}));

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

export default client