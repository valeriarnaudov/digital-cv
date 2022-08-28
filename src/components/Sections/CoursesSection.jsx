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
import { getCourses } from "../../services/dataServices";
import CoursesForm from "../Forms/CoursesForm";
import CoursesSingleInfo from "../SingleElements/CoursesSingleInfo";

function Courses({ data, isOwner }) {
    const [toogle, setToogle] = useState(false);
    const [add, setAdd] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getCourses(data.user, setCourses);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [add]);

    return (
        <>
            {add && <CoursesForm data={data} setAdd={setAdd} />}
            <Info>
                <Title>Courses</Title>

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
                    {courses?.map((doc) => (
                        <CoursesSingleInfo doc={doc} />
                    ))}
                </InformationContainer>
            )}
        </>
    );
}

export default Courses;
