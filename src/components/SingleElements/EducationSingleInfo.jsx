import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
    Date,
    Description,
    FirstLine,
    FlexContainer,
    Occupation,
    Title,
    EntryCard,
    EditIcon
} from "../../styles/SingleInfoContainer";
import EducationForm from "../Forms/EducationForm";

function EducationSingleInfo({ doc, isOwner, userUid }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return <EducationForm editData={doc} isEditMode={true} setIsEditing={setIsEditing} data={{user: userUid}} setAdd={() => {}} />;
    }

    return (
        <EntryCard>
            {isOwner && (
                <EditIcon onClick={() => setIsEditing(true)}>
                    <FaEdit />
                </EditIcon>
            )}
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
        </EntryCard>
    );
}

export default EducationSingleInfo;
