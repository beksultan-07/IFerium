import React from 'react'
import { MiniText, Text } from '../../uikit/fonts'
import { Container, Flex } from '../../uikit/uikit'
import { HeaderLogo, HeaderLogoText, HeaderLogoWrap } from '../Header/HeaderSC'
import { FooterContent, FooterLink, FooterLinks, FooterWrap } from './FooterSC'


const Footer:React.FC = () => {
  const logo = require("../../assets/logo.svg")['default'];

  return (
    <FooterWrap>
      <Container>
        <FooterContent justify='space-between' align='flex-start'>
          <HeaderLogoWrap to='/' style={{margin: '0', padding: 0}}>
              <HeaderLogo src={logo}/>
              <HeaderLogoText>IFEREUM</HeaderLogoText>
          </HeaderLogoWrap> 

          <FooterLinks>
            <Text margin='0 0 32px 0'>Contacts</Text>

            <MiniText margin='0 0 5px 0'>
              Feedback at 
              <FooterLink to='#' style={{color: '#FFEE2D', margin: '0 0 0 5px'}}>hello@metahash.org</FooterLink>
            </MiniText>
            <MiniText margin='5px 0'>
              Support at 
              <FooterLink to='#' style={{color: '#FFEE2D', margin: '0 0 0 5px'}}>support@metahash.org</FooterLink>
            </MiniText>
            <MiniText margin='5px 0'>
              Media enquiries 
              <FooterLink to='#' style={{color: '#FFEE2D', margin: '0 0 0 5px'}}>pr@metahash.org</FooterLink>
            </MiniText>
          </FooterLinks>

          <FooterLinks>
            <Text margin='0 0 32px 0'>Quick links</Text>

            <FooterLink to='#'>What is</FooterLink>
            <FooterLink to='#'>White Paper</FooterLink>
            <FooterLink to='#'>One-Pager</FooterLink>
            <FooterLink to='#'>FAQ</FooterLink>
            <FooterLink to='#'>For Exchanges</FooterLink>
          </FooterLinks>

          <FooterLinks>
            <Text margin='0 0 32px 0'>Support</Text>

            <FooterLink to='#'>Terms of Services</FooterLink>
            <FooterLink to='#'>Terms of Coin Sale</FooterLink>
            <FooterLink to='#'>Anti-Spam Policy</FooterLink>
            <FooterLink to='#'>Privacy Policy</FooterLink>
            <FooterLink to='#'>Risk Agreement</FooterLink>
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