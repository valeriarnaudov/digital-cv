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

function Education({ data, isOwner }) {
    const [toogle, setToogle] = useState(false);

    return (
        <>
            <Info>
                <Title>Education</Title>

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

export default Education;
