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
        console.log(props.state.ytPlayer.getCurrentTime())
        videoTimestampSet(props.state.ytPlayer.getCurrentTime())
      }, 1000))
    }
    return clearInterval(videoTick)
  }, [props.state.ytPlayer]);
  return (
      <>
        <TextInput
          label={"Commentaire " + (videoTimestamp ? toMMSS(videoTimestamp) : '0:00')}
          sendFunction = {(text) => console.log(videoTimestamp + text)}
        />
      </>
  )
}
// PropTypes
AddCommentary.propTypes = {
    state: PropTypes.object.isRequired
}

export default withContext(['ytPlayer'],[])(AddCommentary)
