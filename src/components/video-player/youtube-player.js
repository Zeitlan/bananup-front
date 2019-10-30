/* eslint-disable no-console */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'


function YouTubePlayer(props) {

  const { videoId, setYtPlayer } = props
  
  return (
      <Container>
          <CustomPlayer
          videoId={videoId}
          id="player"
          opts={{
              playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
              controls: 1,
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
              showinfo: 1,
              mute: 1,
              autohide: 1
              }}}
          onReady = {(event) => {
            if (setYtPlayer)
              setYtPlayer(event.target)
          }}
          className={props.className}/>
      </Container>
  )
}

// PropTypes
YouTubePlayer.propTypes = {
    videoId: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    setYtPlayer: PropTypes.func.isRequired,
}

// Styles
const CustomPlayer = styled(YouTube)`
`
const Container = styled.div`
`
export default YouTubePlayer