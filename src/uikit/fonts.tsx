import styled from "styled-components";

type Props = {
    margin?: string;
    color?: '#FFEE2D' | '#FFF' | '#F6F6F6';
}


export const BigText = styled.h1<Props>`
    font-family: 'Rany';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 58px;
    color: ${props => props.color || '#FFEE2D'};
    margin: ${props => props.margin || '0px'};
`

export const BlockTitle = styled.h3<Props>`
    font-family: 'Rany';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 29px;
    color: ${props => props.color || '#FFEE2D'};
    margin: ${props => props.margin || '0px'};
`

export const PreTitle = styled.h5<Props>`
    font-family: 'Rany';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.color || '#FFEE2D'};
    margin: ${props => props.margin || '0px'};
`

export const Text = styled.p<Props>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.color || '#F6F6F6'};
    margin: ${props => props.margin || '0px'};
`

export const BiggerText = styled.p<Props>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 23px;
    color: ${props => props.color || '#FFEE2D'};
    margin: ${props => props.margin || '0px'};
`

export const MiniText = styled.p<Props>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${props => props.color || '#F6F6F6'};
    margin: ${props => props.margin || '0px'};
`

export const DateText = styled.p<Props>`
    font-family: 'Rany';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: ${props => props.color || '#FFD449'};
    margin: ${props => props.margin || '0px'};
`


