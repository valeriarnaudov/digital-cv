import React from "react";
import {
    Company,
    Description,
    FirstLine,
    FlexContainer,
    Title,
} from "../../styles/SingleInfoContainer";

function ProjectsSingleInfo({ doc }) {
    return (
        <div style={{ marginBottom: "15px" }}>
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
        </div>
    );
}

export default ProjectsSingleInfo;
