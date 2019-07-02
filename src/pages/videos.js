import React, { useState, useEffect } from 'react'

import { withContext } from '../context'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import VideoList from '../components/videos/video-list'
import CustomTitle from '../components/display/custom-title'

const useStyles = makeStyles(theme => ({
  main: {
    marginLeft: 20,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },

  }
}))

function Videos(props) {
  const [videos, videosSet] = useState(undefined)
  const classes = useStyles()
  useEffect(() => {
    const { categoryId } = props
    const { actions: { getCategoryVideos } } = props
    getCategoryVideos(categoryId).then(json => {
      videosSet(json.videos)
    })
  }, [])

  return (
    <div className={classes.main}>
      <CustomTitle>Videos</CustomTitle>
      {videos && <VideoList videos={videos} />}
    </div>)
}

Videos.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  categoryId: PropTypes.string.isRequired
}

export default withContext(['categories'], ['getCategoryVideos'])(Videos)
