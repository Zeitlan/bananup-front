import gql from 'graphql-tag';

export const GET_YT_PLAYER = gql`
  {
    ytPlayer @client
  }
`;
