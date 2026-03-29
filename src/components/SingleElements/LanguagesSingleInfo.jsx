import React from "react";
import {
    Description,
    FlexContainer,
    Title,
} from "../../styles/SingleInfoContainer";

function LanguagesSingleInfo({ doc }) {
    return (
        <FlexContainer>
            <Title style={{ marginRight: "10px" }}>{doc.language}: </Title>
            <Description style={{ margin: "0" }}>{doc.level}</Description>
        </FlexContainer>
    );
}

export default LanguagesSingleInfo;
