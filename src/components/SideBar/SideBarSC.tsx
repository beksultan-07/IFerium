import styled from "styled-components";

export const SideBarWrap = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(13px);
    border-radius: 20px;
    padding: 12px 18px ;
    left: 92%;
    top: 190px;
    z-index: 2;

    @media(max-width: 768px){
        display: none;
    }
` 

export const SideBarImgLink = styled.a`
    margin-top: 26px;
    :first-child{
        margin-top: 0;
    }
`


export const SideBarImg = styled.img`
    width: 33px;
`