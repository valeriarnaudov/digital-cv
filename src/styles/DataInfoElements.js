import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    padding: 10px 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    @media print {
        border: none !important;
        border-bottom: 2px solid #cbd5e1 !important;
        background: transparent !important;
        padding: 0 0 5px 0;
        margin: 0 0 10px 0;
        border-radius: 0 !important;
        box-shadow: none !important;
    }
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 800;
    color: white;
    letter-spacing: 0.5px;
    background: linear-gradient(to right, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media print {
        background: none !important;
        -webkit-text-fill-color: #0f172a !important;
        color: #0f172a !important;
        font-size: 18px;
        margin: 0;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    width: 120px;
    justify-content: flex-end;
    gap: 15px;

    @media print { display: none !important; }
`;

export const AddBtn = styled.button`
    background: none;
    border: none;
    font-size: 25px;
    font-weight: bold;
    color: #94a3b8;
    cursor: pointer;
    transition: color 0.3s;
    &:hover { color: white; }

    @media print { display: none !important; }
`;

export const ToogleBtn = styled.button`
    background: none;
    border: none;
    font-size: 25px;
    font-weight: bold;
    color: #94a3b8;
    cursor: pointer;
    transition: color 0.3s;
    &:hover { color: white; }

    @media print { display: none !important; }
`;

export const InformationContainer = styled.div`
    display: ${({ className }) => (className === 'hide' ? 'none' : 'flex')};
    flex-direction: column;
    width: calc(100% - 20px);
    min-height: 50px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    margin-left: 20px;
    margin-bottom: 30px;
    margin-top: -10px;
    padding: 20px;
    box-sizing: border-box;
    color: white;

    @media print {
        display: flex !important;
        background: transparent !important;
        border: none !important;
        color: #1e293b !important;
        padding: 0;
        margin-left: 0;
        margin-bottom: 20px;
        margin-top: 0;
    }
`;