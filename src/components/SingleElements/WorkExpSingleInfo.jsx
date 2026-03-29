import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
    Company,
    Date,
    Description,
    FirstLine,
    FlexContainer,
    Occupation,
    Title,
    EntryCard,
    EditIcon
} from "../../styles/SingleInfoContainer";
import WorkExpForm from "../Forms/WorkExpForm";

function WorkExpSingleInfo({ doc, isOwner, userUid }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return <WorkExpForm editData={doc} isEditMode={true} setIsEditing={setIsEditing} data={{user: userUid}} setAdd={() => {}} />;
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
        </EntryCard>
    );
}

export default WorkExpSingleInfo;
