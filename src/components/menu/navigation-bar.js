import React, {useState} from 'react'
import { Typography, Toolbar, AppBar, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AddToQueue } from '@material-ui/icons';
import LoginModal from '../login'
import { withContext } from '../../context'
import PropTypes from 'prop-types'
import ShareVideoModal from '../share-video';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: 64
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
  return (
      <AppBar className={classes.root} position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Bananup
        </Typography>
        <div className={classes.leftAligned} >
          {props.state.key ?
            <div>
              <span className={classes.leftAligned}>Vous êtes connecté !</span>
              <IconButton onClick={() => setOpenShareVideo(true)} className={classes.iconAdd} color="inherit">
                <AddToQueue color="inherit" />
              </IconButton>
              
            </div>
            :
            <Button onClick={() => setOpenLogin(true)} className={classes.leftAligned} color="inherit">Se connecter</Button>
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
}


export default withContext(['key'],[])(NavigationBar)