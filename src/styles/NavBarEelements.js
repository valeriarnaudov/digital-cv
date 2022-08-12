import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 3rem;
    background-color: #fff;
    border-bottom: 3px solid #74ADE9;
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
    color: #74ADE9;

`

export const SignOutBtn = styled.button`
    background-color: #74ADE9;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #74ADE9;
    }

`