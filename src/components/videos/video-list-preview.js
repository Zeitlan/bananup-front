import React from 'react'
import styled from 'styled-components'
import VideoList from './video-list'

import { VIDEO_PREVIEW } from '@/queries/videos'
import { useQuery } from 'react-apollo';

function VideoListPreview() {

  
    const { loading, error, data } = useQuery(VIDEO_PREVIEW);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Container>
            <TopRow>
                <CustomTitle>Recent videos</CustomTitle>
                <More href="...">More..</More>
            </TopRow>
            <VideoList videos={data.allVideos.results.splice(0, 6)}/>
        </Container>
    )
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
