import React from 'react'
import styled from 'styled-components'
import VideoList from './video-list'

class VideoListPreview extends React.Component {

    state = {
        videos: [
            {
                author: 2,
                category: 1,
                created_at: "2019-06-27T19:52:51.676926Z",
                id: 1,
                link: "iE2wwzM0p68",
                name: "World of Warcraft",
                url: "http://127.0.0.1:8000/videos/1/",
                views: 0
            },
            {
                author: 2,
                category: 1,
                created_at: "2019-06-27T19:52:51.676926Z",
                id: 1,
                link: "iE2wwzM0p68",
                name: "World of Warcraft",
                url: "http://127.0.0.1:8000/videos/1/",
                views: 0
            },
            {
                author: 2,
                category: 1,
                created_at: "2019-06-27T19:52:51.676926Z",
                id: 1,
                link: "iE2wwzM0p68",
                name: "World of Warcraft",
                url: "http://127.0.0.1:8000/videos/1/",
                views: 0
            },
            {
                author: 2,
                category: 1,
                created_at: "2019-06-27T19:52:51.676926Z",
                id: 1,
                link: "iE2wwzM0p68",
                name: "World of Warcraft",
                url: "http://127.0.0.1:8000/videos/1/",
                views: 0
            },
        ]
    }
  render() {
    return (
        <Container>
            <TopRow>
                <CustomTitle>Vidéos Populaires</CustomTitle>
                <More href="...">Voir plus..</More>
            </TopRow>
            <VideoList videos={this.state.videos} title={'ocucou'}/>
        </Container>
    )
  }
}

// PropTypes
VideoListPreview.propTypes = {
}

// Styles

const Container = styled.div`
    
`

const CustomTitle = styled.h2`
    color: #969595;
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

export default VideoListPreview
