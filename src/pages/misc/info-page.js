import React from 'react'

import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 100,
    color: "#747373",
  },
  caption: {
    fontSize: '120%',
    color: "#969595",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
  }
}));

function InfoPage(props) {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Typography color="primary" className={classes.title}>
        {props.title}
      </Typography>
      <Typography variant="caption" color="primary" className={classes.caption}>
        {props.message}
      </Typography>
    </div>)
}

InfoPage.propTypes = {
  title: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
}

export default InfoPage
