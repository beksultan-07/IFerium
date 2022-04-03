import React from 'react'
import { Link } from 'react-router-dom'
import { BigText, MiniText, PreTitle } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import { IFDIcon, IFDItem, IFDItemsWrap, IFDNum, IFDTextWrap, IFDViewMore } from './IFeruemDescSC'

const IFeruemDesc:React.FC = () => {
  const Icon = require('../../../assets/arrowRight.svg')['default']
  

  return (
    <Container>
      <IFDTextWrap>
        <BigText>What is IFEREUM</BigText>
        <PreTitle margin='30px 0' color='#FFF' style={{fontWeight: '400'}}>IFEREUM is a next-generation network based on the Blockchain 4.0 technology for sharing digital assets and a platform for creating and managing decentralized apps and services in real-time</PreTitle>
        <PreTitle>Four components of the system:</PreTitle>
      </IFDTextWrap>

      <IFDItemsWrap>
        <IFDItem>
          <Flex align='flex-start'>
            <IFDNum>1</IFDNum>
            <PreTitle color='#FFF'>The fastest and most secure Blockchain</PreTitle>
          </Flex>
          <MiniText margin='10px 0 20px'>More than five billion transactions per day, no more than three seconds to validate a transaction</MiniText>
          <IFDViewMore to='#'>
            <PreTitle>More</PreTitle>
            <IFDIcon src={Icon}/>
          </IFDViewMore>
        </IFDItem>

        <IFDItem>
          <Flex align='flex-start'>
            <IFDNum>2</IFDNum>
            <PreTitle color='#FFF'>New generation of Smart Contracts</PreTitle>
          </Flex>
          <MiniText margin='10px 0 20px'>Decentralized real-time applications that are operated like regular web services and developed</MiniText>
          <IFDViewMore to='#'>
            <PreTitle>More</PreTitle>
            <IFDIcon src={Icon}/>
          </IFDViewMore>
        </IFDItem>

        <IFDItem>
          <Flex align='flex-start'>
            <IFDNum>3</IFDNum>
            <PreTitle color='#FFF'>Decentralized Internet</PreTitle>
          </Flex>
          <MiniText margin='10px 0 20px'>Decentralized apps directory and a multi-asset wallet that won't overload your computer </MiniText>
          <IFDViewMore to='#'>
            <PreTitle>More</PreTitle>
            <IFDIcon src={Icon}/>
          </IFDViewMore>
        </IFDItem>

        <IFDItem>
          <Flex align='flex-start'>
            <IFDNum>4</IFDNum>
            <PreTitle color='#FFF'>IFEREUM network exchange asset</PreTitle>
          </Flex>
          <MiniText margin='10px 0 20px'>IFEREUM is used to ensure the reliability of the network, exchange services</MiniText>
          <IFDViewMore to='#'>
            <PreTitle>More</PreTitle>
            <IFDIcon src={Icon}/>
          </IFDViewMore>
        </IFDItem>
      </IFDItemsWrap>
    </Container>
  )
}

export default IFeruemDesc