/* eslint-disable no-console */
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { withContext } from '../../../context'
import { toMMSS } from '../../../utils'
import { TextInput } from '../../inputs/text-input'

function AddCommentary(props) {
  const [videoTick, videoTickSet] = useState(undefined);
  const [videoTimestamp, videoTimestampSet] = useState(undefined);
  useEffect(() => {
    if (videoTick === undefined && props.state.ytPlayer !== undefined) {
      videoTickSet(setInterval(() => {
        videoTimestampSet(props.state.ytPlayer.getCurrentTime())
      }, 1000))
    }
    return () => clearInterval(videoTick)
  }, [props.state.ytPlayer, videoTick]);

  return (
      <>
        <TextInput
          label={"Comment " + (videoTimestamp ? toMMSS(videoTimestamp) : '0:00')}
          sendFunction = {(text) => {
            return props.actions.addVideoComment(props.videoId, text, videoTimestamp)
          }}
        />
      </>
  )
}
// PropTypes
AddCommentary.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    videoId: PropTypes.number.isRequired
}

export default withContext(['ytPlayer'],['addVideoComment'])(AddCommentary)
