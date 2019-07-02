/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Commentary from './commentary'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from "@material-ui/core/styles";

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
  return (
    <List className={classes.root} disablePadding={true}>
      {props.comments.map((comment) => (
        <ListItem className={classes.item} key={comment.id}>
          <Commentary data={comment} />
        </ListItem>
      ))}
    </List>
  )
}

CommentarySection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }))
}

export default CommentarySection
