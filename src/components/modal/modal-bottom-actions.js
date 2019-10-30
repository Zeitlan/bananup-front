/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'


function ModalBottomActions(props) {
    return (
        <BottomActions>
            <CustomButton onClick={() => props.action()} classes={{root: 'root'}} color="primary" variant="contained">
                {props.text}
            </CustomButton>
        </BottomActions>
    )
}


ModalBottomActions.propTypes = {
    action: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

const BottomActions = styled.div`
    margin-top: auto;
    align-self: center;
    width: 80%;
    padding: 20px;
`
const CustomButton = styled(Button)`
    width: 100%;
`
export default ModalBottomActions
