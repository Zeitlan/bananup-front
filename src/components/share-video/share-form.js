/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import { FilledInput,FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import ModalTitleBox from '../modal/modal-title-box';
import ModalBottomActions from '../modal/modal-bottom-actions';
import { withContext } from '../../context'
import YouTubePlayer from '../video-player/youtube-player';

let rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/

@withContext(['categories'],['sendSharedVideo', 'getCategories'])
class ShareForm extends React.Component {

  state = {
    link: '',
    name: '',
    description: '',
    category: undefined,
  }

  _getIdFromYouTubeVideo = () => {
    let link = undefined
    if (this.state.link) {
      let matching = this.state.link.match(rx)
      if (matching) {
        link = matching[1]
      }
    }
    return link
  }

  _sendSharedVideo = () => {
    const { actions: { sendSharedVideo } } = this.props
    const { link, name, description , category } = this.state
    let idVideo = this._getIdFromYouTubeVideo(link)
    sendSharedVideo(idVideo, name, description , category).then((error) => {
      console.log(error)
      if (error === undefined) {
        this.props._closeModal()
      }
    })
  }

  _handleTextFieldChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    const { actions: {getCategories}} = this.props
    getCategories()
  }
  
  render() {
    let link = this._getIdFromYouTubeVideo(this.state.link)
    const { state: {categories}} = this.props
    console.log(categories)
    return (
        <CustomModal>
            <ModalTitleBox title='Partager une vidéo' _closeModal={this.props._closeModal} />
            <Content>
                <p>{"Titre"}</p>
                <CustomTextField
                    placeholder="Titre"
                    classes={{input: 'input'}}
                    name="name"
                    onChange={this._handleTextFieldChange}
                />
                <p>Lien</p>
                <CustomTextField
                    placeholder="Lien vers la vidéo"
                    classes={{input: 'input'}}
                    name="link"
                    onChange={this._handleTextFieldChange}
                />
                {link && <VideoPreview videoId={link}/>}
                <p>Description</p>
                <CustomTextField
                    placeholder="Description de la vidéo"
                    classes={{input: 'input'}}
                    name="description"
                    onChange={this._handleTextFieldChange}
                />
                <CustomFormControl>
                  <InputLabel classes={{root: "select-label"}}>Categorie</InputLabel>
                  <CustomSelect
                    value={this.state.category}
                    onChange={this._handleTextFieldChange}
                    name="category"
                    classes={{root: 'select-root'}}
                    inputProps={{
                        classes: {
                            icon: 'icon',
                            select: 'select'
                        },
                    }}
                  >
                    {categories && categories.map((category) => <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)}
                  </CustomSelect>
                </CustomFormControl>
            </Content>
            <ModalBottomActions text='Partager la vidéo' action={this._sendSharedVideo}/>
        </CustomModal>
    )
  }
}


ShareForm.propTypes = {
    actions: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    _closeModal: PropTypes.func.isRequired,
}

const CustomModal = styled.div`
    outline: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    width: 680px;
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
  overflow: scroll;
`

const VideoPreview = styled(YouTubePlayer)`
  width: 100%;
  margin: auto;
`

const CustomFormControl = styled(FormControl)`
    .select-label {
      color: #F2F2F2
    };
`
const CustomSelect = styled(Select)`
    .select {
        color: #F2F2F2;
    };
    .icon {
        fill: #F2F2F2;
    };
    ::after {
        border-bottom-color: #F2F2F2 !important;
    };
    ::before {
        border-bottom-color: #F2F2F2 !important;
    };
`
const CustomTextField = styled(FilledInput)`
    & .input {
        color: #D0D0D0;
    }
    margin-bottom: 10px;
`

export default ShareForm
