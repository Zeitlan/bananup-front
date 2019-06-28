/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import ClippedNavigationList from './clipped-navigation-list'


const navItems = [
    {
        text:"Accueil",
        link:"/"
    },
    {
        text: "Catégories",
        link: "/categories"
    },
    {
        text:"Vidéos",
        link:"/videos"
    }
]

const useStyles = makeStyles(() => ({
    root: {
        width:300,
    },
    paper: {
        backgroundColor: '#424242',
        zIndex: 1,
    },
    under: {
        minHeight: 58,
    },
}));

export default function NavigationMenu() {
    const classes = useStyles();
    return (
            <Drawer
            variant="permanent"
            anchor="left"
            className={classes.root}
            classes={{paper: classes.paper}}>
                <div className={classes.under}/>
                <ClippedNavigationList navItems = { navItems}/>
            </Drawer>
    )
}