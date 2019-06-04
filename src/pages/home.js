/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

import Pitch from '../components/pitch/pitch'
import CategoryList from '../components/categories/category-list'
import VideoList from '../components/videos/video-list'

class Home extends React.Component {

  render() {
    return (
        <Container>
            <Pitch/>
            <CategoryList/>
            <VideoList/>
        </Container>)
  }
}

const Container = styled.div`
`

export default Home
