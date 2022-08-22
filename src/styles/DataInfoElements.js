import styled from "styled-components";
import { MAIN_BLUE } from "../variables/StyleColors";



export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    padding: 0 20px;
    border: 3px solid ${MAIN_BLUE};
    background-color: #fff;
    /* margin-bottom: 20px; */
    border-radius: 20px;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: ${MAIN_BLUE};
`;
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-between;
`;

export const AddBtn = styled.button`
    background: none;
    border: none;
    font-size: 25px;
    font-weight: bold;
    color: ${MAIN_BLUE};
    cursor: pointer;
`;

export const ToogleBtn = styled.button`
    background: none;
    border: none;
    font-size: 25px;
    font-weight: bold;
    color: ${MAIN_BLUE};
    cursor: pointer;
`;

export const InformationContainer = styled.div`
    margin-top: 0;
    display: flex;
    flex-direction: column;
    width: 93%;
    min-height: 50px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border: 3px solid ${MAIN_BLUE};
    border-radius: 0 0px 20px 20px;
    border-top: 0;  
    margin-left: 37px;
    margin-bottom: 20px;
`