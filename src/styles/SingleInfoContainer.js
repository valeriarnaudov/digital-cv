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

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 6px;
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

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
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

export const EntryCard = styled.div`
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    @media print {
        border-bottom: none !important;
        margin-bottom: 15px;
        padding-bottom: 0;
    }
`;

export const EditIcon = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: #60a5fa;
        transform: scale(1.1) rotate(5deg);
    }

    @media print {
        display: none !important;
    }

    @media (max-width: 768px) {
        font-size: 20px;
        padding: 5px;
        background: rgba(0,0,0,0.1);
        border-radius: 8px;
    }
`;
