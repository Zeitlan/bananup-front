import React from 'react'
import styled from 'styled-components'
import Category from './category'
import { withContext } from '../../context'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

@withContext(['categories'],['getCategories'])
class CategoryListPreview extends React.Component {
    
  componentDidMount() {
    const { actions: { getCategories }} = this.props
    getCategories()
  }
  render() {
    const { state: {categories}} = this.props
    return (
        <Container>
            <TopRow>
                <CustomTitle>Catégories Populaires</CustomTitle>
                <More to="/categories">Voir plus..</More>
            </TopRow>
            <Grid container spacing={3}>
                {categories && categories.slice(0,4).map((category) => 
                  <Grid key={category.id} item sm={6} md={3}>
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
