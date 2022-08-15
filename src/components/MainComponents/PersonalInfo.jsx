import React, { Fragment } from "react";
import { PersonalInfoData } from "../../sources/PersonalInfo";
import {
    DataName,
    DataValue,
    DisplayRow,
    EditPersonalData,
    PersonalDataContainer,
    PersonalInfoContainer,
    ProfileImg,
} from "../../styles/PersonalInfoElements";

function PersonalInfo({ data, isOwner }) {
    return (
        <>
            <PersonalInfoContainer>
                <ProfileImg src={data.photoURL} />
                <PersonalDataContainer>
                    {PersonalInfoData.map((item) => (
                        <DisplayRow key={item.id}>
                            {!data[item.id] ? undefined : (
                                <Fragment>
                                    <DataName>{item.text}</DataName>
                                    <DataValue>{data[item.id]}</DataValue>
                                </Fragment>
                            )}
                        </DisplayRow>
                    ))}
                </PersonalDataContainer>
                {isOwner && (
                    <EditPersonalData>Edit</EditPersonalData>
                )}
            </PersonalInfoContainer>
        </>
    );
}

export default PersonalInfo;
