import styled from "styled-components";

export const ParserContainer = styled.div`
    width: calc(100% - 20px);
    margin-left: 20px;
    margin-bottom: 30px;
    padding: 30px 40px;
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px dashed rgba(96, 165, 250, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:hover {
        border-color: rgba(96, 165, 250, 1);
        background: rgba(15, 23, 42, 0.6);
    }

    @media (max-width: 768px) {
        padding: 20px;
        margin-left: 0;
        width: 100%;
    }
`;

export const ParseTitle = styled.h3`
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
    margin-top: 0;
    span {
        background: linear-gradient(to right, #60a5fa, #c084fc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ParseSubtitle = styled.p`
    font-size: 14px;
    color: #cbd5e1;
    margin-bottom: 20px;
    max-width: 80%;
`;

export const FileUploadInput = styled.input`
    display: none;
`;

export const UploadButton = styled.label`
    padding: 12px 30px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    }
`;

export const LoadingText = styled.div`
    color: #60a5fa;
    margin-top: 15px;
    font-weight: 500;
    animation: pulse 1.5s infinite;

    @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
    }
`;
