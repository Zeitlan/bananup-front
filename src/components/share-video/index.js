/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from '@material-ui/core'
import ShareForm from './share-form'

function ShareVideoModal(props) {
  return (
    <Modal 
      open={props.open} 
      onClose={props._closeModal}>
        <ShareForm _closeModal={props._closeModal}/>
    </Modal>
  )
}

ShareVideoModal.propTypes = {
    open: PropTypes.bool.isRequired,
    _closeModal: PropTypes.func.isRequired
}
export default ShareVideoModal
