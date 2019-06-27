/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Close from '@material-ui/icons/Close'


class ModalTitleBox extends React.Component {
  render() {
    return (
        <TitleBox>
            <CustomIcon  onClick={() => this.props._closeModal()}>
                <Close className={"back"} />
            </CustomIcon>
            <h2 className={"title"}>{this.props.title}</h2>
        </TitleBox>
    )
  }
}


ModalTitleBox.propTypes = {
    _closeModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}
const TitleBox = styled.div `
    width: 100%;
    height: 20%;
    border-radius: 5px 5px 0px 0px;

    border-bottom: 1px solid #424242;
    background-color: #F0640D;
    display: flex;
    flex-direction: column;
    color: #F2F2F2;
    .title {
        margin: 0px;
        padding-left: 20px;
    }
`

const CustomIcon = styled.div`
    margin-left:auto;
    cursor: pointer;
    .back {
        padding: 10px;
    }
`
export default ModalTitleBox
