/* eslint-disable no-console */
import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import {ListItem, ListItemText} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'


function ListItemLink(props){
    return <ListItem button component="a" {...props} />
}

const useStyles = makeStyles(() => ({
    item_text: {
        color: '#F2F2F2'
    },
  }));


export default function ClippedNavigationList(props) {
    const { navItems } = props
    const classes = useStyles();
    return  (
        <ClipContainer>
            <List>
            {navItems.map((navItem) => (
                <ListItemLink key={navItem.text} href={navItem.link}>
                    <ListItemText className={classes.item_text} color="primary" primary={navItem.text}/>
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