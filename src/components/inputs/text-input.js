
/* eslint-disable no-console */
import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 10
    },
    textField: {
        width: '100%'
    }
}))

export function TextInput(props) {
  const classes = useStyles()

  const [textComment, textCommentSet] = useState(undefined)
  
  const handleInputChange = e => {
    const { value } = e.target
    textCommentSet(value)
  }

  return (
      <>
        <TextField
            className={classes.textField}
            id="outlined-dense-multiline"
            label={props.label}
            margin="dense"
            variant="outlined"
            multiline
            rowsMax="4"
            onChange={handleInputChange}
            value={textComment}
        />
        <Button onClick = {() => {
            props.sendFunction(textComment)
          }}
        >
          Send
        </Button>
      </>
  )
}
// PropTypes
TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    sendFunction: PropTypes.func.isRequired
}