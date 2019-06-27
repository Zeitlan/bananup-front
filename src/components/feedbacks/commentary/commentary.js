/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width:'100%'
  }
}))

function Commentary(props) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">
          {props.data.author.username}
        </Typography>
        <Typography variant="subtitle1">
          {props.data.text}
        </Typography>
      </CardContent>
    </Card>
  )
}

Commentary.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired
    })
  })
}

export default Commentary
