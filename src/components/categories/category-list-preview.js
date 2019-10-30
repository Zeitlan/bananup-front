import React from 'react'
import styled from 'styled-components'
import Category from './category'
import { Grid } from '@material-ui/core'
import { Link } from '@reach/router'
import { useQuery } from '@apollo/react-hooks';
import { PREVIEW_CATEGORIES } from '../../queries/categories'

// TODO: Remove sort from data, add orderby back
function CategoryListPreview()  {
  const { loading, error, data } = useQuery(PREVIEW_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
      <Container>
          <TopRow>
              <CustomTitle>Popular Categories</CustomTitle>
              <More to="/categories">More..</More>
          </TopRow>
          <Grid container spacing={3}>
              {data.allCategories.results.sort((c1,c2) =>  c2.videoCount - c1.videoCount).slice(0,6).map((category) => 
                <Grid key={category.id} item xs={6} sm={4} md={2}>
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
const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
`
const More = styled(Link)`
    margin: auto;
    margin-right: 0;
    text-decoration-style: none;
    color: #747373;
`

const CustomTitle = styled.h2`
    color: #969595;
`

export default CategoryListPreview
