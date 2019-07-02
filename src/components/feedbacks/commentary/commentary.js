/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'
import { withContext } from '../../../context'
import { Card, CardContent, Typography, CardActions, IconButton} from '@material-ui/core'
import { ThumbUp, ThumbDown } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width:'100%'
  },
  leftActions: {
    marginRight: 'auto',
    marginLeft: 10,
  }
}))

function Commentary(props) {
  const classes = useStyles()
  const { videoId } = props.state
  const { id } = props.data
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">
          {props.data.author.username}
        </Typography>
        <Typography variant="body1" style={{whiteSpace: 'pre'}}>
          {props.data.text}
        </Typography>
      </CardContent>

      <CardActions>
        <Typography color="primary" variant="caption" className={classes.leftActions}>
          {props.data.num_vote_up	- props.data.num_vote_down}
        </Typography>
        <IconButton onClick={() => props.actions.addVote(videoId, id, 1)} color="primary">
          <ThumbUp color="inherit" />
        </IconButton>
        <IconButton onClick={() => props.actions.addVote(videoId, id, -1)} color="primary">
          <ThumbDown color="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  )
}

Commentary.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired
    }),
    num_vote_up: PropTypes.number.isRequired,
    num_vote_down: PropTypes.number.isRequired,
  }),
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withContext(['videoId'],['addVote'])(Commentary)
