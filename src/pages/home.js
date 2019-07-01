import React from 'react'
import styled from 'styled-components'

import Pitch from '../components/pitch/pitch'
import CategoryListPreview from '../components/categories/category-list-preview'
import VideoListPreview from '../components/videos/video-list-preview'

class Home extends React.Component {

  render() {
    return (
        <Container>
            <Pitch/>
            <Body>
              <CategoryListPreview/>
              <VideoListPreview/>
            </Body>
        </Container>)
  }
}

const Container = styled.div`
`
const Body = styled.div`
  margin: 40px;
`

export default Home
