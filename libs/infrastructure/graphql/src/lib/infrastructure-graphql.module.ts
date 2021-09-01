import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink, split } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ToastService } from '@TanglassTheme/services/toast.service';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { OperationDefinitionNode } from 'graphql';

const uri = 'https://tanglass.hasura.app/v1/graphql';

export function createApollo(httpLink: HttpLink, toastService: ToastService) {
  const basic = setContext((operation, context) => ({}));

  const auth = setContext((operation, context) => {});

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach((error) => {
        console.warn('error', error.extensions?.internal?.error?.message);
        toastService.showToast(
          'error',
          'Erreur',
          error.extensions?.internal?.error?.message || error.message
        );
      });

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
      toastService.showToast('error', 'Erreur', 'Network error');
    }
  });

  // Create a WebSocket link:
  const ws = new WebSocketLink({
    uri: `wss://tanglass.hasura.app/v1/graphql`,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          Accept: 'charset=utf-8',
          'X-Hasura-Admin-Secret': 'FlwyZiGEYCCjwUXPOnK1nNvfEqKuFWvv',
        },
      },
    },
  });

  const link2 = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = <OperationDefinitionNode>(
        getMainDefinition(query)
      );
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    ws,
    httpLink.create({ uri })
  );

  const link = ApolloLink.from([basic, auth, errorLink, link2]);
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          notification_notification: {
            merge: false
          },
        },
      },
      Subscription: {
        fields: {
          notification_notification: {
            merge: false
          },
        },
      },
    },
  });
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
      deps: [HttpLink, ToastService],
    },
  ],
})
export class InfrastructureGraphqlModule {}
