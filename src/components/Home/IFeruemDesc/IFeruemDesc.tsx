import React from 'react'
import { Link } from 'react-router-dom'
import { BigText, MiniText, PreTitle } from '../../../uikit/fonts'
import { Container, Flex } from '../../../uikit/uikit'
import { IFDIcon, IFDItem, IFDItemsWrap, IFDNum, IFDTextWrap, IFDViewMore } from './IFeruemDescSC'
import {useTranslation} from "react-i18next";


const IFeruemDesc:React.FC = () => {
  const Icon = require('../../../assets/arrowRight.svg')['default']
  
  const {t} = useTranslation()


  return (
    <Container>
      <IFDTextWrap>
        <BigText>{t("Home.IFD.title")}</BigText>
        <PreTitle margin='30px 0' color='#FFF' style={{fontWeight: '400'}}>
          {t("Home.IFD.text")}
        </PreTitle>
        <PreTitle>{t("Home.IFD.pre-title")}</PreTitle>
      </IFDTextWrap>

      <IFDItemsWrap>
        <IFDItem>
          <Flex align='flex-start'>
            <IFDNum>1</IFDNum>
            <PreTitle color='#FFF'>{t("Home.IFD.Blocks.Block1.title")}</PreTitle>
          </Flex>
          <MiniText margin='10px 0 20px'>{t("Home.IFD.Blocks.Block1.text")}</MiniText>
          <IFDViewMore to='#'>
            <PreTitle>More</PreTitle>
            <IFDIcon src={Icon}/>
          </IFDViewMore>
        </IFDItem>

        <IFDItem>
          <Flex align='flex-start'>
            <IFDNum>2</IFDNum>
            <PreTitle color='#FFF'>{t("Home.IFD.Blocks.Block2.title")}</PreTitle>
          </Flex>
          <MiniText margin='10px 0 20px'>{t("Home.IFD.Blocks.Block2.text")}</MiniText>
          <IFDViewMore to='#'>
            <PreTitle>More</PreTitle>
            <IFDIcon src={Icon}/>
          </IFDViewMore>
        </IFDItem>

        <IFDItem>
          <Flex align='flex-start'>
            <IFDNum>3</IFDNum>
            <PreTitle color='#FFF'>{t("Home.IFD.Blocks.Block3.title")}</PreTitle>
          </Flex>
          <MiniText margin='10px 0 20px'>{t("Home.IFD.Blocks.Block3.text")}</MiniText>
          <IFDViewMore to='#'>
            <PreTitle>More</PreTitle>
            <IFDIcon src={Icon}/>
          </IFDViewMore>
        </IFDItem>

        <IFDItem>
          <Flex align='flex-start'>
            <IFDNum>4</IFDNum>
            <PreTitle color='#FFF'>{t("Home.IFD.Blocks.Block4.title")}</PreTitle>
          </Flex>
          <MiniText margin='10px 0 20px'>{t("Home.IFD.Blocks.Block4.text")}</MiniText>
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