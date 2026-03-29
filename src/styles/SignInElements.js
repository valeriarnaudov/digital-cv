import styled from 'styled-components';



export const PageWrapper = styled.div`
    min-height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    box-sizing: border-box;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
`;

export const GlassCard = styled.div`
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    padding: 60px 40px;
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    
    @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        justify-content: space-between;
        padding: 60px;
    }
`;

export const HeroSection = styled.div`
    flex: 1;
    margin-bottom: 40px;
    
    @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 60px;
    }
`;

export const WelcomeText = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 16px;
    line-height: 1.1;
    background: linear-gradient(to right, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const SubTitle = styled.p`
    font-size: 1.25rem;
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 32px;
`;

export const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
`;

export const FeatureItem = styled.li`
    font-size: 1.1rem;
    color: #e2e8f0;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    
    &::before {
        content: "✓";
        color: #10b981;
        font-weight: bold;
        font-size: 1.2rem;
    }
`;

export const AuthSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.05);
    min-width: 300px;
`;

export const AuthTitle = styled.h2`
    font-size: 1.5rem;
    color: white;
    margin-bottom: 24px;
    font-weight: 600;
`;

export const GlassGoogleBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 280px;
    padding: 14px 24px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(0);
    }
`;
