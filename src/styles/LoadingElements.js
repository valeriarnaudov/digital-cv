import styled, { keyframes } from "styled-components";
import { MAIN_BLUE } from "../variables/StyleColors";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f8fafc;
`;

export const Ring = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: #3b82f6;
    animation: ${spin} 1s ease-in-out infinite;
    margin-bottom: 20px;
`;

export const Text = styled.span`
    color: #475569;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    animation: pulse 2s infinite ease-in-out;
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;
