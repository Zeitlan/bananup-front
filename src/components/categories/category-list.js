import React from 'react'
import styled from 'styled-components'
import Category from './category'
import { Grid } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks';
import { PREVIEW_CATEGORIES } from '../../queries/categories'


function CategoryListPreview() {
  const { loading, error, data } = useQuery(PREVIEW_CATEGORIES);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
      <Container>
          <Grid container spacing={3}>
            {data.allCategories.results.sort((c1,c2) => c1.videoCount > c2.videoCount).map((category) => 
              <Grid key={category.id} item xs={6} sm={4} md={3} lg={2}>
                  <Category category={category}/>
              </Grid>)}
          </Grid>
      </Container>
  )
}

// Styles

const Container = styled.div`
    margin: auto;
`

export default CategoryListPreview
