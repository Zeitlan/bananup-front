import React from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import userActions from './actions/user'

export class ContextProvider extends React.PureComponent {
    state = {
        key: undefined
    }

    actions = {
        ...userActions(this)
    }

    render () {
        return (
            <Context.Provider value={{ state: this.state, actions: this.actions }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

ContextProvider.propTypes = {
    children: PropTypes.any.isRequired
}