import React from "react";
import {
    Date,
    Description,
    FirstLine,
    FlexContainer,
} from "../../styles/SingleInfoContainer";

function OtherSkillsSingleInfo({ doc }) {
    return (
        <>
            <FirstLine>
                <Date>{doc.title}</Date>
            </FirstLine>
            {doc.description && (
                <FlexContainer>
                    <Description>{doc.description}</Description>
                </FlexContainer>
            )}
        </>
    );
}

export default OtherSkillsSingleInfo;
