
import gql from 'graphql-tag';


export const GET_VIDEO_INFO = gql`
  query Video($id: ID!) {
    video(id: $id) {
      id,
      name,
      createdAt,
      author {
        username
      }
      category {
        name
      }
      link
    }
  }
`


export const GET_VIDEO_COMMENTS = gql`
  query Video($id: ID!) {
    video(id: $id) {
      id,
      comments {
        id,
        author {
          username
        },
        text,
        numVoteUp,
        numVoteDown,
        voteScore,
        videoTime
      }
    }
  }
`

export const VIDEO_PREVIEW = gql`
  query GetVideoPreview
  {
    allVideos
    {
      results {
        id,
        name,
        createdAt,
        author {
          username
        }
        category {
          name
        }
        link
      }
    }
  }
`

export const ADD_VIDEO = gql`
  mutation AddVideo($input: VideoMutationInput!)
  {
    mutateVideo(input: $input)
    {
      clientMutationId,
      video
      {
        id
      }
    }
  }
`