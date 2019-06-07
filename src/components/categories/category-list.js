import React from 'react'
import styled from 'styled-components'
import Category from './category'
import { Grid } from '@material-ui/core'
class CategoryListPreview extends React.Component {
    
  render() {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Category title="World of Warcraft" nb_videos={10}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
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

export default CategoryListPreview
