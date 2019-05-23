import React from 'react'
import styled from 'styled-components'
import VideoPreview from './video-preview'
class VideoList extends React.Component {
    
  render() {
    return (
        <Container>
            <CustomTitle>Vidéos du moment</CustomTitle>
            <List>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
                <VideoPreview title={'2v2 WoW avec Mage Feu'} date={'20/08/2019'} creator={'Zeitlan'} game={'World of Warcraft'}/>
            </List>
        </Container>
    )
  }
}

// PropTypes
VideoList.propTypes = {
}

// Styles

const Container = styled.div`
    margin-left: 200px;
    margin-right: 20px;
    margin-top: 10px;
`

const CustomTitle = styled.h2`
    color: #969595;
`
const List =  styled.div`
    margin: auto;
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
`

export default VideoList
