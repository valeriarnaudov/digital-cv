import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 600px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    margin-top: 40px;
    padding: 40px 20px;
    border-radius: 24px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;

    @media (max-width: 840px) {
        width: calc(100% - 40px);
        margin: 20px;
    }
`

export const FormTitle = styled.h1`
    font-size: 32px;
    margin-top: 0px;
    font-weight: 800;
    margin-bottom: 20px;
    background: linear-gradient(to right, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const ProfileImg = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`

export const Pencil = styled.label`
    background: none;
    border: none;
    font-size: 30px;
    position: relative;
    top: -50px;
    right: -60px;
    color: #60a5fa;
    margin: -40px;
    cursor: pointer;
    background: rgba(0,0,0,0.5);
    border-radius: 50%;
    padding: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 20px;
    width: 80%;
    max-width: 400px;
`

export const FormLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #94a3b8;
    margin-bottom: 8px;
`

export const FormInput = styled.input`
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
    padding: 12px 16px;
    color: white;
    font-size: 16px;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: #60a5fa;
        background: rgba(255, 255, 255, 0.1);
    }
    
    &::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }
`

export const FormButton = styled.button`
    width: 80%;
    max-width: 400px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
    padding: 14px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }
`