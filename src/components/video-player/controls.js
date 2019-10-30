import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function Controls(props) {
    return (
        <Container >
            <ControlContainer>
            </ControlContainer>
            {props.children}
        </Container>
    )
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
