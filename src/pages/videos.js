import React from 'react'
import styled from 'styled-components'

import VideoList from '../components/videos/video-list'

const videos = [
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

class Videos extends React.Component {

  render() {
    return (
        <Container>
            <CustomTitle>Vidéos</CustomTitle>
            <VideoList videos={videos}/>
        </Container>)
  }
}

const Container = styled.div`
`

const CustomTitle = styled.h2`
    color: #969595;
`

export default Videos
