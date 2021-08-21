import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";

const uri = 'https://tanglass.hasura.app/v1/graphql';

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({}));

  const auth = setContext((operation, context) => {});

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const link = ApolloLink.from([basic, auth, errorLink, httpLink.create({ uri })]);
  const cache = new InMemoryCache();
  const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  };

  return {
    link,
    cache,
    defaultOptions,
  };
}

@NgModule({
  exports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class InfrastructureGraphqlModule {}
