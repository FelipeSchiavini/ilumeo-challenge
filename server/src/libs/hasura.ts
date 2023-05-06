import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';

export const hasuraClient = new ApolloClient({
	link: new HttpLink({ uri: 'http://localhost:8080/v1/graphql', fetch: fetch }),
	cache: new InMemoryCache(),
	headers: { 'Content-Type': 'application/json' },
});
