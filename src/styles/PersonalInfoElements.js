import styled from "styled-components";

export const PersonalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);

    @media print {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        padding: 0;
    }
`;

export const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    object-fit: cover;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

    @media print {
        width: 130px;
        height: 130px;
        margin-top: 0px;
        margin-bottom: 10px;
        border: 2px solid #cbd5e1 !important;
        box-shadow: none !important;
        border-radius: 12px;
    }
`;

export const DisplayRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 12px;

    @media print {
        flex-direction: column;
        align-items: flex-start;
        margin-left: 0;
        margin-bottom: 6px;
    }
`;

export const PersonalDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 85%;

    @media print {
        margin: 0;
        width: 100%;
    }
`;

export const DataName = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: #94a3b8;
    margin: 0;
    min-width: 120px;

    @media print {
        font-size: 11px;
        color: #64748b !important;
        margin-bottom: 2px;
        min-width: auto;
    }
`;

export const DataValue = styled.div`
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    word-break: break-word;

    @media print {
        margin-left: 0;
        font-size: 13px;
        color: #0f172a !important;
    }
`;

export const EditPersonalData = styled.button`
    padding: 10px 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 12px;
    margin: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }

    @media print {
        display: none !important;
    }
`;

export const QrContainer = styled.div`
    display: none;

    @media print {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        margin-bottom: 25px;
        
        strong {
            font-size: 12px;
            color: #0f172a;
            margin-bottom: 6px;
            letter-spacing: 0.5px;
        }
    }
`;
