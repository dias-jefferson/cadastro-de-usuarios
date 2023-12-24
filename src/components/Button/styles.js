import styled from "styled-components"

export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px;
    border: ${props => props.isBack ? '1px solid #FFF' : 'none'};
    background-color: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.80)'};
    margin-top: 130px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; 

    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
       transform: ${props => props.isBack && 'rotateY(180deg)'};
    }
`