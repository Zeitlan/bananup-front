/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from '@material-ui/core'
import SignupBody from './signup-body'
import LoginBody from './login-body'


class LoginModal extends React.Component {

  state = {
    displaying: 1,
  }

  _closeModal = () => {
    this.props._closeModal()
    this.setState({displaying: 1})
  }
  render() {
    const { displaying } = this.state
    return (
    <Modal 
      open={this.props.open} 
      onClose={this._closeModal}>
        {displaying === 1 ? 
          <LoginBody goSignUp={() => this.setState({displaying: 2})} _closeModal={this._closeModal}/> 
          : 
          <SignupBody goLogin={() => this.setState({displaying: 1})} _closeModal={this._closeModal}/>
        }
    </Modal>
    )
  }
}

LoginModal.propTypes = {
    open: PropTypes.bool.isRequired,
    _closeModal: PropTypes.func.isRequired
}
export default LoginModal
