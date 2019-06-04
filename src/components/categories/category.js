import React from 'react'
import styled from 'styled-components'
import imgWoW from "./world-of-warcraft.jpg"
class Category extends React.Component {
    
  state = {
    hover: false
  }
  render() {
    return (
        <Container onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
            <ImgContainer hover={this.state.hover} src={imgWoW}/>
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
    min-width: 150px;
    max-width: 230px;
    position: relative;
`
const ImgContainer = styled.img`
    border-radius: 4%;
    max-width: 100%;
    max-height: 100%;
    scale: ${(props) => props.hover ? 2.1 : 1};
`

export default Category
