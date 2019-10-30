import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import VideoList from '../components/videos/video-list'
import CustomTitle from '../components/display/custom-title'
import { useQuery } from 'react-apollo'
import { GET_VIDEO_CATEGORY } from '@/queries/categories'

const useStyles = makeStyles(theme => ({
  main: {
    marginLeft: 20,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },

  }
}))

function Videos(props) {
  const classes = useStyles()
  const { categoryId } = props

  const { loading, error, data } = useQuery(GET_VIDEO_CATEGORY,  {
      variables: { id: categoryId },
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)
  return (
    <div className={classes.main}>
      <CustomTitle>Videos</CustomTitle>
      <VideoList videos={data.category.videos} />
    </div>)
}

Videos.propTypes = {
  categoryId: PropTypes.string,
}

export default Videos
