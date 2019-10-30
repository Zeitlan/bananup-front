import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

function Category(props) {
  const [hover, hoverSet] = useState(false)
  const { category } = props
  return (
      <Container onMouseEnter={() => hoverSet(true)} onMouseLeave={() => hoverSet(false)}>
          <Link to={"/categorie/"+category.id}>
            <ImgContainer hover={hover} src={category.imageUrl}/>
          </Link>
          <CategoryDescription>
            <div className={"category-information"}>
              <CustomCaption>
                <div>{category.name}</div>
                <div className={"category-subinfo"}>{category.videoCount} vidéo{category.videoCount > 1 ? 's' : ''}</div>
              </CustomCaption>
            </div>
          </CategoryDescription>
      </Container>
  )
}

// PropTypes
Category.propTypes = {
  category: PropTypes.object.isRequired,
}

// Styles
const Container = styled.div `
    flex: 0 1 20%;
    margin: auto;
    min-width: 120px;
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
