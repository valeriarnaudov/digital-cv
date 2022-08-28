import React from "react";
import {
    Date,
    Description,
    FirstLine,
    FlexContainer,
    Occupation,
    Title,
} from "../../styles/SingleInfoContainer";

function CoursesSingleInfo({ doc }) {
    return (
        <>
            <FirstLine>
                {doc.from && doc.to && (
                    <Date>
                        {doc?.from} - {doc?.to}
                    </Date>
                )}
                {doc.institution && (
                    <Occupation>Institution: {doc?.institution}</Occupation>
                )}
            </FirstLine>
            {doc.subject && (
                <FlexContainer>
                    <Title>Subject: </Title>
                    <Description>{doc.subject}</Description>
                </FlexContainer>
            )}
            {doc.description && (
                <FlexContainer>
                    <Title>More info: </Title>
                    <Description>{doc.description}</Description>
                </FlexContainer>
            )}
        </>
    );
}

export default CoursesSingleInfo;
