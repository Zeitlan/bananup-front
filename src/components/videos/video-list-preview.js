import React from 'react'
import styled from 'styled-components'
import VideoList from './video-list'

class VideoListPreview extends React.Component {

    state = {
        videos: [
            {
                title : '2v2 WoW avec Mage Feu', 
                date: '20/08/2019',
                creator:'Zeitlan',
                game:'World of Warcraft',
            },
            {
                title : '2v2 WoW avec Mage Feu', 
                date: '20/08/2019',
                creator:'Zeitlan',
                game:'World of Warcraft',
            },
            {
                title : '2v2 WoW avec Mage Feu', 
                date: '20/08/2019',
                creator:'Zeitlan',
                game:'World of Warcraft',
            },
            {
                title : '2v2 WoW avec Mage Feu', 
                date: '20/08/2019',
                creator:'Zeitlan',
                game:'World of Warcraft',
            },
            {
                title : '2v2 WoW avec Mage Feu', 
                date: '20/08/2019',
                creator:'Zeitlan',
                game:'World of Warcraft',
            },
            {
                title : '2v2 WoW avec Mage Feu', 
                date: '20/08/2019',
                creator:'Zeitlan',
                game:'World of Warcraft',
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
