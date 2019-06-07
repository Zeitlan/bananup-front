import React from 'react'
import styled from 'styled-components'
import Category from './category'
import { Grid } from '@material-ui/core'
class CategoryListPreview extends React.Component {
    
  render() {
    return (
        <Container>
            <TopRow>
                <CustomTitle>Catégories Populaires</CustomTitle>
                <More href="...">Voir plus..</More>
            </TopRow>
            <Grid container spacing={3}>
                <Grid item sm={6} md={3}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item sm={6} md={3}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item sm={6} md={3}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item sm={6} md={3}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
            </Grid>
        </Container>
    )
  }
}

// PropTypes
CategoryListPreview.propTypes = {
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
const More = styled.a`
    margin: auto;
    margin-right: 0;
    text-decoration-style: none;
    color: #747373;
`

const CustomTitle = styled.h2`
    color: #969595;
`

export default CategoryListPreview
