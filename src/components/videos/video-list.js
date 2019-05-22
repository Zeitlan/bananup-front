import React from 'react'
import styled from 'styled-components'
import Video from './video'
class VideoList extends React.Component {
    
  render() {
    return (
        <Container>
            <CustomTitle>Vidéos</CustomTitle>
            <List>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
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
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
`

export default VideoList
