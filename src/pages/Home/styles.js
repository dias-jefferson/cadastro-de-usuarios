import styled from 'styled-components';

import Background from '../../assets/background1.svg'


export const Container = styled.div`
    background-image: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Image = styled.img`
    margin-top: 30px;
`

export const ContainerItems = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%, rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    
    padding: 50px 35px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 100px;
`

export const InputLabel = styled.p`
color: #EEE;


font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 122.222% */
letter-spacing: -0.408px;

margin-left: 25px;
`

export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;

    color: #FFF;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px;
    border: none;
    background-color: rgba(0, 0, 0, 0.80);
    margin-bottom: 10px;

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
`

export const User = styled.li`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    width: 342px;
    height: 58px;
    margin-bottom: 34px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    list-style: none;

    p{
        color: #FFF;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`