
import gql from 'graphql-tag';


export const PREVIEW_CATEGORIES = gql`
  query GetCategoriesPreview {
    allCategories {
          id,
          name,
          imageUrl
    }
  }
`

