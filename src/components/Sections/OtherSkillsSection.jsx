import React, { useState } from "react";
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

function OtherSkills({ data, isOwner }) {
    const [toogle, setToogle] = useState(false);

    return (
        <>
            <Info>
                <Title>Other Skills</Title>

                <Buttons>
                    {isOwner && (
                        <AddBtn>
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
            {toogle && <InformationContainer></InformationContainer>}
        </>
    );
}

export default OtherSkills;
