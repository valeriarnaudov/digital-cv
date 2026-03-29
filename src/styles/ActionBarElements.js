import styled from "styled-components";

export const ActionBarContainer = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 1000;
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    padding: 12px 24px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-3px);
        box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
    }
    
    @media (max-width: 768px) {
        padding: 10px 16px;
        font-size: 14px;
    }
`;
