/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Drawer, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ClippedNavigationList from './clipped-navigation-list'
import PropTypes from 'prop-types'

const navItems = [
    {
        text:"Home",
        link:"/"
    },
    {
        text: "Categories",
        link: "/categories"
    },
    {
        text:"Videos",
        link:"/videos"
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        width:150,
    },
    paper: {
        backgroundColor: '#424242',
        zIndex: 1,
        width:150,
    },
    under: {
        minHeight: 58,
    },
    toolbar: theme.mixins.toolbar,
}));

export default function NavigationMenu(props) {
    const classes = useStyles();
    console.log(props)
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
