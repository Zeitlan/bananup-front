import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import imgWoW from "./world-of-warcraft.jpg"
class Category extends React.Component {
    
  state = {
    hover: false
  }
  render() {
    const { title, nb_videos } = this.props
    return (
        <Container onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
            <ImgContainer hover={this.state.hover} src={imgWoW}/>
            <CategoryDescription>
              <div className={"category-information"}>
                <CustomCaption>
                  <div>{title}</div>
                  <div className={"category-subinfo"}>{nb_videos} vidéos</div>
                </CustomCaption>
              </div>
            </CategoryDescription>
        </Container>
    )
  }
}

// PropTypes
Category.propTypes = {
  title: PropTypes.string.isRequired,
  nb_videos: PropTypes.string.isRequired,
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


const CategoryDescription= styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  width: 100%;
  .category-information{
    display: flex;
    flex-direction: column;
  }

`
const CustomCaption = styled.div`
  color: #969595;
  margin: 4px;
  font-size: 16px;
  .category-subinfo {
    color: #747373;
    font-size: 12px;
  }
`

export default Category
