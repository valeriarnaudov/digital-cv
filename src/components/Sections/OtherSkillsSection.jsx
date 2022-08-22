import React from "react";
import { Info,     AddBtn,
    Buttons,
    Title,
    ToogleBtn,
    InformationContainer, } from "../../styles/DataInfoElements";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";

function OtherSkills({ data, isOwner }) {



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
                    <ToogleBtn>
                        <FaRegArrowAltCircleDown />
                    </ToogleBtn>
                </Buttons>
            </Info>
            <InformationContainer>

            </InformationContainer>
        </>
    );
}

export default OtherSkills;
