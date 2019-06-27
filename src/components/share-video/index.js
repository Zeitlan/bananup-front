/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from '@material-ui/core'
import ShareForm from './share-form'

class ShareVideoModal extends React.Component {

  _closeModal = () => {
    this.props._closeModal()
  }

  render() {
    return (
    <Modal 
      open={this.props.open} 
      onClose={this._closeModal}>
        <ShareForm _closeModal={this._closeModal}/>
    </Modal>
    )
  }
}

ShareVideoModal.propTypes = {
    open: PropTypes.bool.isRequired,
    _closeModal: PropTypes.func.isRequired
}
export default ShareVideoModal
