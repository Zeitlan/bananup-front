import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'



class ClippedNavigationList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
       return  (
            <List>
            {this.props.navItems.map((text) => (
                <ListItem button key={text}>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
       )
    }
}

ClippedNavigationList.propTypes = {
    navItems: PropTypes.array.isRequired,
}

export default ClippedNavigationList