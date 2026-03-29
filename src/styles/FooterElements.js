import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    box-sizing: border-box;
    margin-top: auto;
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
`;

export const Brand = styled.h2`
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0;
    margin-bottom: 5px;
    color: white;
    background: linear-gradient(to right, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const FooterText = styled.p`
    color: rgba(255,255,255,0.5);
    font-size: 0.9rem;
    margin: 0;
`;

export const FooterLinks = styled.div`
    display: flex;
    gap: 24px;
`;

export const FooterLink = styled.a`
    color: #e2e8f0;
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
        color: white;
        text-shadow: 0 0 10px rgba(255,255,255,0.5);
    }
`;
