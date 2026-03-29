import React, { Fragment } from "react";
import { PersonalInfoData } from "../../sources/PersonalInfo";
import { QRCodeSVG } from 'qrcode.react';
import {
    DataName,
    DataValue,
    DisplayRow,
    EditPersonalData,
    PersonalDataContainer,
    PersonalInfoContainer,
    ProfileImg,
    QrContainer
} from "../../styles/PersonalInfoElements";
function PersonalInfo({ data, isOwner, username }) {
    const userUrl = `${window.location.origin}/${username}`;

    return (
        <PersonalInfoContainer>
            <ProfileImg src={data.photoURL} />
            
            {username && (
                <QrContainer className="print-qr-code">
                    <strong>DIGITAL CV:</strong>
                    <QRCodeSVG value={userUrl} size={100} level="M" />
                </QrContainer>
            )}

            <PersonalDataContainer>
                {PersonalInfoData.map((item) => (
                    <DisplayRow key={item.id}>
                        {!data[item.id] ? undefined : (
                            <Fragment>
                                <DataName>{item.text}</DataName>
                                <DataValue>
                                    {(item.id === "linkedin" || item.id === "github") ? (
                                        <a href={data[item.id]} target="_blank" rel="noreferrer" style={{color: "inherit"}}>
                                            {data[item.id]}
                                        </a>
                                    ) : (
                                        data[item.id]
                                    )}
                                </DataValue>
                            </Fragment>
                        )}
                    </DisplayRow>
                ))}
            </PersonalDataContainer>
            {isOwner && ( 
                <EditPersonalData>Edit</EditPersonalData>
            )}
        </PersonalInfoContainer>
    );
}

export default PersonalInfo;
