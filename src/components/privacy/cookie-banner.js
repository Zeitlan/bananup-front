import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withContext } from '../../context'

const useStyles = makeStyles(() => ({
  main: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '10000',
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    background: "linear-gradient(rgba(30, 30, 30, 0.50), rgba(48, 48, 48, 1))",
  },
  button: {
    marginLeft: 20,
  },
  message: {
    color: "#F2F2F2",
    fontSize: 15,
  },
  privacyLink: {
    color: '#747474',
    marginLeft: 10,
  }

}));

function CookieBanner(props) {
  const classes = useStyles()
  if (props.state.allowCookies != undefined) {
    return null
  }
  return (
    <div className={classes.main}>
      <div>
        <span className={classes.message}>This website uses cookies to enhance the user experience.</span>
        <Link className={classes.privacyLink} to={"/privacy"}>Learn more</Link>
      </div>
      <div>
        <Button color="primary" onClick={() => props.actions.setAllowCookie(false)}className={classes.button}>
          Decline
        </Button>
        <Button color="primary" onClick={() => props.actions.setAllowCookie(true)} className={classes.button}>
          Accept
        </Button>
      </div>
    </div>
  );
}

CookieBanner.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
}
export default withContext(['allowCookies'],['setAllowCookie'])(CookieBanner)