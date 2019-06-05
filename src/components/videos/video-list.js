import React from 'react'
import styled from 'styled-components'
import VideoPreview from './video-preview'
import { Grid } from '@material-ui/core'
class VideoList extends React.Component {
    
  render() {
    return (
        <Container>
            <CustomTitle>Vidéos du moment</CustomTitle>

            <Grid container spacing={3}>
                <Grid item sm={12} md={6} lg={3}>
                    <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                </Grid>
                <Grid item sm={12} md={6} lg={3}>
                    <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                </Grid>
                <Grid item sm={12} md={6} lg={3}>
                    <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                </Grid>
                <Grid item sm={12} md={6} lg={3}>
                    <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                </Grid>
                <Grid item sm={12} md={6} lg={3}>
                    <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                </Grid>
                <Grid item sm={12} md={6} lg={3}>
                    <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                </Grid>
                <Grid item sm={12} md={6} lg={3}>
                    <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                </Grid>
                <Grid item sm={12} md={6} lg={3}>
                    <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                </Grid>
                <Grid item sm={12} md={6} lg={3}>
                    <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                </Grid>
            </Grid>
        </Container>
    )
  }
}

// PropTypes
VideoList.propTypes = {
}

// Styles

const Container = styled.div`
    
`

const CustomTitle = styled.h2`
    color: #969595;
`

export default VideoList
