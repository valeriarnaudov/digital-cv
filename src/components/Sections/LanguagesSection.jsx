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
import { getLanguages } from "../../services/dataServices";
import LanguagesForm from "../Forms/LanguagesForm";
import LanguagesSingleInfo from "../SingleElements/LanguagesSingleInfo";

function Languages({ data, isOwner, isActive, onToggle }) {
    const [add, setAdd] = useState(false);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const unsubscribe = getLanguages(data.user, setLanguages);
        return () => {
            if (unsubscribe) unsubscribe();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {add && <LanguagesForm data={data} setAdd={setAdd} />}
            <Info>
                <Title>Languages</Title>

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
                {languages?.map((doc) => (
                    <LanguagesSingleInfo key={doc.id} doc={doc} isOwner={isOwner} userUid={data.user} />
                ))}
            </InformationContainer>
        </>
    );
}

export default Languages;
