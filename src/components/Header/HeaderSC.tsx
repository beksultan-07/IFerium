import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../../uikit/uikit";

export const HeaderWrap = styled.header`
    background: rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(20px);
    position: fixed;
    width: 100%;
    z-index: 2;
`

export const HeaderLogoWrap = styled(Link)`
    display: flex;
    align-items: center;
    margin-right: auto;
    padding: 21px 0;
    @media(max-width: 682px){
        margin: 0 auto;
    }
` 

export const HeaderLogo = styled.img`
    width:  45px;
`

export const HeaderLogoText = styled.p`
    font-family: 'Rany';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 32px;
    color: #FFFFFF;
    margin-left: 14px; 
    @media(max-width: 682px){
        display: none;
        width: 0;
    }
` 


export const HeaderLinks = styled.nav`
    display: flex;
    justify-content: space-between;
    @media(max-width: 682px){
        display: none;
        width: 0;

    }
`


export const HeaderLink = styled.button`
    border: none;
    outline: none;
    background: none;
    font-family: 'Rany';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    margin: 0 20px;
    :first-child{
        margin: 0;
    }
` 

export const LangDropDown = styled.img`
    width: 10px;
    margin-left: 10px;
` 

export const Burger = styled.img`
    width: 30px;
    margin-left: 24px;
    @media(min-width: 682px){
        display: none;
    }
`

export const RightMenu = styled(Flex)`
    @media(max-width: 682px){
        display: none;
    }
` 

export const LangWrap = styled(Flex)`
    position: relative;
    cursor: pointer;
` 


export const LangIcon = styled.img`
    width: 30px;
`


// LDD - Languages Dropw Down

type LangProps = {
    ddShow: boolean;
} 

export const LDDWrap = styled.div<LangProps>`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* top: 0px; */
    top: ${props => props.ddShow?'61px':'0'};
    /* left: 0; */
    right: 0;
    visibility: ${props => props.ddShow?'visible':'hidden'};
    transition: .3s;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(50px);
    border-radius: 15px;
    opacity: ${props => props.ddShow?'1':'0'};
`

export const LDDIcon = styled.img`
    padding: 15px;
    width: 60px;
    margin: 0;
`

type BurgerProps = {
    burgerClick: boolean;
}

export const BMWrap = styled.div<BurgerProps>`
    background: #FFEE2D;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: ${props => props.burgerClick?'0':'1000%'};
    transition: .3s;
    padding: 20px;
`

export const BMLink = styled.button`
    border: none;
    background: none;
    font-family: 'Rany';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 32px;
    color: #171717;
    :nth-child(2){
        margin: 50px 0;
    }
`

export const RightMenu1 = styled(RightMenu)`
    display: flex;
`

export const BMSideBarWrap = styled(Flex)`
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(50px);
    border-radius: 20px;
    padding: 12px 18px ;
    z-index: 2;
    width: 70px;
`