/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from '@material-ui/core'

import ContactBody from './contact-body'

function ContactModal(props){

  const _closeModal = () => {
    props._closeModal()
  }
  return (
    <Modal 
      open={props.open} 
      onClose={_closeModal}>
          <ContactBody _closeModal={_closeModal}/>
    </Modal>
  )
}

ContactModal.propTypes = {
    open: PropTypes.bool.isRequired,
    _closeModal: PropTypes.func.isRequired
}
export default ContactModal
