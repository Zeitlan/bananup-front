import React, { useState } from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import { FilledInput } from '@material-ui/core'
import ModalTitleBox from '../modal/modal-title-box';
import ModalBottomActions from '../modal/modal-bottom-actions';

import { useMutation } from 'react-apollo';
import { LOGIN_MUTATION } from '@/queries/user';

function LoginBody(props) {

    const [input, inputSet] = useState({
        username: '',
        password: '',
    })

    const [error, errorSet] = useState([])

    const [login] = useMutation(LOGIN_MUTATION, {
        onCompleted: ({ loginUser }) => {
            if (!loginUser.token) {
                errorSet(loginUser.errors)
            } else {
                props._closeModal()
            }
        },
        update: (cache, { data: { loginUser: { token } }}) => {
            if (token)
                localStorage.setItem('token', token)
        },
    });

    const _login = () => {
        login({variables : { input }})
    }

    const _handleTextFieldChange = (e) => {
        inputSet({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const _handleKeyDown = (e ) => {
        if (e.key === 'Enter'){
            _login()
        }
    }

    const _getErrorFromField = (field, errors) => {
        let e = errors.find((e) => e.field === field)
        return e ? <ErrorMessage>{e.messages[0]}</ErrorMessage> : undefined
    }

    return (
        <CustomModal>
            <ModalTitleBox title='Login' _closeModal={props._closeModal} />
            <Content onKeyDown={_handleKeyDown}>
                <p>{"Username"}</p>
                <CustomTextField
                    placeholder="Username"
                    classes={{input: 'input'}}
                    name="username"
                    value={input.username}
                    onChange={_handleTextFieldChange}
                />
                {_getErrorFromField("username", error)}
                 <p>Password</p>
                <CustomTextField
                    placeholder="Password"
                    classes={{input: 'input'}}
                    type='password'
                    name="password"
                    value={input.password}
                    onChange={_handleTextFieldChange}
                />
                {_getErrorFromField("password", error)}
                {_getErrorFromField("", error)}
                <SubFormActions>
                    <a>Forgotten password</a>
                    <a onClick={props.goSignUp} className={'signup'}>{"Sign up"}</a>
                </SubFormActions>
            </Content>
            <ModalBottomActions text='Login' action={_login}/>
        </CustomModal>
    )
}


LoginBody.propTypes = {
    _closeModal: PropTypes.func.isRequired,
    goSignUp: PropTypes.func.isRequired,
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


const ErrorMessage = styled.label`
    font-size: 12px;
    color: #e84e4e;
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
