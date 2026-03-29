import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
    Description,
    FlexContainer,
    Title,
    EntryCard,
    EditIcon
} from "../../styles/SingleInfoContainer";
import LanguagesForm from "../Forms/LanguagesForm";

function LanguagesSingleInfo({ doc, isOwner, userUid }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return <LanguagesForm editData={doc} isEditMode={true} setIsEditing={setIsEditing} data={{user: userUid}} setAdd={() => {}} />;
    }

    return (
        <EntryCard>
            {isOwner && (
                <EditIcon onClick={() => setIsEditing(true)}>
                    <FaEdit />
                </EditIcon>
            )}
            <FlexContainer>
            <Title style={{ marginRight: "10px" }}>{doc.language}: </Title>
            <Description style={{ margin: "0" }}>{doc.level}</Description>
            </FlexContainer>
        </EntryCard>
    );
}

export default LanguagesSingleInfo;
