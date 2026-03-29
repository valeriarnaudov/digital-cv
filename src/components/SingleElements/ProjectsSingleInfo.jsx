import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
    Company,
    Description,
    FirstLine,
    FlexContainer,
    Title,
    EntryCard,
    EditIcon
} from "../../styles/SingleInfoContainer";
import ProjectsForm from "../Forms/ProjectsForm";

function ProjectsSingleInfo({ doc, isOwner, userUid }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return <ProjectsForm editData={doc} isEditMode={true} setIsEditing={setIsEditing} data={{user: userUid}} setAdd={() => {}} />;
    }

    return (
        <EntryCard>
            {isOwner && (
                <EditIcon onClick={() => setIsEditing(true)}>
                    <FaEdit />
                </EditIcon>
            )}
            <FirstLine>
                {doc.name && <Company>{doc.name}</Company>}
            </FirstLine>
            {doc.description && (
                <FlexContainer>
                    <Description style={{ marginLeft: "0" }}>{doc.description}</Description>
                </FlexContainer>
            )}
            {doc.link && (
                <FlexContainer>
                    <Title>Link: </Title>
                    <Description>
                        <a href={doc.link} target="_blank" rel="noreferrer" style={{ color: "#60a5fa", textDecoration: "none" }}>{doc.link}</a>
                    </Description>
                </FlexContainer>
            )}
        </EntryCard>
    );
}

export default ProjectsSingleInfo;
