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
import { getData, getUidByUsername } from "../services/dataServices";
import { DataContainer, MainContainer } from "../styles/AccountElements";
import ActionBar from "../components/MainComponents/ActionBar";

function Account() {
    const [isOwner, setIsOwner] = useState(false);
    const [data, setData] = useState(null);
    const [isNewUser, setIsNewUser] = useState(false);
    const [loading, setLoading] = useState(true);

    const { username } = useParams();
    const { user } = UserAuth();

    // Since users might navigate via sign in or direct link, we first find the target UID.
    const [targetUid, setTargetUid] = useState(null);

    useEffect(() => {
        const resolveUsername = async () => {
            if (username) {
                const fetchedUid = await getUidByUsername(username);
                if (fetchedUid) {
                    setTargetUid(fetchedUid);
                } else {
                    setLoading(false); // Username doesn't exist
                }
            } else if (user) {
                setTargetUid(user.uid); // Fallback to current user if no params (e.g., unexpected routing)
            }
        };
        resolveUsername();
    }, [username, user]);

    useEffect(() => {
        const getUserData = async () => {
            if (targetUid) {
                await getData(targetUid, setData);
            }
            setLoading(false);
        };

        if (targetUid) {
            getUserData();
        }
    }, [targetUid]);

    useEffect(() => {
        if (user !== null && targetUid) {
            setIsOwner(user.uid === targetUid);
        }
        if (!data && user && targetUid === user.uid) {
            setIsNewUser(true);
        } else {
            setIsNewUser(false);
        }
    }, [data, user, targetUid]);

    // Update document title and metadata for SEO / Sharing
    useEffect(() => {
        if (data && data.displayName) {
            const title = `${data.displayName}'s Digital CV`;
            document.title = title;
            
            // Description Meta Tag
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = "description";
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = `Check out ${data.displayName}'s digital CV and professional portfolio.`;
            
            // OpenGraph Meta Title
            let metaOgTitle = document.querySelector('meta[property="og:title"]');
            if(!metaOgTitle) {
                metaOgTitle = document.createElement('meta');
                metaOgTitle.setAttribute('property', 'og:title');
                document.head.appendChild(metaOgTitle);
            }
            metaOgTitle.content = title;
        } else {
            document.title = "Digital CV"; // Fallback
        }
    }, [data]);

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
                    <WorkExp data={data} setData={setData} isOwner={isOwner} />
                    <Education data={data} setData={setData} isOwner={isOwner} />
                    <OtherSkills data={data} setData={setData} isOwner={isOwner} />
                    <Courses data={data} setData={setData} isOwner={isOwner} />
                </DataContainer>
                {data && <ActionBar username={username} />}
            </MainContainer>
        </>
    );
}

export default Account;
