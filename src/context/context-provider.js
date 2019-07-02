import React from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import playerActions from './actions/player'
import userActions from './actions/user'
import shareActions from './actions/share'
import categoryActions from './actions/category'
import videoActions from './actions/video'
import commentActions from './actions/comment'
import cookieActions from './actions/cookie'
export class ContextProvider extends React.PureComponent {
    state = {
        ytPlayer: undefined,
        key: undefined,
        comments: undefined,
        videoId: undefined,
        allowCookies: false,
    }

    actions = {
        ...userActions(this),
        ...shareActions(this),
        ...categoryActions(this),
        ...playerActions(this),
        ...videoActions(this),
        ...commentActions(this),
        ...cookieActions(this),
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