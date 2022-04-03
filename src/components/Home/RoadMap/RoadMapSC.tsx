import styled from "styled-components";

// RM - RoadMap
export const RMWrap = styled.div`

`

export const RMItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const RMLine = styled.div`
    width: 100vw;
    height: 10px;
    background: #FFEE2D;
    position: absolute;
    top: 50px;
    left: 0;
    ::before{
        content: '';
        z-index: 2;
        display: block;
        width: 20px;
        height: 20px;
        background: #FFD449;
        position: absolute;
        border-radius: 50%;
        top: -5px;
        left: 48%;
    }
`

export const CheckedIconS = styled.img`
    width: 24px;
    margin-right: 5px;
`