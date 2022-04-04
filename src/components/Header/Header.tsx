import React from 'react'
import { Container, Flex } from '../../uikit/uikit'
import AdaptiveBurgerMenu from './adaptiveBurgerMenu/AdaptiveBurgerMenu';
import { HeaderLogo, HeaderLogoWrap, HeaderWrap, HeaderLogoText, HeaderLinks, HeaderLink, LangDropDown, LangIcon, LangWrap, RightMenu, Burger } from './HeaderSC'
import LangDD from './langDropDown/LangDD';


type Props = {
    lang: string;
    setLang: any;
    showDD: boolean;
    setShowDD: any;
}

const Header:React.FC<Props> = (props) => {
    const logo = require("../../assets/logo.svg")['default'];
    const DropDownIcon = require("../../assets/DropDown.svg")['default'];
    
    const LangIco1 = require("../../assets/langs/En.svg")['default']
    const LangIco2 = require("../../assets/langs/ru.png")
    
    const BurgerIcon = require("../../assets/burger.svg")['default']

    const [showBurgerMenu, setShowBurgerMenu] = React.useState(false)


    function checkLang(){
        if(props.lang === 'en'){
            return LangIco1
        }
        if(props.lang === 'ru'){
            return LangIco2
        }
    }

    function langHandler(e: React.MouseEvent){
        e.stopPropagation()
        props.setShowDD(true)
    }

    return (
        <HeaderWrap>
            <Container>
                <Flex justify='space-between' align='center'>
                    <HeaderLogoWrap to='/'>
                        <HeaderLogo src={logo}/>
                        <HeaderLogoText>IFEREUM</HeaderLogoText>
                    </HeaderLogoWrap> 
    
                    <HeaderLinks>
                        <HeaderLink 
                            // onClick={roadMapSection.onClick}
                        >Roadmap</HeaderLink>
                        <HeaderLink
                            // onClick={aboutUsSection.onClick}
                        >Contact</HeaderLink>
                    </HeaderLinks>
    
                    <RightMenu margin='0 0 0 auto'>
                        <LangWrap align='center' onClick={(e)=> langHandler(e)}>
                            <LangIcon src={checkLang()} />
                            <LangDropDown src={DropDownIcon}/>
                            <LangDD activeLang={props.lang} ddShow={props.showDD} setActiveLang={props.setLang}/>
                        </LangWrap>
                    </RightMenu>


                    <Burger src={BurgerIcon} onClick={() => setShowBurgerMenu(!showBurgerMenu)}/>
                    <AdaptiveBurgerMenu 
                        showBurgerMenu={showBurgerMenu}
                        setBM={setShowBurgerMenu}
                        lang={props.lang}
                        setLang={props.setLang}
                        setShowDD={props.setShowDD}
                        showDD={props.showDD}
                    />
                </Flex>
            </Container>
        </HeaderWrap>
    )
}

export default Header