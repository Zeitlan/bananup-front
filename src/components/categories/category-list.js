import React from 'react'
import styled from 'styled-components'
import Category from './category'
class CategoryList extends React.Component {
    
  render() {
    return (
        <Container>
            <CustomTitle>Populaires</CustomTitle>
            <List>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </List>
        </Container>
    )
  }
}

// PropTypes
CategoryList.propTypes = {
}

// Styles

const Container = styled.div`
    margin-left: 200px;
    margin-right: 20px;
    margin-top: 100px;
    margin-bottom: 100px;
`

const CustomTitle = styled.h2`
    color: #969595;
`
const List =  styled.div`
    margin: auto;
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
`

export default CategoryList
