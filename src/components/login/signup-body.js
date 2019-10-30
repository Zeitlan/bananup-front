import React, { useState } from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import { FilledInput, Grid } from '@material-ui/core'
import ModalTitleBox from '../modal/modal-title-box';
import ModalBottomActions from '../modal/modal-bottom-actions';

import { useMutation } from '@apollo/react-hooks';
import { SIGNUP_MUTATION } from '@/queries/user'

function SignupBody (props) {
    const [input, inputSet] = useState({
        email: '',
        username: '',
        password1: '',
        password2: '',
    })
    const [error, errorSet] = useState([])

    const [signUp] = useMutation(SIGNUP_MUTATION, {
        onCompleted: ({ registerUser }) => {
            if (!registerUser.user) {
                errorSet(registerUser.errors)
            } else {
                props._closeModal()
            }
        },
    });


    const _signUp = () => {
        signUp({variables : { input }})
    }
    const _handleTextFieldChange = (e) => {
        inputSet({
            ...input,
            [e.target.name]: e.target.value,
        });
    }
    
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            _signUp()
        }
    }

    const _getErrorFromField = (field, errors) => {
        let e = errors.find((e) => e.field === field)
        return e ? <ErrorMessage>{e.messages[0]}</ErrorMessage> : undefined
    }

    console.log(error)
    return (
        <CustomModal>
            <ModalTitleBox title='Sign up' _closeModal={props._closeModal}/>
            <Content onKeyDown={_handleKeyDown}>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <p>Username</p>
                        <CustomTextField
                            placeholder="Username"
                            fullWidth={true}
                            classes={{input: 'input'}}
                            value={input.username}
                            name="username"
                            onChange={_handleTextFieldChange}
                        />
                        {_getErrorFromField("username", error)}
                    </Grid>
                    <Grid item xs={12}>
                        <p>Mail</p>
                        <CustomTextField
                            placeholder="E-Mail"
                            fullWidth={true}
                            classes={{input: 'input'}}
                            type='email'
                            name="email"
                            value={input.email}
                            onChange={_handleTextFieldChange}
                        />
                        {_getErrorFromField("email", error)}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <p>Password</p>
                        <CustomTextField
                            placeholder="Password"
                            fullWidth={true}
                            classes={{input: 'input'}}
                            type='password'
                            name="password1"
                            value={input.password1}
                            onChange={_handleTextFieldChange}
                        />
                        {_getErrorFromField("password1", error)}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <p>Confirm password</p>
                        <CustomTextField
                            placeholder="Confirm password"
                            fullWidth={true}
                            classes={{input: 'input'}}
                            type='password'
                            name="password2"
                            value={input.password2}
                            onChange={_handleTextFieldChange}
                        />
                        {_getErrorFromField("password2", error)}
                    </Grid>
                </Grid>
            </Content>
            <ModalBottomActions text="Sign up" action={_signUp}/>
        </CustomModal>
    )
}


SignupBody.propTypes = {
    _closeModal: PropTypes.func.isRequired,
    goLogin: PropTypes.func.isRequired,
}

const CustomModal = styled.div`
    outline: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    width: 700px;
    height: 600px;
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


const ErrorMessage = styled.label`
    font-size: 12px;
    color: #e84e4e;
` 

const CustomTextField = styled(FilledInput)`
    & .input {
        color: #D0D0D0;
    }
    margin-bottom: 10px;
    margin-right: 10px;
`

export default SignupBody
