import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
    Date,
    Description,
    FirstLine,
    FlexContainer,
    EntryCard,
    EditIcon
} from "../../styles/SingleInfoContainer";
import OtherSkillsForm from "../Forms/OtherSkillsForm";

function OtherSkillsSingleInfo({ doc, isOwner, userUid }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return <OtherSkillsForm editData={doc} isEditMode={true} setIsEditing={setIsEditing} data={{user: userUid}} setAdd={() => {}} />;
    }

    return (
        <EntryCard>
            {isOwner && (
                <EditIcon onClick={() => setIsEditing(true)}>
                    <FaEdit />
                </EditIcon>
            )}
            <FirstLine>
                <Date>{doc.title}</Date>
            </FirstLine>
            {doc.description && (
                <FlexContainer>
                    <Description>{doc.description}</Description>
                </FlexContainer>
            )}
        </EntryCard>
    );
}

export default OtherSkillsSingleInfo;
