import styled from "styled-components";


export const NewsItem = styled.div`
    flex: 1;
    display: flex;
    height: 430px;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(31, 31, 31, 0.5);
    backdrop-filter: blur(15px);   
    margin: 0 20px 0 0;
    :last-child{
        margin: 0;
    }
`

export const NewsItemImg = styled.img`
    width: 100%;
`