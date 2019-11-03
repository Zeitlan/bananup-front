import React, { useState, useEffect } from 'react'
import { Typography, Toolbar, AppBar, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AddToQueue, ExitToApp } from '@material-ui/icons';
import { Link } from '@reach/router'
import LoginModal from '../login'
import ShareVideoModal from '../share-video';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: 48,
  },
  customToolbar: {
    minHeight: 48,
  },
  logo: {
    marginRight: 50,
  },
  menuButton: {
    marginLeft: 20,
    textDecoration: 'none',
    color: 'white',
    marginRight: 20,
  },
  leftAligned: {
    marginLeft: 'auto',
  },
  iconAdd: {
    margin: 'auto',
  }
}));

function NavigationBar() {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [openShareVideo, setOpenShareVideo] = useState(false);
  const [connected, setConnected] = useState(localStorage.getItem('token') != undefined)

  useEffect(() => {
    if (!connected)
      localStorage.removeItem('token')
  }, [connected])

  useEffect(() => {
    setConnected(localStorage.getItem('token'))
  },[openLogin])

  return (
    <AppBar className={classes.root} position="fixed" color="secondary">
      <Toolbar className={classes.customToolbar}>
        <Typography variant="h6" color="primary" noWrap className={classes.logo}>
          Bananup
        </Typography>
        <Link to="/" className={classes.menuButton}>
            Accueil
        </Link>
        <Link to="/categories" className={classes.menuButton}>
            Parcourir
        </Link>
        <div className={classes.leftAligned} >
          {connected ?
            <div>
              <span className={classes.leftAligned}>Connected !</span>
              <IconButton onClick={() => setOpenShareVideo(true)} className={classes.iconAdd} color="inherit">
                <AddToQueue color="inherit" />
              </IconButton>
              <IconButton onClick={() => setConnected(false)} className={classes.iconAdd} color="inherit">
                <ExitToApp color="inherit" />
              </IconButton>
              
            </div>
            :
            <Button onClick={() => setOpenLogin(true)} className={classes.leftAligned} color="inherit">Login</Button>
          }
          <LoginModal open={openLogin} _closeModal={() => setOpenLogin(false)} />
          <ShareVideoModal open={openShareVideo} _closeModal={() => setOpenShareVideo(false)} />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar