import React from 'react'
import styled from 'styled-components'
import imgWoW from "./wow-gameplay.jpg"
class Video extends React.Component {
    
  render() {
    return (
        <Container>
            <ImgContainer src={imgWoW}/>
        </Container>
    )
  }
}

// PropTypes
Video.propTypes = {
}

// Styles
const Container = styled.div `
flex: 0 1 45%;
float: left;
margin: 10px;
min-width: 250px;
`
const ImgContainer = styled.img`
    border-radius: 4%;
    max-width: 100%;
    max-height: 100%;
`

export default Video
