
import gql from 'graphql-tag'

export const PREVIEW_COMMENTARIES = gql`
  query GetVideoComments($videoId: Int)
  {
    video(id: $videoId){
      comments{
        id,
        voteScore,
        text,
        createdAt,
        author {
          username
        },
        videoTime
      }
    }
  }
`