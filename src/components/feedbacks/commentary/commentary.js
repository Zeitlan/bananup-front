/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'

import { useMutation } from '@apollo/react-hooks'
import { ADD_VOTE } from '@/queries/comments'

import { Card, CardContent, Typography, CardActions, IconButton} from '@material-ui/core'
import { ThumbUp, ThumbDown } from '@material-ui/icons'
import { toMMSS } from '@/utils'
import { makeStyles } from '@material-ui/styles'
import { useSnackbar } from 'notistack'

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
  const { id, video_time } = props.data

  const { enqueueSnackbar } = useSnackbar()

  const [addVote, {
    error: mutationError
  }] = useMutation(ADD_VOTE)

  const _sendVote = (vote) => {
    addVote({variables: { input: { id, vote }}})
    if (mutationError){
      enqueueSnackbar(JSON.stringify(mutationError, null, 2), { variant: "error"})
    }
  }
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
          {props.data.voteScore}
        </Typography>
        <>
          <IconButton onClick={() => _sendVote('UP')} color="primary">
            <ThumbUp color="inherit" />
          </IconButton>
          <IconButton onClick={() => _sendVote('DOWN')} color="primary">
            <ThumbDown color="inherit" />
          </IconButton>
        </>
        
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
    voteScore: PropTypes.number.isRequired,
  }),
}

export default Commentary
