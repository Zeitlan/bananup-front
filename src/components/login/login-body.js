/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import { FilledInput } from '@material-ui/core'
import ModalTitleBox from './modal-title-box';
import ModalBottomActions from './modal-bottom-actions';


class LoginBody extends React.Component {
  render() {
    return (
        <CustomModal>
            <ModalTitleBox title='Se connecter' _closeModal={this.props._closeModal} />
            <Content>
                <p>{"Nom dutilisateur / Mail"}</p>
                <CustomTextField
                    placeholder="Email"
                    classes={{input: 'input'}}
                    type='email'
                />
                 <p>Mot de passe</p>
                <CustomTextField
                    placeholder="Mot de passe"
                    classes={{input: 'input'}}
                    type='password'
                />
                <SubFormActions>
                    <a>Mot de passe oublié</a>
                    <a onClick={this.props.goSignUp} className={'signup'}>{"S'inscrire"}</a>
                </SubFormActions>
            </Content>
            <ModalBottomActions text='Se connecter' action={this.props._closeModal}/>
        </CustomModal>
    )
  }
}


LoginBody.propTypes = {
    _closeModal: PropTypes.func.isRequired,
    goSignUp: PropTypes.func.isRequired
}

const SubFormActions = styled.div`
    flex-direction: row;
    display: flex;
    color: #A0A0A0;
    font-size: 90%;
    a {
        cursor: pointer;
    }
    .signup {
        margin-left: auto;
    }
`
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

export default LoginBody
