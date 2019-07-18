import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 200,
    textShadow: "2px 3px 8px rgba(13, 13, 13, 1)",
  },
  caption: {
    fontSize: '100%',
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
  }
}));

function NotFound() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Typography color="primary" className={classes.title}>
        404
      </Typography>
      <Typography variant="caption" color="primary" className={classes.caption}>
        What are you doing here buddy?
      </Typography>
    </div>)
}

export default NotFound
