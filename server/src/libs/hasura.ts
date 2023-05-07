import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import { Config } from '../config';
import fetch from 'cross-fetch';

export const hasuraClient = new ApolloClient({
	link: new HttpLink({ uri: `http://localhost:8080/v1/graphql`, fetch: fetch }),
	cache: new InMemoryCache(),
  headers: {
    'x-hasura-access-key ': "XXXXXXXXXXXXXXXXXX",
    'content-type': 'application/json'
  },
});


export const hasuraHeaderConfig = {
  context: {
    headers: {
      'x-hasura-access-key': `${Config.hasuraAdminSecret}`,
      'content-type': 'application/json'
    }
  }
}