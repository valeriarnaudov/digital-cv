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
    }

    @media print {
        margin: 0;
        width: 100%;
        gap: 20px;
        grid-template-columns: 1fr 2.2fr;
    }
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;


