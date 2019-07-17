/* eslint-disable no-console */
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { withContext } from '../../../context'
import { toMMSS } from '../../../utils'
import { Card, CardContent, Typography, Button, Input, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

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
  
  const handleInputChange = e => {
    const { value } = e.target
    textCommentSet(value)
  }

  useEffect(() => {
    if (videoTick === undefined && props.state.ytPlayer !== undefined) {
      videoTickSet(setInterval(() => {
        videoTimestampSet(props.state.ytPlayer.getCurrentTime())
      }, 1000))
    }
    return () => clearInterval(videoTick)
  }, [props.state.ytPlayer, videoTick]);
  return (

    <Card className={classes.root}>
      <CardContent>
        <div className={classes.topInfo}>

        <Typography variant="h5" className={classes.leftActions}>
          {props.state.user ? props.state.user.username : 'You.'}
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
            onChange={handleInputChange}
            value={textComment}
        >

        </Input>
      </CardContent>
      <CardActions>
        <Button 
          onClick={() => {
            props.actions.addVideoComment(props.videoId, textComment, videoTimestamp).then(() => props.updateComments())
            textCommentSet("")
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
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    videoId: PropTypes.number.isRequired,
    updateComments: PropTypes.func.isRequired,
}

export default withContext(['ytPlayer', 'user'],['addVideoComment'])(AddCommentary)
