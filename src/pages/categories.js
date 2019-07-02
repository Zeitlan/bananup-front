import React from 'react'
import styled from 'styled-components'

import CategoryList from '../components/categories/category-list'

class Categories extends React.Component {

  render() {
    return (
        <Container>
            <CustomTitle>Categories</CustomTitle>
            <CategoryList/>
        </Container>)
  }
}

const Container = styled.div`
`

const CustomTitle = styled.h2`
    color: #969595;
`

export default Categories
