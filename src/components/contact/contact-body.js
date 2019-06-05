/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import { FilledInput } from '@material-ui/core'
import ModalTitleBox from '../modal/modal-title-box';
import ModalBottomActions from '../modal/modal-bottom-actions';


class ContactBody extends React.Component {
  render() {
    return (
        <CustomModal>
            <ModalTitleBox title='Contact' _closeModal={this.props._closeModal} />
            <Content>
                <p>{"Titre"}</p>
                <CustomTextField
                    placeholder="Titre"
                    classes={{input: 'input'}}
                />
                 <p>Commentaire(s)</p>
                <CustomTextField
                    placeholder="Commentaire(s)"
                    classes={{input: 'input'}}
                    multiline
                    rows="4"
                />
            </Content>
            <ModalBottomActions text='Envoyer' action={this.props._closeModal}/>
        </CustomModal>
    )
  }
}


ContactBody.propTypes = {
    _closeModal: PropTypes.func.isRequired,
    goSignUp: PropTypes.func.isRequired
}

const CustomModal = styled.div`
    outline: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    width: 600px;
    height: 500px;
    margin: auto;
    background-color: #505050;
    display: flex;
    flex-direction: column;
    color: #D0D0D0;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 10px;
`

const CustomTextField = styled(FilledInput)`
    & .input {
        color: #D0D0D0;
    }
    margin-bottom: 10px;
`

export default ContactBody
