import styled from 'styled-components';
import { MAIN_BLUE } from '../variables/StyleColors';

export const SignInContainer = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 800px;
    margin-top: 30px;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;

    @media (max-width: 768px) {
        padding: 0;
    }

`

export const WelcomeContainer = styled.div`
    background-color: lightblue;
    width: 600px;
    border-radius: 20px;
    padding: 20px;

`

export const WelcomeText = styled.h1`
    color: ${MAIN_BLUE};
    font-size: 50px;
    margin-top: 0px;
    font-weight: bold;
`

export const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`

export const DescriptionText = styled.p`
    font-size: 20px;
`

export const Only = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: ${MAIN_BLUE};
    text-decoration: underline;
`

export const SignInText = styled.h2`

`
