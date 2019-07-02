import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    main: {
        color: '#969595'
    }
}))

function CustomTitle(props) {
    const classes = useStyles()
    return (
        <h2 className={classes.main}>{props.title}</h2>
    )
}

CustomTitle.propTypes = {
    title: PropTypes.string
}

export default CustomTitle