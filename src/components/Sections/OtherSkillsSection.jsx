import React, { useEffect, useState } from "react";
import {
    Info,
    AddBtn,
    Buttons,
    Title,
    ToogleBtn,
    InformationContainer,
} from "../../styles/DataInfoElements";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";
import { getOtherSkills } from "../../services/dataServices";
import OtherSkillsForm from "../Forms/OtherSkillsForm";
import OtherSkillsSingleInfo from "../SingleElements/OtherSkillsSingleInfo";

function OtherSkills({ data, isOwner, isActive, onToggle }) {
    const [add, setAdd] = useState(false);
    const [otherSkills, setOtherSkills] = useState([]);

    useEffect(() => {
        const unsubscribe = getOtherSkills(data.user, setOtherSkills);
        return () => {
            if (unsubscribe) unsubscribe();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {add && <OtherSkillsForm data={data} setAdd={setAdd} />}
            <Info>
                <Title>Other Skills</Title>

                <Buttons>
                    {isOwner && (
                        <AddBtn onClick={() => setAdd(true)}>
                            <BiMessageSquareAdd />
                        </AddBtn>
                    )}
                    <ToogleBtn onClick={onToggle}>
                        {!isActive ? (
                            <FaRegArrowAltCircleDown />
                        ) : (
                            <FaRegArrowAltCircleUp />
                        )}
                    </ToogleBtn>
                </Buttons>
            </Info>
            <InformationContainer className={isActive ? '' : 'hide'}>
                {otherSkills?.map((doc) => (
                    <OtherSkillsSingleInfo key={doc.id} doc={doc} isOwner={isOwner} userUid={data.user} />
                ))}
            </InformationContainer>
        </>
    );
}

export default OtherSkills;
