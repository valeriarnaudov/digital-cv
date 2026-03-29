import styled from "styled-components";

export const FormContainer = styled.div`
    width: calc(100% - 20px);
    margin-left: 20px;
    margin-bottom: 30px;
    padding: 30px 40px;
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;

    @media print { display: none !important; }

    @media (max-width: 768px) {
        padding: 20px 15px;
        margin-left: 0;
        width: 100%;
    }
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 25px;
    background: linear-gradient(to right, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
`;

export const FormLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #cbd5e1;
    margin-bottom: 8px;
`;

export const FormInput = styled.input`
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 14px 16px;
    color: white;
    font-size: 15px;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #60a5fa;
        background: rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
    }
    
    &::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 14px 16px;
    color: white;
    font-size: 15px;
    transition: all 0.3s ease;
    box-sizing: border-box;
    resize: vertical;
    min-height: 120px;

    &:focus {
        outline: none;
        border-color: #60a5fa;
        background: rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }
`;

export const FormButton = styled.button`
    flex: 1;
    padding: 14px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        background: linear-gradient(135deg, #2563eb, #7c3aed);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 15px;
    margin-top: 15px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const CancelButton = styled.button`
    flex: 1;
    padding: 14px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const DeleteButton = styled.button`
    flex: 1;
    padding: 14px;
    background: linear-gradient(135deg, #f43f5e, #e11d48);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(225, 29, 72, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(225, 29, 72, 0.4);
        background: linear-gradient(135deg, #e11d48, #be123c);
    }

    &:active {
        transform: translateY(0);
    }
`;