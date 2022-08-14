import styled from "styled-components";
import { MAIN_BLUE } from "../variables/StyleColors";

export const MainContainer = styled.div`
    display: grid;
    width: 95%;
    height: 100%;
    grid-template-columns: 1fr 2fr;
    margin: 20px 20px 20px 20px;
    margin-left: 20px;
`;
export const PersonalInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 3px solid ${MAIN_BLUE};
`;
export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    padding: 0 20px;
    border: 3px solid ${MAIN_BLUE};
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 20px;
`;
