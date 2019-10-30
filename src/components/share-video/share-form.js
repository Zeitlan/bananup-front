/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

import { useMutation, useQuery } from '@apollo/react-hooks'
import { ADD_VIDEO } from '@/queries/videos'
import { ALL_CATEGORIES } from '@/queries/categories'

import PropTypes from 'prop-types'
import { FilledInput,FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import ModalTitleBox from '../modal/modal-title-box';
import ModalBottomActions from '../modal/modal-bottom-actions';
import YouTubePlayer from '../video-player/youtube-player';
import { useSnackbar } from 'notistack'

let rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/

function ShareForm(props) {

  const {data, error, loading} = useQuery(ALL_CATEGORIES)
  let categories
  if (!error && !loading)
    categories = data.allCategories.results

  const [input, inputSet] = React.useState({
    link: '',
    name: '',
    description: '',
    category: undefined
  })

  const { enqueueSnackbar } = useSnackbar()

  const [addVideo, {
    error: mutationError }
  ] = useMutation(ADD_VIDEO)


  const _getIdFromYouTubeVideo = (link) => {
    let id = undefined
    if (link) {
      let matching = link.match(rx)
      if (matching) {
        id = matching[1]
      }
    }
    return id
  }


  const _sendSharedVideo = () => {
    addVideo(
      { variables: {
        input: {
          link: _getIdFromYouTubeVideo(input.link),
          name: input.name,
          description: input.description,
          category: input.category
        }
      }
    }
    )
    if (mutationError){
      enqueueSnackbar(JSON.stringify(mutationError, null, 2), { variant: "error"})
    }
    else {
      props._closeModal()
    }
  }

  const _handleTextFieldChange = (e) => {
    inputSet({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  let videoId = _getIdFromYouTubeVideo(input.link)
  return (
  <CustomModal>
      <ModalTitleBox title='Share a video' _closeModal={props._closeModal} />
      <Content>
          <p>Title</p>
          <CustomTextField
              placeholder="Title"
              classes={{input: 'input'}}
              name="name"
              onChange={_handleTextFieldChange}
          />
          <p>VideoId</p>
          <CustomTextField
              placeholder="Video's link"
              classes={{input: 'input'}}
              name="link"
              onChange={_handleTextFieldChange}
          />
          {input.link && <VideoPreview videoId={videoId}/>}
          <p>Description</p>
          <CustomTextField
              placeholder="Video's description"
              classes={{input: 'input'}}
              name="description"
              onChange={_handleTextFieldChange}
          />
          <CustomFormControl>
            <InputLabel classes={{root: "select-label"}}>Category</InputLabel>
            <CustomSelect
              value={input.category}
              onChange={_handleTextFieldChange}
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
      <ModalBottomActions text='Share your video' action={_sendSharedVideo}/>
  </CustomModal>
    )
  }


ShareForm.propTypes = {
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
