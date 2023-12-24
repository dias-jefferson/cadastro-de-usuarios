import styled from 'styled-components';

import Background from '../../assets/background.svg'


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