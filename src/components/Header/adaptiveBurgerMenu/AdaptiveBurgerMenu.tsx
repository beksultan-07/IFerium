import React from 'react'
import { Flex } from '../../../uikit/uikit';
import SideBar from '../../SideBar/SideBar';
import { BMLink, BMWrap, Burger, HeaderLogo, HeaderLogoWrap, LangDropDown, LangIcon, LangWrap, RightMenu, RightMenu1 } from '../HeaderSC';
import LangDD from '../langDropDown/LangDD';
import BMSideBar from './BMSideBar';

type Props = {
    showBurgerMenu: boolean;
    setBM: any;
    lang: string;
    setLang: any;
    showDD: boolean;
    setShowDD: any;
}

const AdaptiveBurgerMenu:React.FC<Props> = (props) => {

    const BurgerIcon = require("../../../assets/burgerClose.svg")['default']
    const logo = require("../../../assets/logoBlack.svg")['default'];
    const DropDownIcon = require("../../../assets/DropDownBlack.svg")['default'];

    const LangIco1 = require("../../../assets/langs/En.svg")['default']
    const LangIco2 = require("../../../assets/langs/ru.png")



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
    <BMWrap burgerClick={props.showBurgerMenu}>
        <Flex justify='space-between'>
            <HeaderLogo src={logo}/>
            <Burger src={BurgerIcon} style={{width: '50px'}} onClick={() => props.setBM(false)}/>
        </Flex>

        <Flex direction='column' align='center' justify='space-between' margin='50px 0'>
            <Flex direction='column' align='flex-start'>
                <BMLink>Roadmap</BMLink>
                <BMLink>Contact</BMLink>
    
                <RightMenu1 margin='0'>
                    <LangWrap align='center' onClick={(e)=> langHandler(e)}>
                        <LangIcon src={checkLang()} />
                        <LangDropDown src={DropDownIcon}/>
                        <LangDD activeLang={props.lang} ddShow={props.showDD} setActiveLang={props.setLang}/>
                    </LangWrap>
                </RightMenu1>
            </Flex>
    
            <BMSideBar/>
        </Flex>
        <SideBar/>
    </BMWrap>
  )
}

export default AdaptiveBurgerMenu