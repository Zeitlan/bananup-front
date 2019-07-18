/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ContextProvider } from './context'
import { makeStyles } from '@material-ui/core/styles'

import WithThemes from './theme'
import NavigationBar from './components/menu/navigation-bar'
import NavigationMenu  from './components/menu/navigation-menu'
import Home from './pages/home'
import Video from './pages/video'
import Categories from './pages/categories'
import Videos from './pages/videos'
import CookieBanner from './components/privacy/cookie-banner'
import { Router } from "@reach/router"
import { SnackbarProvider } from 'notistack'
import Toolbar from '@material-ui/core/Toolbar';
import PrivacyPolicy from './components/privacy/privacy';
import NotFound from './pages/error404';


const useStyles = makeStyles(theme => ({
  main: {
    marginLeft: 150,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));
function App() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const classes = useStyles();
  return (
    <ContextProvider>
        <WithThemes>
            <SnackbarProvider>
            <div>
              <CookieBanner/>
              <header>
                <NavigationBar open={mobileOpen} drawerToggle={handleDrawerToggle}/>
                <NavigationMenu open={mobileOpen} drawerToggle={handleDrawerToggle}/>
              </header>
              <Toolbar/>
              <div className={classes.main}>
                <Router>
                  <Home path="/"/>
                  <Video path="/video/:videoId"/>
                  <Videos path="/categorie/:categoryId"/>
                  <Categories path="/categories"/>
                  <PrivacyPolicy path="/privacy"/>
                  <NotFound default/>
                </Router>
              </div>
            </div>
          </SnackbarProvider>
        </WithThemes>
  </ContextProvider>)
}

export default App
