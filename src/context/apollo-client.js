import { ApolloClient } from 'apollo-client';
import appConfig from '../app-config';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';


const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: appConfig.apiUrl + '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Token ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {}
});

cache.writeData({
  data: {
    ytPlayer: undefined,
    user: undefined,
    comments: undefined,
    videoId: undefined,
  }
})

export default client;