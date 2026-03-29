import styled from "styled-components";
import { MAIN_BLUE } from "../variables/StyleColors";



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
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 800;
    color: white;
    letter-spacing: 0.5px;
    background: linear-gradient(to right, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    width: 120px;
    justify-content: flex-end;
    gap: 15px;
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
`;

export const InformationContainer = styled.div`
    display: flex;
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
`;