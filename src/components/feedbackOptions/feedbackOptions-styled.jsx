import styled from "styled-components";


export const BtnHolder = styled.div`
    display:flex;
    justify-content:space-around;
`

export const Btn = styled.button`
    width:100px;
    &:first-letter {
        text-transform:capitalize;
        
    }
`