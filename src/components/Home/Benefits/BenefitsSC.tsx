import styled from "styled-components";

export const BItems = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media(max-width:762px ){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:490px ){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const BItem = styled.li`
    
`

export const BItemImg = styled.img`
    width: 45px;
`