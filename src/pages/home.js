import React from 'react'

import Pitch from '../components/pitch/pitch'
import CategoryListPreview from '../components/categories/category-list-preview'
import VideoListPreview from '../components/videos/video-list-preview'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('xs')]: {
    },
  },
    body: {
      margin: 20,
    }
}));

function Home() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Pitch />
      <div className={classes.body}>
        <CategoryListPreview />
        <VideoListPreview />
      </div>
    </div>)
}

export default Home
