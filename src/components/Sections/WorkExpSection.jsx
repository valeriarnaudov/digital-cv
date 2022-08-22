import React from "react";
import { Info,     AddBtn,
    Buttons,
    Title,
    ToogleBtn,
    InformationContainer, } from "../../styles/DataInfoElements";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";

function WorkExp({ data, isOwner }) {



    return (
        <>
            <Info>
                <Title>Work Experience</Title>

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

export default WorkExp;
