import React from 'react'
import styled from 'styled-components'

import { withContext } from '../context'
import VideoList from '../components/videos/video-list'
import PropTypes from 'prop-types'

@withContext(['categories'],['getCategoryVideos'])
class Videos extends React.Component {
  state = {
    videos: undefined
  }
  componentDidMount() {
    const { categoryId } = this.props
    const {actions: {getCategoryVideos}} = this.props
    getCategoryVideos(categoryId).then(json => {
      this.setState({videos: json.videos})
    })
  }
  render() {
    const { videos } = this.state
    return (
        <Container>
            <CustomTitle>Videos</CustomTitle>
            { videos && <VideoList videos={videos}/> }
        </Container>)
  }
}

Videos.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  categoryId: PropTypes.string.isRequired
}
const Container = styled.div`
`

const CustomTitle = styled.h2`
    color: #969595;
`

export default Videos
