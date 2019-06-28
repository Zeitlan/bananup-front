import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import VideoPreview from './video-preview'
import { Grid } from '@material-ui/core'
class VideoList extends React.Component {
  render() {
        const { videos } = this.props
        return (
            <Container>
                <Grid container spacing={3}>
                    {videos.map((video) => {
                        return (
                            <Grid  key={video.id} item sm={12} md={6} lg={3}>
                                <VideoPreview video={video}/>
                            </Grid>)
                    })}
                </Grid>
            </Container>
        )
  }
}

// PropTypes
VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

// Styles

const Container = styled.div`
    
`
export default VideoList
