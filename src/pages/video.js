/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import YoutubePlayer from '../components/video-player/youtube-player'
import Comments from '../components/feedbacks/commentary/commentaries'
import AddComment from '../components/feedbacks/commentary/add-commentary'
import { withContext } from '../context'

const useStyles = makeStyles(() => ({
  root: {
  },
  videoContainer: {
    position: 'relative',
    paddingTop: '56.25%!important',
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
  const { comments } = props.state
  const classes = useStyles()
  const [video, videoSet] = useState(undefined);
  useEffect(() => {
    if (!video) {
      const { actions: { getVideoInformation }} = props
      getVideoInformation(videoId).then((json) => {
        videoSet(json)
      })
    }
    if (!comments){
      const { actions: { getVideoComments }} = props
      getVideoComments(videoId)
    }
  }, []);
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <div className={classes.videoContainer}>
                {video && <YoutubePlayer className={classes.video} videoId={video.link} />}
              </div>
            </Grid>
            <Grid item xs={12} lg={12}>
              {props.state.key && video && <AddComment className={classes.addComment} videoId={video.id}/>}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Comments comments={comments ? comments : []}/>
        </Grid>
      </Grid>
    </div>
  )
}

// PropTypes
Video.propTypes = {
  videoId: PropTypes.string,
  state: PropTypes.object,
}

export default withContext(['key', 'comments'],['getVideoInformation', 'getVideoComments'])(Video)