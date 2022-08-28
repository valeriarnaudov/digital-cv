import styled from "styled-components";
import { MAIN_BLUE } from "../variables/StyleColors";

export const FormContainer = styled.div`
    position: absolute;
    margin-left: 30px;
    width: 400px;
    min-height: 200px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 3px solid ${MAIN_BLUE};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${MAIN_BLUE};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const FormLabel = styled.label`
    font-size: 20px;
    font-weight: bold;
    color: ${MAIN_BLUE};
    max-width: 200px;
    margin-right: 20px;
`;

export const FormInput = styled.input`
    width: 200px;
    border-radius: 10px;
    border: 3px solid ${MAIN_BLUE};
    padding: 3px;
`;

export const FormButton = styled.button`
    width: 200px;
    border-radius: 10px;
    border: 3px solid ${MAIN_BLUE};
    background-color: ${MAIN_BLUE};
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: ${MAIN_BLUE};
    }
`;

export const TextArea = styled.textarea`
    border: 3px solid ${MAIN_BLUE};
    width: 100%;
    margin-top: 20px;
    resize: none;
    border-radius: 10px;
    height: 300px;
`