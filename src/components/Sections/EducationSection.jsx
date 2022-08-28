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
import { getEducation } from "../../services/dataServices";
import EducationForm from "../Forms/EducationForm";
import EducationSingleInfo from "../SingleElements/EducationSingleInfo";

function Education({ data, isOwner }) {
    const [toogle, setToogle] = useState(false);
    const [add, setAdd] = useState(false);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getEducation(data.user, setEducation);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [add]);

    return (
        <>
            {add && <EducationForm data={data} setAdd={setAdd} />}
            <Info>
                <Title>Education</Title>

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
                    {education?.map((doc) => (
                        <EducationSingleInfo doc={doc} />
                    ))}
                </InformationContainer>
            )}
        </>
    );
}

export default Education;
