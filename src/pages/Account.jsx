import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import PersonalInfo from "../components/MainComponents/PersonalInfo";
import PersonalDataForm from "../components/PersonalDataForm";
import { UserAuth } from "../context/AuthContext";
import { getData } from "../services/dataServices";
import {
    DataContainer,
    Info,
    MainContainer,
} from "../styles/AccountElements";

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
                <PersonalInfo data={data} isOwner={isOwner}/>
                <DataContainer>
                    <Info>Title</Info>
                    <Info>
                        <p>Title</p>
                        <div>
                            <button>Add</button>
                            <button>Toogle</button>
                        </div>
                    </Info>
                    <Info>Title</Info>
                </DataContainer>
            </MainContainer>
        </>
    );
}

export default Account;
