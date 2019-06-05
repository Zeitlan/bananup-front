import React from 'react'
import styled from 'styled-components'
import imgWoW from './wow-gameplay.jpg'
import PropTypes from 'prop-types'
class VideoPreview extends React.Component {
    
  render() {
    const { title, date, creator, game } = this.props
    return (
        <Container>
            <ImgContainer src={imgWoW}/>
            <VideoDescription>
              <div className={"video-information"}>
                <CustomCaption>
                  <div className={"video-title"}>{title}</div>
                  <div className={"video-subinfo"}>Le {date}</div>
                  <div className={"video-subinfo"}>Par {creator}</div>
                  <div className={"video-subinfo video-category"}> {game} </div>
                </CustomCaption>
              </div>
            </VideoDescription>
        </Container>
    )
  }
}

// PropTypes
VideoPreview.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired
}

// Styles
const Container = styled.div `
  flex: 0 1 20%;
  margin: auto;
  padding: 10px;
  max-width: 400px;
  min-width: 300px;
`

const VideoDescription= styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  width: 100%;
  .video-information{
    display: flex;
    flex-direction: column;
  }

`
const CustomCaption = styled.div`
  color: #969595;
  margin: 4px;
  font-size: 16px;

  .video-category{
    margin-top: auto;
  }
  .video-title {
    
  }
  .video-subinfo {
    color: #747373;
    font-size: 12px;
  }
`
const ImgContainer = styled.img`
    border-radius: 4%;
    max-width: 100%;
    max-height: 100%;
`
export default VideoPreview
