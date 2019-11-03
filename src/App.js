/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ApolloProvider } from '@apollo/react-hooks';

import client from './context/apollo-client'
import WithThemes from './theme'
import NavigationBar from './components/menu/navigation-bar'
import CookieBanner from './components/privacy/cookie-banner'
import Router from '@/components/router'
import { SnackbarProvider } from 'notistack'
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles(() => ({
  main: {

  },
  customToolbar: {
    minHeight: 48,
  },
}));
function App() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <WithThemes>
          <SnackbarProvider>
          <div>
            <CookieBanner/>
            <header>
              <NavigationBar open={mobileOpen} drawerToggle={handleDrawerToggle}/>
            </header>
            <Toolbar className={classes.customToolbar}/>
            <div className={classes.main}>
              <Router/>
            </div>
          </div>
        </SnackbarProvider>
      </WithThemes>
    </ApolloProvider>)
}

export default App
