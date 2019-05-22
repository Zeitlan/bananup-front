import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import PropTypes from 'prop-types'

class Controls extends React.Component {
    
  render() {
    return (
        <Container >
            <ControlContainer>
            </ControlContainer>
            {this.props.children}
        </Container>
    )
  }
}

// PropTypes
Controls.propTypes = {
    children: PropTypes
}

// Styles

const Container = styled.div`
    position: relative;
`
const ControlContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`
export default Controls
