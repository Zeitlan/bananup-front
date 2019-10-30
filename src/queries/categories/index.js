
import gql from 'graphql-tag';


export const PREVIEW_CATEGORIES = gql`
  query GetCategoriesPreview {
    allCategories {
      results {
          id,
          name,
          imageUrl,
          videoCount,
        }
    }
  }
`

export const ALL_CATEGORIES = gql`
  query GetAllCategories {
    allCategories {
      results {
        id,
        name,
        videoCount,
      }
    }
  }
`

export const GET_VIDEO_CATEGORY = gql`
  query VideoCategory($id: ID!){
    category (id: $id) {
      name,
      imageUrl
      videos {
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