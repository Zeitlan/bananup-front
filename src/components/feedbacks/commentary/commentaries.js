/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import Commentary from './commentary'
class CommentarySection extends React.Component {

  render() {
    return (
        <Container>
          <Commentary/>
          <Commentary/>
          <Commentary/>
          <Commentary/>
          <Commentary/>
        </Container>
    )
  }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default CommentarySection
