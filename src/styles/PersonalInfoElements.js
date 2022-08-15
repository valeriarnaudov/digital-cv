import styled from "styled-components";
import { MAIN_BLUE } from "../variables/StyleColors";

export const PersonalInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 3px solid ${MAIN_BLUE};
`;

export const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-top: 20px;
    border: 3px solid ${MAIN_BLUE};
`;

export const DisplayRow = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
`;

export const PersonalDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;
export const DataName = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: ${MAIN_BLUE};
    margin: 0;
`;

export const DataValue = styled.p`
    margin-left: 10px;
    font-size: 16px;
    font-weight: semi-bold;
`;

export const EditPersonalData = styled.button`
    padding: 10px 20px 10px 20px;
    border: 3px solid ${MAIN_BLUE};
    background-color: ${MAIN_BLUE};
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 20px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: #fff;
        color: ${MAIN_BLUE};
    }
`;
