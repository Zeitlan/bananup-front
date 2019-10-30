/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Commentary from './commentary'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from 'react-apollo';
import { GET_VIDEO_COMMENTS } from '@/queries/videos'

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'auto',
    maxHeight: '80vh',
    marginTop: 20,
  },
  item: {
    paddingTop: 0,
    width: '100%'
  },
}));


function CommentarySection(props) {
  const classes = useStyles()
  const { videoId } = props
  
  const { loading, error, data } = useQuery(GET_VIDEO_COMMENTS, {
    variables: { id: videoId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <List className={classes.root} disablePadding={true}>
      {data.video.comments.map((comment) => (
        <ListItem className={classes.item} key={comment.id}>
          <Commentary data={comment}/>
        </ListItem>
      ))}
    </List>
  )
}

CommentarySection.propTypes = {
  videoId: PropTypes.number.isRequired,
}

export default CommentarySection
