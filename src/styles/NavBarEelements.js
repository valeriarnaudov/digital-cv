import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: 4rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    z-index: 100;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const H1 = styled.h1`
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    letter-spacing: 0.5px;
    background: linear-gradient(to right, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const SignBtn = styled(Link)`
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    padding: 8px 16px;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }
`;

export const SignOutBtn = styled.button`
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    padding: 8px 16px;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }
`;
