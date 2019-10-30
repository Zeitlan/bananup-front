/* eslint-disable no-console */
import React, {useEffect, useState} from 'react'

import { useMutation } from '@apollo/react-hooks'
import { ADD_COMMENT } from '@/queries/comments'
import { GET_VIDEO_COMMENTS } from '@/queries/videos'

import PropTypes from 'prop-types'
import { toMMSS } from '../../../utils'
import { Card, CardContent, Typography, Button, Input, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSnackbar } from 'notistack'


const useStyles = makeStyles(() => ({
  root: {
    margin: 20,
  },
  leftActions: {
    marginRight: 'auto',
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardAction: {
    marginLeft: 'auto',
  },
  textField: {
    marginTop: '10px'
  }
}))

function AddCommentary(props) {
  const classes = useStyles()
  const [videoTick, videoTickSet] = useState(undefined);
  const [videoTimestamp, videoTimestampSet] = useState(undefined);
  const [textComment, textCommentSet] = useState(undefined)

  const { enqueueSnackbar } = useSnackbar()
  const [addComment, {
    error: mutationError }
  ] = useMutation(ADD_COMMENT)

  const { ytPlayer } = props
  const _handleInputChange = e => {
    const { value } = e.target
    textCommentSet(value)
  }

  const _sendComment = () => {
    console.log('Add comment')
    console.log(textComment)
    addComment(
      {
        variables: { 
          input: {
            text: textComment,
            video: props.videoId,
            videoTime: videoTimestamp
          }
        },
        refetchQueries: [{
          query: GET_VIDEO_COMMENTS,
          variables: {
            id: props.videoId
          }
        }]
      }
    )
    if (mutationError){
      enqueueSnackbar(JSON.stringify(mutationError, null, 2), { variant: "error"})
    }
    textCommentSet("")
  }

  useEffect(() => {
    if (videoTick === undefined && ytPlayer !== undefined) {
      videoTickSet(setInterval(() => {
        videoTimestampSet(ytPlayer.getCurrentTime())
      }, 1000))
    }
    return () => clearInterval(videoTick)
  }, [ytPlayer, videoTick]);
  return (

    <Card className={classes.root}>
      <CardContent>
        <div className={classes.topInfo}>

        <Typography variant="h5" className={classes.leftActions}>
          You.
        </Typography>
        {
          (videoTimestamp !== undefined && videoTimestamp !== null ?
            <Typography>
              {toMMSS(videoTimestamp)}
            </Typography>
            : null)
        }
        </div>
        <Input
            className={classes.textField}
            placeholder="Your comment here"
            margin="dense"
            multiline
            fullWidth={true}
            rowsMax="4"
            onChange={_handleInputChange}
            value={textComment}
        >

        </Input>
      </CardContent>
      <CardActions>
        <Button 
          onClick={() => {
            _sendComment()
          }}
          color="primary"
          className={classes.cardAction}
          >
            Send
          </Button>
      </CardActions>
    </Card>
  )
}
// PropTypes
AddCommentary.propTypes = {
    videoId: PropTypes.number.isRequired,
    updateComments: PropTypes.func.isRequired,
    ytPlayer: PropTypes.object
}

export default AddCommentary
