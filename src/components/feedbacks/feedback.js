/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import YouTubePlayer from '../video/youtube-player'
import CommentarySection from './commentary'
class FeedbackInterface extends React.Component {

  render() {
    return (
        <Container>
            <YouTubePlayer videoId={'rSdhGChBR_o'}/>
            <CommentarySection/>
        </Container>
    )
  }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 10px;
`

export default FeedbackInterface
