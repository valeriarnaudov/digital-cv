import { Link } from "react-router-dom";
import styled from "styled-components";
import { BAR_BACKGROUND_COLOR, MAIN_BLUE } from "../variables/StyleColors";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 3rem;
    background-color: ${BAR_BACKGROUND_COLOR};
    border-bottom: 3px solid ${MAIN_BLUE};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding: 0;
    }

`

export const H1 = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${MAIN_BLUE};

`

export const SignBtn = styled(Link)`
    background-color: ${MAIN_BLUE};
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;  
    padding: 5px;

    &:hover {
        background-color: #fff;
        color: ${MAIN_BLUE};
    }

`
export const SignOutBtn = styled.button`
    background-color: ${MAIN_BLUE};
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;  
    padding: 5px;

    &:hover {
        background-color: #fff;
        color: ${MAIN_BLUE};
    }

`