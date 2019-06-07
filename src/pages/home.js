import React from 'react'
import styled from 'styled-components'

import Pitch from '../components/pitch/pitch'
import CategoryListPreview from '../components/categories/category-list-preview'
import VideoList from '../components/videos/video-list'

class Home extends React.Component {

  render() {
    return (
        <Container>
            <Pitch/>
            <CategoryListPreview/>
            <VideoList/>
        </Container>)
  }
}

const Container = styled.div`
`

export default Home
