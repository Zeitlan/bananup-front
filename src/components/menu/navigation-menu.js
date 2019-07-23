/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Drawer, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Home, VideoLibrary, Category } from '@material-ui/icons'
import ClippedNavigationList from './clipped-navigation-list'
import PropTypes from 'prop-types'

const navItems = [
    {
        text:"Home",
        link:"/",
        icon: <Home color="secondary"/>
    },
    {
        text: "Categories",
        link: "/categories",
        icon: <Category color="secondary"/>
    },
    {
        text:"Videos",
        link:"/videos",
        icon: <VideoLibrary color="secondary"/>
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        width:180,
    },
    paper: {
        backgroundColor: '#424242',
        zIndex: 1,
        width:180,
    },
    under: {
        minHeight: 58,
    },
    toolbar: theme.mixins.toolbar,
}));

export default function NavigationMenu(props) {
    const classes = useStyles();
    return (
            <nav className={classes.drawer} aria-label="Website navigator">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                open={props.open}
                onClose={props.drawerToggle}
                classes={{
                  paper: classes.paper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <ClippedNavigationList navItems = { navItems}/>
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.paper,
                }}
                variant="permanent"
                open
              >
              <div className={classes.under}/>
                <ClippedNavigationList navItems = { navItems}/>
              </Drawer>
            </Hidden>
          </nav>
    )
}


NavigationMenu.propTypes = {
    open: PropTypes.object.isRequired,
    drawerToggle: PropTypes.func.isRequired
}
