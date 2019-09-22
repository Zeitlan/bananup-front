import React from 'react'
import styled from 'styled-components'
import Category from './category'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'


class CategoryListPreview extends React.Component {
    
  componentDidMount() {
      const { actions: { getCategories }} = this.props
      getCategories()
  }
    
  render() {
    const { state: {categories}} = this.props
    return (
        <Container>
            <Grid container spacing={3}>
              {categories && categories.map((category) => 
              <Grid key={category.id} item xs={6} sm={4} md={3} lg={2}>
                  <Category category={category}/>
              </Grid>)}
            </Grid>
        </Container>
    )
  }
}

// PropTypes
CategoryListPreview.propTypes = {
    actions: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
}

// Styles

const Container = styled.div`
    margin: auto;
`

export default CategoryListPreview
