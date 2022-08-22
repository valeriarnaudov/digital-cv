import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import PersonalInfo from "../components/MainComponents/PersonalInfo";
import PersonalDataForm from "../components/PersonalDataForm";
import Courses from "../components/Sections/CoursesSection";
import Education from "../components/Sections/EducationSection";
import OtherSkills from "../components/Sections/OtherSkillsSection";
import WorkExp from "../components/Sections/WorkExpSection";
import { UserAuth } from "../context/AuthContext";
import { getData } from "../services/dataServices";
import { DataContainer, MainContainer } from "../styles/AccountElements";

function Account() {
    const [isOwner, setIsOwner] = useState(false);
    const [data, setData] = useState(null);
    const [isNewUser, setIsNewUser] = useState(false);
    const [loading, setLoading] = useState(true);

    const { uid } = useParams();
    const { user } = UserAuth();

    useEffect(() => {
        const getUserData = async () => {
            await getData(uid, setData);
            setLoading(false);
        };

        getUserData();
    }, [user, uid]);

    useEffect(() => {
        if (user !== null) {
            setIsOwner(user.uid === uid);
        }
        if (!data && user) {
            setIsNewUser(true);
        } else {
            setIsNewUser(false);
        }
    }, [data, user, uid]);

    if (isNewUser) {
        return <PersonalDataForm setData={setData} user={user} data={data} />;
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <MainContainer>
                <PersonalInfo data={data} isOwner={isOwner} />

                <DataContainer>
                    <WorkExp data={data} isOwner={isOwner} />
                    <Education data={data} isOwner={isOwner} />
                    <OtherSkills data={data} isOwner={isOwner} />
                    <Courses data={data} isOwner={isOwner} />
                </DataContainer>
            </MainContainer>
        </>
    );
}

export default Account;
