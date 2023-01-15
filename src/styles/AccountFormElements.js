import styled from "styled-components";
import { MAIN_BLUE } from "../variables/StyleColors";

export const FormContainer = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 500px;
    min-height: 100vh;
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    border: 3px solid ${MAIN_BLUE};

    @media (max-width: 840px) {
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
    }
`
export const FormTitle = styled.h1`
    font-size: 35px;
    margin-top: 0px;
    font-weight: bold;
    color: ${MAIN_BLUE};
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 600px;

`

export const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 30px;
    border: 3px solid ${MAIN_BLUE};
`

export const Pencil = styled.label`
    background: none;
    border: none;
    font-size: 60px;
    position: relative;
    top: -50px;
    right: -80px;
    color: ${MAIN_BLUE};
    margin: -40px;
    cursor: pointer;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
    margin-top: 20px;
`

export const FormLabel = styled.label`
    font-size: 20px;
    font-weight: bold;
    color: ${MAIN_BLUE};
    width: 200px;
    margin-right: 20px;
`

export const FormInput = styled.input`
    width: 200px;
    border-radius: 10px;
    border: 3px solid ${MAIN_BLUE};
    padding: 3px;



`

export const FormButton = styled.button`
    width: 200px;
    border-radius: 10px;
    border: 3px solid ${MAIN_BLUE};
    background-color: ${MAIN_BLUE};
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: #fff;
        color: ${MAIN_BLUE};
    }
`