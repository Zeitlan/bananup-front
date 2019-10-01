/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import upload from './upload.png'
import customer from './customer.png'
import improvement from './improvement.png'
import esportBackground from './esport-background.jpg'
class Pitch extends React.Component {
  render() {
    return (
        <Container>
            <BackgroundContainer>
                <PitchTitle>IMPROVE YOUR <ImportantText>GAMING SKILLS</ImportantText> EASILY<br/>THANKS TO <ImportantText>BANANUP</ImportantText> (Soon available...)</PitchTitle>
            </BackgroundContainer>
            <PitchRow>
                <PitchElement>
                    <PitchImg src={upload}/>
                    <PitchSubTitle>SHARE YOUR VIDEOS</PitchSubTitle>
                    <PitchText>And let Bananup&apos;s community</PitchText>
                    <PitchText>help you!</PitchText>
                </PitchElement>
                <PitchElement>
                    <PitchImg src={customer}/>
                    <PitchSubTitle>RECEIVE OR GIVE ADVICES</PitchSubTitle>
                    <PitchText>Earn reputation</PitchText>
                    <PitchText>thanks to our vote system!</PitchText>
                </PitchElement>
                <PitchElement>
                    <PitchImg src={improvement}/>
                    <PitchSubTitle>IMPROVE YOUR SKILLS</PitchSubTitle>
                    <PitchText>By helping</PitchText>
                    <PitchText>or being helped!</PitchText>
                </PitchElement>
            </PitchRow>
        </Container>
    )
  }
}

const BackgroundContainer = styled.div`
    background: linear-gradient(
                rgba(240, 100, 13, 0.30), 
                rgba(48, 48, 48, 1)
                ),url(${esportBackground});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
`
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
    margin: auto;
    margin-left: 10%;
    margin-top: 250px;
    color: #F2F2F2;
    justify-content:center;
    align-content:center;
    font-size: 42px;
    font-weight: bold;
    @media (max-width: 600px) {
        font-size: 26px;
    }
    @media (max-width: 960px) {
        font-size: 34px;
    }
`

const ImportantText = styled.span`
    color: #F0640D;
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
