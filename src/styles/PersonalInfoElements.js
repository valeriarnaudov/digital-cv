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
`;

export const DisplayRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 12px;
`;

export const PersonalDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 85%;
`;

export const DataName = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: #94a3b8;
    margin: 0;
    min-width: 120px;
`;

export const DataValue = styled.div`
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    word-break: break-word;
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
`;
