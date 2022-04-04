import React from 'react'
import { MiniText, Text } from '../../uikit/fonts'
import { Container, Flex } from '../../uikit/uikit'
import { HeaderLogo, HeaderLogoText, HeaderLogoWrap } from '../Header/HeaderSC'
import { FooterContent, FooterLink, FooterLinks, FooterWrap, FooterLogoText } from './FooterSC'
import {useTranslation} from "react-i18next";


const Footer:React.FC = () => {
  const logo = require("../../assets/logo.svg")['default'];

  const {t} = useTranslation()


  return (
    <FooterWrap id='aboutUs'>
      <Container>
        <FooterContent justify='space-between' align='flex-start'>
          <HeaderLogoWrap to='/' style={{margin: '0', padding: 0}}>
              <HeaderLogo src={logo}/>
              <FooterLogoText>IFEREUM</FooterLogoText>
          </HeaderLogoWrap> 

          <FooterLinks>
            <Text margin='0 0 32px 0'>{t("Footer.Block1.title")}</Text>

            <MiniText margin='0 0 5px 0'>
              {t("Footer.Block1.links.link1")}
              <FooterLink to='#' style={{color: '#FFEE2D', margin: '0 0 0 5px'}}>hello@metahash.org</FooterLink>
            </MiniText>
            <MiniText margin='5px 0'>
              {t("Footer.Block1.links.link2")}
              <FooterLink to='#' style={{color: '#FFEE2D', margin: '0 0 0 5px'}}>support@metahash.org</FooterLink>
            </MiniText>
            <MiniText margin='5px 0'>
              {t("Footer.Block1.links.link3")}
              <FooterLink to='#' style={{color: '#FFEE2D', margin: '0 0 0 5px'}}>pr@metahash.org</FooterLink>
            </MiniText>
          </FooterLinks>

          <FooterLinks>
            <Text margin='0 0 32px 0'>{t("Footer.Block2.title")}</Text>

            <FooterLink to='#'>{t("Footer.Block2.links.link1")}</FooterLink>
            <FooterLink to='#'>{t("Footer.Block2.links.link2")}</FooterLink>
            <FooterLink to='#'>{t("Footer.Block2.links.link3")}</FooterLink>
            <FooterLink to='#'>{t("Footer.Block2.links.link4")}</FooterLink>
            <FooterLink to='#'>{t("Footer.Block2.links.link5")}</FooterLink>
          </FooterLinks>

          <FooterLinks>
            <Text margin='0 0 32px 0'>{t("Footer.Block2.title")}</Text>

            <FooterLink to='#'>{t("Footer.Block3.links.link1")}</FooterLink>
            <FooterLink to='#'>{t("Footer.Block3.links.link2")}</FooterLink>
            <FooterLink to='#'>{t("Footer.Block3.links.link3")}</FooterLink>
            <FooterLink to='#'>{t("Footer.Block3.links.link4")}</FooterLink>
            <FooterLink to='#'>{t("Footer.Block3.links.link5")}</FooterLink>
          </FooterLinks>

        </FooterContent>

        <Flex justify='center' margin='50px'>
            <MiniText style={{fontSize: '14px'}}>© 2022 ifereum. All rights reserved</MiniText>
        </Flex>

      </Container>
    </FooterWrap>
  )
}

export default Footer