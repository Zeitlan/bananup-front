/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from '@material-ui/core'

import ContactBody from './contact-body'

class ContactModal extends React.Component {

  _closeModal = () => {
    this.props._closeModal()
  }

  render() {
    return (
    <Modal 
      open={this.props.open} 
      onClose={this._closeModal}>
          <ContactBody _closeModal={this._closeModal}/>
    </Modal>
    )
  }
}

ContactModal.propTypes = {
    open: PropTypes.bool.isRequired,
    _closeModal: PropTypes.func.isRequired
}
export default ContactModal
