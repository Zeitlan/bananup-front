import React from 'react'
import styled from 'styled-components'
import imgWoW from "./world-of-warcraft.jpg"
class Category extends React.Component {
    
  render() {
    return (
        <Container>
            <ImgContainer src={imgWoW}/>
        </Container>
    )
  }
}

// PropTypes
Category.propTypes = {
}

// Styles
const Container = styled.div `
    flex: 0 1 20%;
    margin: auto;
    max-height: 300px;
    min-width: 150px;
`
const ImgContainer = styled.img`
    border-radius: 4%;
    max-width: 100%;
    max-height: 100%;
`

export default Category
