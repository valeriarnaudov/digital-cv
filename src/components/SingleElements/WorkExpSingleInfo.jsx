import React from "react";
import {
    Company,
    Date,
    Description,
    FirstLine,
    FlexContainer,
    Occupation,
    Title,
} from "../../styles/SingleInfoContainer";

function WorkExpSingleInfo({ doc }) {
    return (
        <>
            <FirstLine>
                {doc.from && doc.to && (
                    <Date>
                        {doc?.from} - {doc?.to}
                    </Date>
                )}
                {doc.occupation && (
                    <Occupation>Occupation: {doc?.occupation}</Occupation>
                )}
                {doc.company && <Company>Company: {doc?.company}</Company>}
            </FirstLine>
            {doc.description && (
                <FlexContainer>
                    <Title>Achievements/Tasks: </Title>
                    <Description>{doc.description}</Description>
                </FlexContainer>
            )}
        </>
    );
}

export default WorkExpSingleInfo;
