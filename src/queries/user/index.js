import gql from 'graphql-tag';


export const SIGNUP_MUTATION = gql`
  mutation RegisterMutation($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        username
      }
      errors {
        messages
        field
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
      errors {
        messages
        field
      }
    }
  }
`