import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;
    width: 95%;
    max-width: 1200px;
    height: 100%;
    grid-template-columns: 1fr 2fr;
    margin: 40px auto;
    gap: 40px;
    
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 20px;
        margin: 20px auto;
        width: 95%;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 10px 0;
        padding: 0;
    }

    @media print {
        margin: 0;
        padding: 40px;
        width: 100%;
        height: auto !important;
        min-height: auto !important;
        gap: 20px;
        grid-template-columns: 1fr 2.2fr;
        box-sizing: border-box;
    }
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;


