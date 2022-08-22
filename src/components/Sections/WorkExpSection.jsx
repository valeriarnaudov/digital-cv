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
import WorkExpForm from "../Forms/WorkExpForm";
import { getWorkExp } from "../../services/dataServices";
import WorkExpSingleInfo from "../SingleElements/WorkExpSingleInfo";

function WorkExp({ data, isOwner, setData }) {
    const [toogle, setToogle] = useState(true);
    const [add, setAdd] = useState(false);
    const [workExp, setWorkExp] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getWorkExp(data.user, setWorkExp);
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {add && <WorkExpForm data={data} setData={setData} setAdd={setAdd}/>}
            <Info>
                <Title>Work Experience</Title>

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
            {toogle && <InformationContainer>
                {workExp?.map((doc) => <WorkExpSingleInfo doc={doc}/>)}
                </InformationContainer>}
            
        </>
    );
}

export default WorkExp;
