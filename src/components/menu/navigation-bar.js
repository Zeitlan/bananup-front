import React, {useState} from 'react'
import { Typography, Toolbar, AppBar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LoginModal from '../login'
import { withContext } from '../../context'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: 64
  },
  leftAligned: {
    marginLeft: 'auto',
  }
}));

function NavigationBar(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
      <AppBar className={classes.root} position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Bananup
        </Typography>
        {props.state.key ? <span className={classes.leftAligned}>Vous êtes connecté !</span> : <Button onClick={() => setOpen(true)}className={classes.leftAligned} color="inherit">Se connecter</Button>}
        <LoginModal open={open} _closeModal={() => setOpen(false)} />
      </Toolbar>
    </AppBar>
  )
}

NavigationBar.propTypes = {
    state: PropTypes.object.isRequired,
}


export default withContext(['key'],[])(NavigationBar)