/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import YoutubePlayer from '../components/video-player/youtube-player'
import Comments from '../components/feedbacks/commentary/commentaries'
import AddComment from '../components/feedbacks/commentary/add-commentary'
import Controls from '@/components/video-player/controls.js'
import { useQuery } from 'react-apollo';
import { GET_VIDEO_INFO } from '@/queries/videos'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      margin: 0
    }
  },
  videoContainer: {
    position: 'relative',
    paddingTop: '50.25%!important',
    width:'80%',
    margin: 'auto',
  },
  playerContainer: {
    width: '80%',
    margin: 'auto',
  },
  video: {
    position: 'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
  },
  addComment: {
    width:'100%'
  }
}));

function Video(props) {
  const { videoId } = props
  const classes = useStyles()
  const [ytPlayer, setYtPlayer] = useState(undefined)

  
  const { loading, error, data } = useQuery(GET_VIDEO_INFO, {
    variables: { id: videoId }
  });


  const connected = localStorage.getItem('token') != undefined
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  const { video } = data
  return (
    <div className={classes.root}>
      <div className={classes.videoContainer}>
        <div className={classes.playerContainer}>
          <YoutubePlayer className={classes.video} videoId={video.link} setYtPlayer={setYtPlayer} ytPlayer={ytPlayer}/>
        </div>
      </div>
      <div className={classes.playerContainer}>
        <Controls ytPlayer={ytPlayer}/>
      </div>
      {connected && <AddComment className={classes.addComment} videoId={video.id} ytPlayer={ytPlayer}/>}
      <Comments videoId={videoId}/>
    </div>
  )
}

// PropTypes
Video.propTypes = {
  videoId: PropTypes.string,
}

export default Video