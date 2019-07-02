import React, {useState, useEffect} from 'react'
import { Typography, Toolbar, AppBar, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AddToQueue, ExitToApp, Menu } from '@material-ui/icons';
import LoginModal from '../login'
import { withContext } from '../../context'
import PropTypes from 'prop-types'
import ShareVideoModal from '../share-video';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 64
  },
  appBar: {
    marginLeft: 150,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${150}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  leftAligned: {
    marginLeft: 'auto',
  },
  iconAdd: {
    margin: 'auto',
  }
}));

function NavigationBar(props) {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [openShareVideo, setOpenShareVideo] = useState(false);
  useEffect(() => {
    props.actions.checkLogin()
  }, [])
  return (
      <AppBar className={classes.root} position="fixed" color="primary">
      <Toolbar>
        <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={() => props.drawerToggle()}
            className={classes.menuButton}
          >
            <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Bananup
        </Typography>
        <div className={classes.leftAligned} >
          {props.state.key ?
            <div>
              <span className={classes.leftAligned}>Connected !</span>
              <IconButton onClick={() => setOpenShareVideo(true)} className={classes.iconAdd} color="inherit">
                <AddToQueue color="inherit" />
              </IconButton>
              <IconButton onClick={() => props.actions.logout()} className={classes.iconAdd} color="inherit">
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

NavigationBar.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    drawerToggle: PropTypes.func.isRequired
}


export default withContext(['key'],['checkLogin', 'logout'])(NavigationBar)