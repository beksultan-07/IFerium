import { Link } from "react-router-dom";
import styled from "styled-components";

// IFD is IFereum description
export const IFDTextWrap = styled.div`
    max-width: 580px;
    margin-top: 100px;
` 

export const IFDItemsWrap = styled.ul`
    list-style: none;
    margin: 50px 0 0; 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media(max-width: 1074px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const IFDItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 255px;
    border-right: solid 1px #FFEE2D; 
    :first-child{
        padding: 0 20px 0 0; 
    }
    :last-child{
        border-right: none; 
    }
    @media(max-width: 1074px){
        height: auto;
        :nth-child(2){
            border-right: none; 
        }
    }
    @media(max-width: 576px){
        border-right: none; 
        border-bottom: solid 1px #FFEE2D; 
        padding: 20px 0;
    }
`

export const IFDNum = styled.h1`
    font-family: 'Rany';
    font-style: normal;
    font-weight: 700;
    font-size: 128px;
    line-height: 95px;
    color: #FFEE2D;
    margin-right: 40px; 
`

export const IFDViewMore = styled(Link)`
    display: flex;
    align-items: center;
    margin-top: auto;
    @media(max-width: 1074px){
        padding-bottom: 20px;
    }
`

export const IFDIcon =  styled.img`
    width: 16px;
    margin: 0 0 0 14px;
`