import React from 'react'
import { Container, Flex } from '../../uikit/uikit'
import { HeaderLogo, HeaderLogoWrap, HeaderWrap, HeaderLogoText, HeaderLinks, HeaderLink, LangDropDown, Burger } from './HeaderSC'



const Header:React.FC = () => {
    const logo = require("../../assets/logo.svg")['default'];
    const DropDownIcon = require("../../assets/DropDown.svg")['default'];
    const BurgerIcon = require("../../assets/burger.svg")['default'];


    return (
        <HeaderWrap>
            <Container>
                <Flex justify='space-between' align='center'>
                    <HeaderLogoWrap to='/'>
                        <HeaderLogo src={logo}/>
                        <HeaderLogoText>IFEREUM</HeaderLogoText>
                    </HeaderLogoWrap>
    
                    <HeaderLinks>
                        <HeaderLink to='/'>White paper</HeaderLink>
                        <HeaderLink to='/'>Roadmap</HeaderLink>
                        <HeaderLink to='/'>Contact</HeaderLink>
                    </HeaderLinks>
    
                    <Flex margin='0 0 0 auto'>
                        <Flex align='center'>
                            <span style={{color: '#fff'}}>En</span>
                            <LangDropDown src={DropDownIcon}/>
                        </Flex>
                        <Burger src={BurgerIcon}/>
                    </Flex>
                </Flex>
            </Container>
        </HeaderWrap>
    )
}

export default Header