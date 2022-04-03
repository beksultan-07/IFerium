import React from 'react'
import { Container, Flex } from '../../uikit/uikit'
import { HeaderLogo, HeaderLogoWrap, HeaderWrap, HeaderLogoText, HeaderLinks, HeaderLink, LangDropDown, Burger, LangIcon, LangWrap } from './HeaderSC'
import LangDD from './langDropDown/LangDD';



const Header:React.FC = () => {
    const logo = require("../../assets/logo.svg")['default'];
    const DropDownIcon = require("../../assets/DropDown.svg")['default'];
    const BurgerIcon = require("../../assets/burger.svg")['default'];
    const LangIco = require("../../assets/langs/En.svg")['default']


    return (
        <HeaderWrap>
            <Container>
                <Flex justify='space-between' align='center'>
                    <HeaderLogoWrap to='/'>
                        <HeaderLogo src={logo}/>
                        <HeaderLogoText>IFEREUM</HeaderLogoText>
                    </HeaderLogoWrap> 
    
                    <HeaderLinks>
                        <HeaderLink to='/'>Roadmap</HeaderLink>
                        <HeaderLink to='/'>Contact</HeaderLink>
                    </HeaderLinks>
    
                    <Flex margin='0 0 0 auto'>
                        <LangWrap align='center'>
                            {/* <span style={{color: '#fff'}}>En</span> */}
                            <LangIcon src={LangIco}/>
                            <LangDropDown src={DropDownIcon}/>
                            {/* <LangDD/> */}
                        </LangWrap>
                        {/* <Burger src={BurgerIcon}/> */}
                    </Flex>
                </Flex>
            </Container>
        </HeaderWrap>
    )
}

export default Header