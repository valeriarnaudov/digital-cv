import styled from "styled-components";

export const FirstLine = styled.div`
    width: 90%;
    display: flex;
    left: 0;
    align-items: center;
    justify-content: space-between;

    @media print {
        width: 100%;
        margin-bottom: 4px;
        justify-content: flex-start;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 12px;
    }
`;

export const Date = styled.h3`
    @media print {
        margin: 0;
        font-size: 12px;
        color: #64748b !important;
        font-weight: 500;
    }
`;

export const Occupation = styled.p`
    @media print {
        margin: 0;
        font-size: 13px;
        color: #334155 !important;
        font-weight: 500;
    }
`

export const Company = styled.p`
    @media print {
        margin: 0 0 2px 0;
        font-size: 14px;
        color: #0f172a !important;
        font-weight: 700;
    }
`

export const FlexContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;

    @media print {
        width: 100%;
        margin-bottom: 6px;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 8px;
    }
`

export const Description = styled.p`
    margin-left: 10px;

    @media print {
        margin-left: 0;
        margin-top: 0;
        margin-bottom: 12px;
        font-size: 12px;
        color: #475569 !important;
        line-height: 1.4;
    }
`

export const Title = styled.h4`
    @media print {
        margin: 0 0 2px 0;
        color: #0f172a !important;
        font-size: 15px;
        font-weight: 700;
    }
`
