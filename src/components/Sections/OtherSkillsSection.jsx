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

function OtherSkills({ data, isOwner }) {
    const [toogle, setToogle] = useState(false);
    const [add, setAdd] = useState(false);
    const [otherSkills, setOtherSkills] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getOtherSkills(data.user, setOtherSkills);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [add]);

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
                    <ToogleBtn onClick={() => setToogle((toogle) => !toogle)}>
                        {!toogle ? (
                            <FaRegArrowAltCircleDown />
                        ) : (
                            <FaRegArrowAltCircleUp />
                        )}
                    </ToogleBtn>
                </Buttons>
            </Info>
            {toogle && (
                <InformationContainer>
                    {otherSkills?.map((doc) => (
                        <OtherSkillsSingleInfo doc={doc} />
                    ))}
                </InformationContainer>
            )}
        </>
    );
}

export default OtherSkills;
