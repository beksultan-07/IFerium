import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'
import { HeaderLogoText } from '../Header/HeaderSC'

const bg = require('../../assets/FooterBG.jpg') 

export const FooterWrap = styled.footer`
    background: url(${bg}) 0 0 / cover;
    padding: 100px 0 30px;
`

export const FooterLinks = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const FooterLink = styled(Link)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #F4F5F7;
    margin: 5px 0;
    :first-child{
        margin: 0 0 5px 0;
    }
`

export const FooterContent = styled(Flex)`
    @media(max-width: 910px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    @media(max-width: 600px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
    }
`

export const FooterLogoText = styled(HeaderLogoText)`
    display: block;
`