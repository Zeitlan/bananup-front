/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Modal } from '@material-ui/core'
import SignupBody from './signup-body'
import LoginBody from './login-body'


function LoginModal(props) {

  const [displaying, setDisplaying] = useState(1)
  const _closeModal = () => {
    props._closeModal()
    setDisplaying(1)
  }
  return (
  <Modal 
    open={props.open} 
    onClose={_closeModal}>
      {displaying === 1 ? 
        <LoginBody goSignUp={() => setDisplaying(2)} _closeModal={_closeModal}/> 
        : 
        <SignupBody goLogin={() => setDisplaying(1)} _closeModal={_closeModal}/>
      }
  </Modal>
  )
}

LoginModal.propTypes = {
    open: PropTypes.bool.isRequired,
    _closeModal: PropTypes.func.isRequired
}
export default LoginModal
