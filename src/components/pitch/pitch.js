/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import upload from './upload.png'
import customer from './customer.png'
import improvement from './improvement.png'
class Pitch extends React.Component {

  render() {
    return (
        <Container>
            <PitchTitle>{"Qu'est-ce que Bananup ?"}</PitchTitle>
            <PitchRow>
                <PitchElement>
                    <PitchImg src={upload}/>
                    <PitchSubTitle>Partager vos vidéos</PitchSubTitle>
                    <PitchText>Afin de permettre à la communauté de</PitchText>
                    <PitchText>Bananup de t&apos;aider !</PitchText>
                </PitchElement>
                <PitchElement>
                    <PitchImg src={customer}/>
                    <PitchSubTitle>Recevoir ou donner des conseils</PitchSubTitle>
                    <PitchText>Et gagnez en réputation</PitchText>
                    <PitchText>grâce à notre système de votes !</PitchText>
                </PitchElement>
                <PitchElement>
                    <PitchImg src={improvement}/>
                    <PitchSubTitle>Gagner en compétences</PitchSubTitle>
                    <PitchText>Que ce soit en aidant</PitchText>
                    <PitchText>ou en étant aidé !</PitchText>
                </PitchElement>
            </PitchRow>
        </Container>
    )
  }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const PitchElement = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 20%;
    margin: auto;
    margin-top: 0;
    padding: 10px;
    max-width: 400px;
    min-width: 200px;
    text-align: center;
`
const PitchImg = styled.img`
    height: 100px;
    margin: auto;
    margin-bottom: 10px;
`
const PitchTitle = styled.h2`
    color: #969595;
    margin: 4px;
    font-size: 200%;
    margin-bottom: 20px;
`
const PitchSubTitle = styled.h2`
    color: #969595;
    margin: 4px;
    font-size: 125%;
`
const PitchText= styled.span`
    color: #747373;
    font-size: 100%;
`
const PitchRow = styled.div`
    width: 100%;
    margin: auto;
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
`

export default Pitch
