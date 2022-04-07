import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../../../uikit/uikit";
import { BannerBtn } from "../Banner/BannerSC";

export const WCWrap = styled(Flex)`
    margin: 100px 0 0;
    width: 100%;
    @media(max-width: 838px){
        flex-direction: column;
        align-items: center;
    }
`

export const WCLeftWrap = styled.div`
    background: #171717;
    border-radius: 30px;
    margin: 0 20px 0 0;
    max-width: 480px;
    min-width: 420px;
    @media(max-width: 838px){
        min-width: auto;
    }
`

type Props = {
    activeBtn: boolean;
}

export const WCLBtn1 = styled.button<Props>`
    cursor: pointer;
    padding: 20px 0;
    max-width: 240px;
    width: 100%;
    border-radius: 30px 0 0 0;
    border: none;
    text-align: center;
    transition: .3s;
    background: ${props => props.activeBtn?'#FFEE2D':'#171717'};
    :last-child{
        border-radius: 0 30px 0 0;
    }
`

export const WCLBtn2 = styled(WCLBtn1)`
    border-radius: 0 30px 0 0;
    background: ${props => !props.activeBtn?'#FFEE2D':'#171717'};
`

export const WCLInside = styled(Flex)`
    padding: 0 30px 20px;
    flex-direction: column;
    @media(max-width: 484px){
        padding: 0 10px 20px;    
    }
`  

export const WCLTitle = styled.h4`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #F7F7F7;
    margin: 30px 0 15px;
`

export const WCLBlock = styled.div`
    position: relative;
    margin: 0 15px 0 0;
    :last-child{
        margin: 0;
    }
    @media(max-width: 484px){
        :after{
            display: none;
        }    
    }
    :after{
        content: 'BNB';
        position: absolute;
        top: 10px;
        right: 10px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 23px;
        color: #FFEE2D;
    }
` 

export const WCLBlock2 = styled(WCLBlock)`
    :after{
        content: 'MetaUFO';
        color: #FFEE2D;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
    }
`

export const WCLBlock3 = styled(WCLBlock)`
    img{
        height: 45px;
        position: absolute;
        top: 0;
        left: 0;
    }
    input {
        padding: 11px 22px 11px 55px;
    }
    :after{
        content: 'BNB (BSC)';
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 23px;
        color: #FFFFFF;
    }
`

export const WCLInput = styled.input`
    padding: 11px 22px;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    border: none;
    outline: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;
    color: #FFFFFF;

    ::placeholder{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 23px;
        color: #FFFFFF;
    }
`

export const WCLInput2 = styled(WCLInput)`
    background: rgba(255, 255, 255, 0.1);
    ::placeholder{
        font-weight: 400;
    }
`


export const WCLBtn = styled(BannerBtn)`
        width: 100%;
        margin: 40px 0 0;

        span{
            font-family: 'Rany';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 18px;
            text-align: center;
            color: #171717;
        }
        img{
            width: 16px;
            margin: 0 0 0 14px;
        }
` 



export const WCRightWrap = styled(WCLeftWrap)`
    /* flex: 1.5; */
    max-width: 100%;
    /* height: 100%; */
    width: 100%;
    @media(max-width: 838px){
        margin: 50px;
    }
`

export const WCLink = styled(Link)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;
    text-decoration-line: underline;
    color: #FFEE2D;
`

export const WCUl = styled.ul`
    list-style: none;
    width: 100%;
`

export const WCItem = styled.li`
    border-bottom: 1px dashed #FFEE2D;
    margin: ;
    margin: 20px 0 0;
`

export const WCBtns = styled(Flex)`
    margin: auto 0 0;
    @media(max-width: 536px){
        flex-direction: column;
    }
`

export const WCBtn = styled(WCLBtn)`
    margin: 20px 0 0;
    background: none;
    span{
        color: #F7F7F7;
    }
`