/* eslint-disable no-console */
import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import { Link } from '@reach/router'
import {ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'


function ListItemLink(props){
    return (
        <ListItem button component={Link} {...props}/>
    )
}

const useStyles = makeStyles(() => ({
    item_text: {
        color: '#F2F2F2',
    },
  }));


export default function ClippedNavigationList(props) {
    const { navItems } = props
    const classes = useStyles();
    return  (
        <ClipContainer>
            <List>
            {navItems.map((navItem) => (
                <ListItemLink key={navItem.text} to={navItem.link}>

                    <ListItemIcon>
                        {navItem.icon}
                    </ListItemIcon>
                    <ListItemText className={classes.item_text} primary={navItem.text}/>
                </ListItemLink>
            ))}
            </List>
        </ClipContainer>
    )
}

ClippedNavigationList.propTypes = {
    navItems: PropTypes.array.isRequired
}

const ClipContainer = styled.div`
    toolbar: theme.mixins.toolbar,
`