import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

class VideoPreview extends React.Component {
    
  render() {
    const { name, created_at, author, category, link } = this.props.video
    return (
        <Container>
            <Link to={"/video/"+link}>
              <ImgContainer src={"https://img.youtube.com/vi/" + link + "/0.jpg"}/>
            </Link>
            <VideoDescription>
              <div className={"video-information"}>
                <CustomCaption>
                  <div className={"video-title"}>{name}</div>
                  <div className={"video-subinfo"}>Le {created_at}</div>
                  <div className={"video-subinfo"}>Par {author}</div>
                  <div className={"video-subinfo video-category"}> {category} </div>
                </CustomCaption>
              </div>
            </VideoDescription>
        </Container>
    )
  }
}

// PropTypes
VideoPreview.propTypes = {
  video: PropTypes.object.isRequired
}

// Styles
const Container = styled.div `
  flex: 0 1 20%;
  margin: auto;
  padding: 10px;
  max-width: 400px;
  min-width: 250px;
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
