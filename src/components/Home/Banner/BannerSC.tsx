import styled from "styled-components";
import { Flex } from "../../../uikit/uikit";


export const BannerInfo = styled(Flex)`
    @media(max-width: 760px){
        flex-direction: column;
        h1{
            font-size: 36px;
            line-height: 42px;
        }
    }
    @media(max-width: 400px){
        h1{
            font-size: 32px;
            line-height: 36px;
        }
    }
`

export const BannerTexts = styled(Flex)`

`

export const BannerBtn = styled.button`
    background: #FFEE2D;
    padding: 14px 0;
    cursor: pointer;
    width: 280px;
    display: flex;
    outline: none;
    border: none;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    @media(max-width: 760px){
        align-self: center;
    }

    span{
        font-family: 'Rany';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 22px;
        color: #171717;
    }
    img{
        width: 16px;
        margin: 0 0 0 5px;
    }
`

export const BannerLogo = styled.img`
    /* width: 320px;*/
    flex: .55;
    width: 100%;
    max-width: 385px;
    @media(max-width: 760px){
        align-self: center;
        margin: 0 0 30px;
    }
`

export const BannerRates = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    margin: 84px 0 0;
    @media(max-width: 1020px){
        flex-direction: column;
    }
`

export const BannerRatesItemWrap = styled(Flex)`
    @media(max-width: 1020px){
        margin: 0 0 30px;
        justify-content: space-between;
    }
    @media(max-width: 616px){
        flex-direction: column;
    }
`

export const BannerRatesItem = styled(Flex)`
    align-items: flex-start;
    margin: 0 20px;
    :first-child{
        margin: 0 20px 0 0;
    }
    img{
        width: 42px;
        margin: 0 20px 0 0;
    }
    @media(max-width: 616px){
        margin: 20px 0;
        :first-child{
            margin: 20px 0 0;
        }
    }
`

export const BannerRatesItem2 = styled(BannerRatesItem)`
    padding: 50px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.12) -6.98%, rgba(255, 255, 255, 0) 81.03%);
    border-radius: 30px;
    img{
        width: 42px;
        margin: 0 43px 0 0;
    }
    @media(max-width: 616px){
        flex-direction: column;
    }
`

export const BannerRatesItem2Texts = styled(Flex)`
    flex-direction: column; 
    :nth-child(2){
        margin: 0 50px 0 0;
    }
    @media(max-width: 616px){
        margin: 20px 0 0 !important;
    }

`
export const BannerInfoSide = styled(Flex)`
    @media(max-width: 760px){
        order: 1;
    }
`