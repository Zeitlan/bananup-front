import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
class YouTubePlayer extends React.Component {
    
  render() {
    const { videoId } = this.props
    return (
        <Container>
            <CustomPlayer
            videoId={videoId}
            opts={{
                playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                iv_load_policy: 3,
                nologo: 1,
                playsinline: 1,
                enablejsapi: 1,
                html5: 1,
                fs: 0,
                loop: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                mute: 1,
                autohide: 1
                }}}
            onReady={this._onReady}/>
        </Container>
    )
  }
}

// PropTypes
YouTubePlayer.propTypes = {
    videoId: PropTypes.string.isRequired
}

// Styles
const CustomPlayer = styled(YouTube)`
`
const Container = styled.div`
`
export default YouTubePlayer