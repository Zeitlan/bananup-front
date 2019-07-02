/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import { FilledInput } from '@material-ui/core'
import ModalTitleBox from '../modal/modal-title-box';
import ModalBottomActions from '../modal/modal-bottom-actions';
import { withContext } from '../../context'
import { withSnackbar } from 'notistack';

@withSnackbar
@withContext([],['login'])
class LoginBody extends React.Component {

  state = {
    email: '',
    password: '',
  }

  _login = () => {
    const { actions: { login } } = this.props
    const { email, password } = this.state
    login(email, password).then((error) => {
      console.log(error)
      if (error === undefined) {
        this.props._closeModal()
      }
      else {
          this.props.enqueueSnackbar(JSON.stringify(error, null, 2), { variant: "error"})
      }
    })
  }

  _handleTextFieldChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  _handleKeyDown = (e ) => {
      if (e.key === 'Enter'){
          this._login()
      }
  }
  render() {
    return (
        <CustomModal>
            <ModalTitleBox title='Login' _closeModal={this.props._closeModal} />
            <Content onKeyDown={this._handleKeyDown}>
                <p>{"Username"}</p>
                <CustomTextField
                    placeholder="Username"
                    classes={{input: 'input'}}
                    type='email'
                    name="email"
                    onChange={this._handleTextFieldChange}
                />
                 <p>Password</p>
                <CustomTextField
                    placeholder="Password"
                    classes={{input: 'input'}}
                    type='password'
                    name="password"
                    onChange={this._handleTextFieldChange}
                />
                <SubFormActions>
                    <a>Forgotten password</a>
                    <a onClick={this.props.goSignUp} className={'signup'}>{"Sign up"}</a>
                </SubFormActions>
            </Content>
            <ModalBottomActions text='Login' action={this._login}/>
        </CustomModal>
    )
  }
}


LoginBody.propTypes = {
    actions: PropTypes.object.isRequired,
    _closeModal: PropTypes.func.isRequired,
    goSignUp: PropTypes.func.isRequired,
    enqueueSnackbar: PropTypes.func.isRequired
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
