/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'
import { withContext } from '../../../context'
import { Card, CardContent, Typography, CardActions, IconButton} from '@material-ui/core'
import { ThumbUp, ThumbDown } from '@material-ui/icons'
import { toMMSS } from '../../../utils'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width:'100%'
  },
  leftActions: {
    marginRight: 'auto',
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardAction: {
    marginLeft: 10,
    marginRight: 10,
  }
}))

function Commentary(props) {
  const classes = useStyles()
  const { videoId } = props.state
  const { id, video_time } = props.data
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.topInfo}>

        <Typography variant="h5" className={classes.leftActions}>
          {props.data.author.username}
        </Typography>
        {
          (video_time !== undefined && video_time !== null ?
            <Typography>
              {toMMSS(video_time)}
            </Typography>
            : null)
        }
        </div>
        <Typography variant="body1" style={{whiteSpace: 'pre'}}>
          {props.data.text}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardAction}>
        <Typography color="primary" variant="caption" className={classes.leftActions}>
          {props.data.num_vote_up	- props.data.num_vote_down}
        </Typography>
        {props.state.key !== undefined && <>
          <IconButton onClick={() => props.actions.addVote(videoId, id, 1)} color="primary">
            <ThumbUp color="inherit" />
          </IconButton>
          <IconButton onClick={() => props.actions.addVote(videoId, id, -1)} color="primary">
            <ThumbDown color="inherit" />
          </IconButton>
        </>}
        
      </CardActions>
    </Card>
  )
}

Commentary.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    video_time: PropTypes.number.isRequired,
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

export default withContext(['videoId', 'key'],['addVote'])(Commentary)
