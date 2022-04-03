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
` 


export const HeaderLinks = styled.nav`
    display: flex;
    justify-content: space-between;
`

export const HeaderLink = styled(Link)`
    font-family: 'Rany';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
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
`


export const LangWrap = styled(Flex)`
    position: relative;
    cursor: pointer;
` 


export const LangIcon = styled.img`
    width: 30px;
`


// LDD - Languages Dropw Down