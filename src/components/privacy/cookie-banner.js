import React, { useState } from 'react';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

function CookieBanner() {
  const classes = useStyles()

  const [cookie, cookieSet] = useState(false)
  if (cookie || localStorage.getItem('allowCookies') != undefined) {
    return null
  }
  return (
    <div className={classes.main}>
      <div>
        <span className={classes.message}>This website uses cookies to enhance the user experience.</span>
        <Link className={classes.privacyLink} to={"/privacy"}>Learn more</Link>
      </div>
      <div>
        <Button color="primary" onClick={() => {localStorage.setItem('allowCookies', false); cookieSet(true)}} className={classes.button}>
          Decline
        </Button>
        <Button color="primary" onClick={() => {localStorage.setItem('allowCookies', true); cookieSet(true)}} className={classes.button}>
          Accept
        </Button>
      </div>
    </div>
  );
}

export default CookieBanner