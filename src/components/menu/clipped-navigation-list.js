import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import styled from 'styled-components'


function ListItemLink(props){
    return <ListItem button component="a" {...props} />
}

ListItemLink.propTypes = {
    primary: PropTypes.string.isRequired
}



class ClippedNavigationList extends React.Component {
    render() {
       return  (
           <ClipContainer>
                <List>
                {this.props.navItems.map((navItem) => (
                    <ListItemLink key={navItem.text} href={navItem.link}>
                        <ListItemText primary={navItem.text}/>
                    </ListItemLink>
                ))}
                </List>
            </ClipContainer>
       )
    }
}

ClippedNavigationList.propTypes = {
    navItems: PropTypes.array.isRequired
}

const ClipContainer = styled.div`
    toolbar: theme.mixins.toolbar,

`



export default ClippedNavigationList
