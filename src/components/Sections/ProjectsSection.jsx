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
import { getProjects } from "../../services/dataServices";
import ProjectsForm from "../Forms/ProjectsForm";
import ProjectsSingleInfo from "../SingleElements/ProjectsSingleInfo";

function Projects({ data, isOwner, isActive, onToggle }) {
    const [add, setAdd] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getProjects(data.user, setProjects);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [add]);

    return (
        <>
            {add && <ProjectsForm data={data} setAdd={setAdd} />}
            <Info>
                <Title>Projects</Title>

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
                {projects?.map((doc) => (
                    <ProjectsSingleInfo key={doc.id} doc={doc} isOwner={isOwner} userUid={data.user} />
                ))}
            </InformationContainer>
        </>
    );
}

export default Projects;
