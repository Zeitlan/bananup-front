import ApolloClient from 'apollo-boost';
import appConfig from '../app-config';

const client = new ApolloClient({
  uri: appConfig.apiUrl + '/graphql',
});

export default client;