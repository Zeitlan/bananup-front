import React from 'react'
import { Context } from './context'

export class ContextProvider extends React.PureComponent {
    state = {
    }

    actions = {
    }

    render () {
        return (
            <Context.Provider value={{ state: this.state, actions: this.actions }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}