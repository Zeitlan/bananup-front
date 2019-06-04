import React from 'react'
import styled from 'styled-components'
import Category from './category'
class CategoryList extends React.Component {
    
  render() {
    return (
        <Container>
            <TopRow>
                <CustomTitle>Catégories Populaires</CustomTitle>
                <More href="...">Voir plus..</More>
            </TopRow>
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
    margin: auto;
`
const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
`
const More = styled.a`
    margin: auto;
    margin-right: 0;
    text-decoration-style: none;
    color: #747373;
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
