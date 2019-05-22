/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

class Commentary extends React.Component {

  render() {
    return (
        <Container>
          This is a commentary
        </Container>
    )
  }
}

const Container = styled.div`
    display: block;
    border: 2px solid palevioletred;
    border-radius: 3px;
`

export default Commentary
