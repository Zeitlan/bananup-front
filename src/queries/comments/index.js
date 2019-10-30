import gql from 'graphql-tag'

export const ADD_COMMENT = gql `
  mutation addComment($input: CommentMutationInput!)
  {
    mutateComment(input: $input)
    {
      clientMutationId,
      comment
      {
        id
      }
    }
  }
`

export const ADD_VOTE = gql `
  mutation AddVote($input: VoteInput)
  {
    commentVote(input: $input)
    {
      comment
      {
        id,
        voteScore
      }
    }
  }
`